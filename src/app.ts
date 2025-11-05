import type { CommandType, CommandNames } from "./commands.js";

import { COMMANDS } from "./commands.js";
import { viewHelpPage } from "./help.js";

const redirect = async function (url: string): Promise<void> {
  window.location.replace(url);
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
      await redirect(
        `https://linear.app/acryl-data/issue/${encodeURIComponent(currCmd)}`
      );
      return true;
    }
    if (prefix in COMMANDS) {
      const command: CommandType | undefined = COMMANDS[prefix as CommandNames];
      if (!command) {
        return false;
      }
      const protocol: string = new URL(command.url).protocol;
      if (protocol !== "https:" && protocol !== "http:") {
        viewHelpPage();
        return true;
      }
      if (command.searchurl && arr.length > 1) {
        // Has search term - use searchurl
        const searchParam = prefix !== "$" ? prefix.length + 1 : prefix.length;
        await redirect(
          `${command.searchurl}${encodeURIComponent(
            currCmd.substring(searchParam).trim()
          )}`
        );
        return true;
      } else if (command.searchurl && arr.length === 1) {
        // Just command, but has searchurl - redirect to base url
        await redirect(command.url);
        return true;
      } else {
        // No searchurl - always redirect to base url
        await redirect(command.url);
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
