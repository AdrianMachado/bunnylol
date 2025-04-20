# BunnyLOL

My version of BunnyLOL, forked from Rithik, with commands added

You can host it on any website that you would like (even on GitHub Pages).

## Example Commands

type `help` to see full list

## Setup

1. Open Chrome and click the three dots. Click `Settings` and scroll down to `Search Engines`.

2. Click `Manage Search Engines`.

3. Add a new search engine with the URL being `http://rithik.me/bunnylol?search=%s`. Of course, you should change the `rithik.me` part to your own domain.

4. Make this the default search engine.

## Adding a command

1. Run `npm install` so that `flow` (JavaScript type checker) can run.

2. Open up the `src/commands.js` file. Add your command to the `COMMANDS` object. You must include a `name` and `url` attribute and you can add an additional `searchurl` attribute if you would to be able to type a command like `yt NBA Highlights` (in which case, `bunnylol` will automatically search for NBA Highlights on YouTube).

3. Run `npm run build`, `npm run bundle`, `npm run minify`.

4. Move the main.js file into the scripts folder and replace the previous version.

5. (optional) Publish to your website.

## Running locally

Since we use `import` module syntax, we need to run a server to bypass CORS issues. You can setup the server by running steps 1-3 above, followed by `node server.js`. The server should be up and visible at `localhost:6969`.
