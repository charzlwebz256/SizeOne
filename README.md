<p align="center">
  <img src="/services/ChatGPT Image Oct 16, 2025, 10_41_39 AM.png" alt="SizeOne Logo" width="200"/>
</p>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app SizeOne:  http://localhost:5174/

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Help / Run locally (detailed)

Follow these steps to run the app locally and troubleshoot common issues.

Prerequisites
- Node.js (14+ recommended)

Install dependencies

```bash
npm install
```

Environment
- Create a file named `.env.local` in the project root and add your Gemini API key. Example:

```text
GEMINI_API_KEY=your_gemini_api_key_here
```

Notes:
- The project maps `GEMINI_API_KEY` into the client via `vite.config.ts`. If the key is missing the app will still run but features that call the Gemini API will respond with an informative message.

Commands

- Start dev server (PowerShell):

```powershell
npm run dev
```

- Start dev server on a specific port (PowerShell). Example to force port 5173:

```powershell
npm run dev -- --port 5173
```

- If you run into PowerShell execution policy issues when running `npm` scripts, you can run commands in cmd instead:

```cmd
cmd /c npm run dev -- --port 5173
```

- Typecheck (run TypeScript compiler):

```bash
npm run typecheck
```

- Build for production:

```bash
npm run build
```

- Preview the production build locally:

```bash
npm run preview
```

Troubleshooting

- Dev server picks a different port (e.g., shows 5174 instead of 5173): Vite will automatically try the next free port when the requested port is in use. Check your terminal for the actual URL (it prints the Local URL). Open that URL in your browser.

- Find and free a port on Windows:

```powershell
netstat -ano | Select-String ":5173"
# then kill the PID found (replace <PID> with the number)
taskkill /PID <PID> /F
```

- If the app shows content from a different project, ensure you opened the correct workspace and that the dev server printed the correct Local URL in the terminal.

Local storage and migrations

- This app stores chat history and theme in localStorage under these keys:
   - `sizeone-chat`
   - `sizeone-theme`

- If you previously used a different version of the app that stored data under `aifusion-*` keys, those will not be read automatically. To preserve old data you can manually migrate it (open the browser console and run):

```javascript
// migration snippet to copy old aifusion keys to new sizeone keys
try {
   const old = localStorage.getItem('aifusion-chat');
   if (old && !localStorage.getItem('sizeone-chat')) {
      localStorage.setItem('sizeone-chat', old);
      console.log('Migrated aifusion-chat -> sizeone-chat');
   }
   const oldTheme = localStorage.getItem('aifusion-theme');
   if (oldTheme && !localStorage.getItem('sizeone-theme')) {
      localStorage.setItem('sizeone-theme', oldTheme);
      console.log('Migrated aifusion-theme -> sizeone-theme');
   }
} catch (e) {
   console.warn('Migration failed', e);
}
```

Security and API notes

- Do not commit your real API keys to source control. Keep `.env.local` in `.gitignore` (the repo already includes a `.gitignore`).
- For local development without an API key, consider adding a small mock in `services/geminiService.ts` that returns canned responses (I can add that for you if you want).

Need help?
- Tell me what platform/port you're using and any terminal output and I can help diagnose issues, start/stop the dev server, or add a development mock for the Gemini API.
