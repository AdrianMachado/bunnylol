export type CommandType = {
  name: string;
  url: string;
  searchurl?: string;
  normalizeSearch?: "incidentReference";
};

export type CommandNames =
  | "yt"
  | "gh"
  | "vs"
  | "g"
  | "gmail"
  | "gdrive"
  | "gmaps"
  | "gcal"
  | "lnr"
  | "inc"
  | "notion"
  | "ghos"
  | "ghfk"
  | "pros"
  | "prfk"
  | "argocd"
  | "patchfk"
  | "DEFAULT";

export type CommandDataTableType = {
  name: string;
  url: string;
  command: CommandNames;
};

export type ColumnDataTableType = {
  data: string;
  title: string;
};

export const COMMANDS: Record<CommandNames, CommandType> = {
  gmail: {
    name: "Gmail",
    url: "https://mail.google.com/mail/u/0",
    searchurl: "https://mail.google.com/mail/u/",
  },
  gdrive: {
    name: "Google Drive",
    url: "https://drive.google.com/drive/u/0",
    searchurl: "https://drive.google.com/drive/u/",
  },
  gmaps: {
    name: "Google Maps",
    url: "https://www.google.com/maps/",
    searchurl: "https://www.google.com/maps/search/",
  },
  yt: {
    name: "YouTube",
    url: "https://youtube.com/",
    searchurl: "https://www.youtube.com/results?search_query=",
  },
  gh: {
    name: "GitHub",
    url: "https://github.com/",
    searchurl: "https://www.github.com/search?q=",
  },
  ghos: {
    name: "Datahub OSS",
    url: "https://github.com/datahub-project/datahub",
  },
  ghfk: {
    name: "Datahub Fork",
    url: "https://github.com/${env:GITHUB_FORK_PROJECT}/${env:GITHUB_FORK_REPO}",
  },
  pros: {
    name: "Datahub Core PRs",
    url: "https://github.com/datahub-project/datahub/pulls",
  },
  prfk: {
    name: "Datahub Fork PRs",
    url: "https://github.com/${env:GITHUB_FORK_PROJECT}/${env:GITHUB_FORK_REPO}/pulls",
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
  vs: {
    name: "VS Code",
    url: "vscode://",
  },
  gcal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r",
  },
  lnr: {
    name: "Linear issue",
    url: "https://linear.app/${env:LINEAR_WORKSPACE_ID}/inbox",
    searchurl: "https://linear.app/${env:LINEAR_WORKSPACE_ID}/issue/",
  },
  inc: {
    name: "incident.io incident",
    url: "https://app.incident.io/${env:INCIDENT_ORG_ID}/incidents",
    searchurl: "https://app.incident.io/${env:INCIDENT_ORG_ID}/incidents/%s",
    normalizeSearch: "incidentReference",
  },
  notion: {
    name: "Notion",
    url: "https://www.notion.so/",
  },
  argocd: {
    name: "ArgoCD",
    url: "${env:ARGOCD_URL}",
    searchurl:
      "${env:ARGOCD_URL}applications?showFavorites=false&proj=&sync=&autoSync=&health=&namespace=&cluster=&labels=&search=",
  },
  patchfk: {
    name: "Patch Fork",
    url: "https://patch-diff.githubusercontent.com/",
    searchurl:
      "https://patch-diff.githubusercontent.com/raw/${env:GITHUB_FORK_PROJECT}/${env:GITHUB_FORK_REPO}/pull/%s.diff",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
