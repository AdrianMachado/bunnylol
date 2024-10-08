// @flow strict

export type CommandType = {|
  name: string,
  url: string,
  searchurl?: string,
|};

export type CommandNames =
  | "fb"
  | "m"
  | "mw"
  | "wa"
  | "waw"
  | "gm"
  | "sis"
  | "col"
  | "yt"
  | "tv"
  | "gh"
  | "r"
  | "li"
  | "me"
  | "ig"
  | "tw"
  | "tr"
  | "vs"
  | "todo"
  | "c"
  | "wf"
  | "$"
  | "cal"
  | "hs"
  | "p"
  | "n"
  | "h"
  | "pv"
  | "gd"
  | "wp"
  | "wsj"
  | "cnn"
  | "wiki"
  | "g"
  | "gmail"
  | "gdrive"
  | "gmaps"
  | "przp"
  | "zp"
  | "nflx"
  | "hulu"
  | "gcal"
  | "gkeep"
  | "sentry"
  | "linear"
  | "lnr"
  | "notion"
  | "DEFAULT";

export type CommandDataTableType = {|
  name: string,
  url: string,
  command: CommandNames,
|};

export type ColumnDataTableType = {|
  data: string,
  title: string,
|};

export const COMMANDS: { [CommandNames]: CommandType } = {
  fb: {
    name: "Facebook",
    url: "https://facebook.com/",
    searchurl: "https://www.facebook.com/search/top/?q=",
  },
  m: {
    name: "Messenger Desktop App",
    url: "messenger://",
  },
  wa: {
    name: "WhatsApp Desktop App",
    url: "whatsapp://",
  },
  waw: {
    name: "WhatsApp Web",
    url: "https://web.whatsapp.com/",
  },
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
  przp: {
    name: "Github Zuplo Portal PRs",
    url: "https://github.com/zuplo/portal/pulls",
  },
  ghzp: {
    name: "Github Zuplo Portal",
    url: "https://github.com/zuplo/portal",
  },
  prc: {
    name: "Github Zuplo Core PRs",
    url: "https://github.com/zuplo/core/pulls",
  },
  ghc: {
    name: "Github Zuplo Core",
    url: "https://github.com/zuplo/core",
  },
  prdp: {
    name: "Github Zuplo Dev Portal Pulls",
    url: "https://github.com/zuplo/dev-portal/pulls",
  },
  ghdp: {
    name: "Github Zuplo Dev Portal",
    url: "https://github.com/zuplo/dev-portal",
  },
  rmoa: {
    name: "Rate My OpenAPI",
    url: "https://ratemyopenapi.com/",
  },
  ghrmoa: {
    name: "Github Rate My OpenAPI",
    url: "https://github.com/zuplo/rate-my-openapi",
  },
  prw: {
    name: "Github WWW Pulls",
    url: "https://github.com/zuplo/www",
  },
  ghw: {
    name: "Github WWW",
    url: "https://github.com/zuplo/www/pulls",
  },
  prdc: {
    name: "Github WWW Pulls",
    url: "https://github.com/zuplo/docs",
  },
  ghdc: {
    name: "Github WWW",
    url: "https://github.com/zuplo/docs/pulls",
  },
  pzc: {
    name: "Zuplo Portal",
    url: "https://portal.zuplo.com/",
  },
  r: {
    name: "Reddit",
    url: "https://reddit.com/",
    searchurl: "https://www.reddit.com/search?q=",
  },
  li: {
    name: "Linkedin",
    url: "https://linkedin.com/",
  },
  g: {
    name: "Google",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
  nflx: {
    name: "Netflix",
    url: "https://netflix.com/",
    searchurl: "https://www.netflix.com/search?q=",
  },
  hulu: {
    name: "Hulu",
    url: "https://hulu.com/",
  },
  vs: {
    name: "VS Code",
    url: "vscode://",
  },
  gcal: {
    name: "Google Calendar",
    url: "https://calendar.google.com/calendar/r",
  },
  wiki: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org",
    searchurl: "https://en.wikipedia.org/wiki/",
  },
  gkeep: {
    name: "Google Keep",
    url: "https://keep.google.com/#home",
  },
  sentry: {
    name: "Sentry",
    url: "https://sentry.io/organizations/zuplo/issues/",
  },
  linear: {
    name: "Linear",
    url: "https://linear.app/zuplo/inbox",
    searchurl: "https://linear.app/zuplo/search?q=",
  },
  lnr: {
    name: "Linear issue",
    url: "https://linear.app/zuplo/team/ZUP/new",
    searchurl: "https://linear.app/zuplo/issue/",
  },
  notion: {
    name: "Notion",
    url: "https://www.notion.so/",
  },
  ld: {
    name: "Launch Darkly",
    url: "https://app.launchdarkly.com/default/production/features",
    searchurl: "https://app.launchdarkly.com/default/production/features/",
  },
  ph: {
    name: "Posthog",
    url: "https://us.posthog.com/project/33776",
  },
  gsc: {
    name: "Google Search Console",
    url: "https://search.google.com/search-console?utm_source=about-page&resource_id=sc-domain:zuplo.com",
  },
  DEFAULT: {
    name: "Default - Google Search",
    url: "https://google.com/",
    searchurl: "https://www.google.com/search?q=",
  },
};
