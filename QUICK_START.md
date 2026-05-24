# SMG Dashboard - Quick Start (3 Minutes ⚡)

## One-Time Setup

1. **Install Node.js**: Download from https://nodejs.org/ (LTS version)
2. **Restart computer** after Node.js installation
3. **Install pnpm**:
   ```bash
   npm install -g pnpm
   ```
4. **Verify** it works:
   ```bash
   node --version
   pnpm --version
   ```

## Every Time You Want to Run the App

1. **Open VS Code**
2. **Open folder** with the project
3. **Open terminal** (Terminal → New Terminal)
4. **Run these commands**:
   ```bash
   pnpm install
   pnpm dev
   ```
5. **Open browser** and go to: `http://localhost:8080`

## That's it! 🎉

The app should now be running. 

### Login with:
- **User**: Any email/password
- **Admin**: Any ID/password
- Click **Login** to see the dashboard

## If Something Goes Wrong

**Stop the app:** Press `Ctrl+C` in the terminal

**Restart everything:**
```bash
pnpm install
pnpm dev
```

**Clear everything and start fresh:**
```bash
rm -rf node_modules
pnpm install
pnpm dev
```

## URLs

- **Local app**: http://localhost:8080
- **Terminal output** should show: `Local: http://localhost:8080/`

---

For detailed setup instructions, see `SETUP_INSTRUCTIONS.md`
