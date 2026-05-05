# BunnyLOL

A custom search engine that allows you to quickly navigate to websites and perform searches using short commands.

## Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Configure local private command URLs:**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` with any private workspace URLs you want to keep out of source control.

3. **Build the project:**

   ```bash
   npm run build
   ```

4. **Start the server:**

   ```bash
   npm run dev
   ```

   Or run separately:

   ```bash
   node server.js
   ```

   The server will be available at `http://localhost:6969`

5. **Configure your browser:**
   - Open Chrome Settings → Search Engines → Manage Search Engines
   - Add a new search engine:
     - **Name:** BunnyLOL (or any name you prefer)
     - **Keyword:** `b` (or any keyword)
     - **URL:** `http://localhost:6969/bunnylol?s=%s`
   - Make it your default search engine

Now you can type commands like `yt cats` or `gh` in your browser's address bar!

## Adding Commands

1. Open `src/commands.ts`

2. Add your command to the `COMMANDS` object:

   ```typescript
   mycmd: {
     name: "My Site",
     url: "https://example.com",
     searchurl: "https://example.com/search?q=",  // Optional
   },
   ```

3. Add the command name to the `CommandNames` type union

4. Rebuild:

   ```bash
   npm run build
   ```

5. Restart the server if it's running

**Command attributes:**

- `name` (required): Display name for the command
- `url` (required): Base URL to navigate to
- `searchurl` (optional): URL pattern for search queries. Use `%s` or it will append the search term
- Use `${env:ENV_VAR_NAME}` anywhere in `url` or `searchurl` for private values loaded from local `.env` at runtime

**Examples:**

- `yt` → Opens YouTube
- `yt cats` → Searches YouTube for "cats"
- `gh` → Opens GitHub
- `gh typescript` → Searches GitHub for "typescript"

## Project Structure

- `src/` - TypeScript source files
  - `commands.ts` - Command definitions
  - `app.ts` - Main application logic
  - `help.ts` - Help page rendering
- `compiled/` - Compiled JavaScript (generated)
- `scripts/main.js` - Minified bundle (generated)
- `server.js` - Express server for local development

## Development

- `npm run build` - Compile TypeScript, bundle, and minify
- `npm run dev` - Build and start the server
- `npm run type-check` - Type check without building

## Hosting

You can host this on any static hosting service (GitHub Pages, Netlify, Vercel, etc.). Just update the search engine URL in your browser to point to your deployed domain instead of `localhost:6969`.
