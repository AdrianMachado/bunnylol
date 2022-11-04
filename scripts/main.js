'use strict';const COMMANDS={fb:{name:"Facebook",url:"https://facebook.com/",searchurl:"https://www.facebook.com/search/top/?q="},m:{name:"Messenger Desktop App",url:"messenger://"},wa:{name:"WhatsApp Desktop App",url:"whatsapp://"},waw:{name:"WhatsApp Web",url:"https://web.whatsapp.com/"},gmail:{name:"Gmail",url:"https://mail.google.com/mail/u/0",searchurl:"https://mail.google.com/mail/u/"},gdrive:{name:"Google Drive",url:"https://drive.google.com/drive/u/0",searchurl:"https://drive.google.com/drive/u/"},gmaps:{name:"Google Maps",url:"https://www.google.com/maps/",searchurl:"https://www.google.com/maps/search/"},yt:{name:"YouTube",url:"https://youtube.com/",searchurl:"https://www.youtube.com/results?search_query="},gh:{name:"GitHub",url:"https://github.com/",searchurl:"https://www.github.com/search?q="},przp:{name:"Github Zuplo Portal PRs",url:"https://github.com/zuplo/portal/pulls"},ghzp:{name:"Github Zuplo Portal",url:"https://github.com/zuplo/portal"},prc:{name:"Github Zuplo Core PRs",url:"https://github.com/zuplo/core/pulls"},ghc:{name:"Github Zuplo Core",url:"https://github.com/zuplo/core"},prdp:{name:"Github Zuplo Dev Portal Pulls",url:"https://github.com/zuplo/dev-portal/pulls"},ghdp:{name:"Github Zuplo Dev Portal",url:"https://github.com/zuplo/dev-portal"},pzc:{name:"Zuplo Portal",url:"https://portal.zuplo.com/"},r:{name:"Reddit",url:"https://reddit.com/",searchurl:"https://www.reddit.com/search?q="},li:{name:"Linkedin",url:"https://linkedin.com/"},g:{name:"Google",url:"https://google.com/",searchurl:"https://www.google.com/search?q="},nflx:{name:"Netflix",url:"https://netflix.com/",searchurl:"https://www.netflix.com/search?q="},hulu:{name:"Hulu",url:"https://hulu.com/"},vs:{name:"VS Code",url:"vscode://"},gcal:{name:"Google Calendar",url:"https://calendar.google.com/calendar/r"},wiki:{name:"Wikipedia",url:"https://en.wikipedia.org",searchurl:"https://en.wikipedia.org/wiki/"},gkeep:{name:"Google Keep",url:"https://keep.google.com/#home"},sentry:{name:"Sentry",url:"https://sentry.io/organizations/zuplo/issues/"},linear:{name:"Linear",url:"https://linear.app/zuplo/inbox",searchurl:"https://linear.app/zuplo/search?q="},lnr:{name:"Linear issue",url:"https://linear.app/zuplo/team/ZUP/new",searchurl:"https://linear.app/zuplo/issue/"},notion:{name:"Notion",url:"https://www.notion.so/"},ld:{name:"Launch Darkly",url:"https://app.launchdarkly.com/default/production/features",searchurl:"https://app.launchdarkly.com/default/production/features/"},DEFAULT:{name:"Default - Google Search",url:"https://google.com/",searchurl:"https://www.google.com/search?q="}},viewHelpPage=function(){const a=Object.keys(COMMANDS).map(a=>{const b=COMMANDS[a];return{name:b.name,url:b.url,command:a}});$("#help-table").DataTable({data:a,columns:[{data:"command",title:"Command"},{data:"name",title:"Name"},{data:"url",title:"URL"}],order:[[1,"asc"]],paging:!1})},redirect=async function(a){await window.location.replace(a)},bunnylol=async function(a){let b=[];if(a.startsWith("$")?(b=a.split(/[ $+]/g),b[0]="$",""===b[1]&&(b=["$"])):b=a.split(/[ +]/g),0<b.length){const c=b[0].endsWith(".")?b[0].substring(0,b[0].length-1).toLowerCase():b[0].toLowerCase(),d=b[0].includes("ZUP-");if(d)return await redirect(`https://linear.app/zuplo/issue/${encodeURIComponent(a)}`),!0;if(c in COMMANDS){const d=COMMANDS[c],e=new URL(d.url).protocol;if("https:"!==e&&"http:"!==e&&viewHelpPage(),d.searchurl&&1!==b.length){const b="$"===c?c.length:c.length+1;return await redirect(`${d.searchurl}${encodeURIComponent(a.substr(b))}`),!0}return await redirect(d.url),!0}}return!1},currCmd=new URL(window.location.href).searchParams.get("s")??"help";switch(currCmd){case"help":viewHelpPage();break;default:bunnylol(currCmd).then(a=>{!a&&COMMANDS.DEFAULT.searchurl&&redirect(`${COMMANDS.DEFAULT.searchurl}${encodeURIComponent(currCmd)}`)}).catch(a=>{console.log(a)});}