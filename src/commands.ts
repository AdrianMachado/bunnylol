export type CommandType = {
  name: string;
  url: string;
  searchurl?: string;
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
  | "notion"
  | "ghos"
  | "ghfk"
  | "pros"
  | "prfk"
  | "dptst"
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
    url: "https://github.com/acryldata/datahub-fork",
  },
  pros: {
    name: "Datahub Core PRs",
    url: "https://github.com/datahub-project/datahub/pulls",
  },
  prfk: {
    name: "Datahub Fork PRs",
    url: "https://github.com/acryldata/datahub-fork/pulls",
  },
  dptst: {
    name: "Datahub Deploy Test",
    url: "https://deploy-test.acryl.io/",
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
    url: "https://linear.app/acryl-data/inbox",
    searchurl: "https://linear.app/acryl-data/issue/",
  },
  notion: {
    name: "Notion",
    url: "https://www.notion.so/",
  },
  argocd: {
    name: "ArgoCD",
    url: "https://argocd.admin.acryl.io/",
    searchurl:
      "https://argocd.admin.acryl.io/applications?showFavorites=false&proj=&sync=&autoSync=&health=&namespace=&cluster=&labels=&search=",
  },
  patchfk: {
    name: "Patch Fork",
    url: "https://patch-diff.githubusercontent.com/",
    searchurl:
      "https://patch-diff.githubusercontent.com/raw/acryldata/datahub-fork/pull/%s.diff",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
