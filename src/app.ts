import type { CommandType, CommandNames } from "./commands.js";

import { COMMANDS } from "./commands.js";
import { viewHelpPage } from "./help.js";

type BunnylolConfig = Record<string, string | undefined>;

declare global {
  interface Window {
    BUNNYLOL_CONFIG?: BunnylolConfig;
  }
}

const ENV_TEMPLATE_PATTERN = /\$\{env:([A-Z_][A-Z0-9_]*)\}/g;

const redirect = async function (url: string): Promise<void> {
  window.location.replace(url);
};

const resolveUrl = function (url: string): string | undefined {
  let missingEnvVar = false;
  const resolvedUrl = url.replace(ENV_TEMPLATE_PATTERN, (_match, key) => {
    const value = window.BUNNYLOL_CONFIG?.[key];
    if (!value) {
      missingEnvVar = true;
      return "";
    }
    return value;
  });
  return missingEnvVar ? undefined : resolvedUrl;
};

const buildSearchUrl = function (url: string, searchTerm: string): string {
  return url.includes("%s")
    ? url.replace("%s", encodeURIComponent(searchTerm))
    : `${url}${encodeURIComponent(searchTerm)}`;
};

const bunnylol = async function (currCmd: string): Promise<boolean> {
  let arr: Array<string> = [];
  if (currCmd.startsWith("$")) {
    arr = currCmd.split(/[ $+]/g);
    arr[0] = "$";
    if (arr[1] === "") {
      arr = ["$"];
    }
  } else {
    arr = currCmd.split(/[ +]/g);
  }
  if (arr.length > 0) {
    const prefix: string = arr[0].endsWith(".")
      ? arr[0].substring(0, arr[0].length - 1).toLowerCase()
      : arr[0].toLowerCase();
    const isLinear = arr[0].includes("CUS-");
    if (isLinear) {
      const linearIssueUrl = COMMANDS.lnr.searchurl
        ? resolveUrl(COMMANDS.lnr.searchurl)
        : undefined;
      if (linearIssueUrl) {
        await redirect(buildSearchUrl(linearIssueUrl, currCmd));
        return true;
      }
      return false;
    }
    if (prefix in COMMANDS) {
      const command: CommandType | undefined = COMMANDS[prefix as CommandNames];
      if (!command) {
        return false;
      }
      const commandUrl = resolveUrl(command.url);
      if (!commandUrl) {
        viewHelpPage();
        return true;
      }
      const commandSearchUrl = command.searchurl
        ? resolveUrl(command.searchurl)
        : undefined;
      if (command.searchurl && !commandSearchUrl) {
        viewHelpPage();
        return true;
      }
      const protocol: string = new URL(commandUrl).protocol;
      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
        return true;
      }
      if (commandSearchUrl && arr.length > 1) {
        // Has search term - use searchurl
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        const searchTerm = currCmd.substring(searchParam).trim();
        const normalizedSearchTerm =
          command.normalizeSearch === "incidentReference"
            ? searchTerm.replace(/^INC-/i, "")
            : searchTerm;
        const searchUrl = buildSearchUrl(commandSearchUrl, normalizedSearchTerm);
        await redirect(searchUrl);
        return true;
      } else if (commandSearchUrl && arr.length === 1) {
        // Just command, but has searchurl - redirect to base url
        await redirect(commandUrl);
        return true;
      } else {
        // No searchurl - always redirect to base url
        await redirect(commandUrl);
        return true;
      }
    }
  }
  return false;
};

const currCmd: string =
  new URL(window.location.href).searchParams.get("s") ?? "help";
switch (currCmd) {
  case "help":
  case "":
    viewHelpPage();
    break;
  default:
    bunnylol(currCmd)
      .then((done: boolean) => {
        const defaultCmd = COMMANDS.DEFAULT;
        if (!done && defaultCmd && defaultCmd.searchurl) {
          redirect(`${defaultCmd.searchurl}${encodeURIComponent(currCmd)}`);
        }
      })
      .catch((reject: unknown) => {
        console.log(reject);
      });
    break;
}
