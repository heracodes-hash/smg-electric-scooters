# SMG Dashboard - Verification Checklist

Use this checklist to verify your setup is correct before running the app.

## ✅ Prerequisites Check

- [ ] **Node.js is installed**
  ```bash
  node --version
  # Should show v18.x.x or higher
  ```

- [ ] **pnpm is installed**
  ```bash
  pnpm --version
  # Should show a version number like 10.14.0
  ```

- [ ] **Project folder exists and contains files**
  ```bash
  # Windows
  dir

  # Mac/Linux
  ls
  
  # Should show:
  # - client/
  # - server/
  # - package.json
  # - vite.config.ts
  # - QUICK_START.md
  # - SETUP_INSTRUCTIONS.md
  ```

## ✅ Installation Check

- [ ] **Dependencies installed**
  ```bash
  pnpm install
  # Should complete without errors
  ```

- [ ] **node_modules folder created**
  ```bash
  # Check that node_modules folder exists
  ls node_modules    # (Mac/Linux)
  dir node_modules   # (Windows)
  ```

## ✅ Running Check

- [ ] **Dev server starts successfully**
  ```bash
  pnpm dev
  # Should show:
  # VITE v7.x.x ready in XXX ms
  # ➜  Local:   http://localhost:8080/
  ```

- [ ] **Browser works**
  ```bash
  # Open: http://localhost:8080
  # Should see SMG Dashboard login page
  ```

- [ ] **Login page displays correctly**
  - [ ] SMG header visible at top-left
  - [ ] "Login to your Account" visible
  - [ ] User Login tab active
  - [ ] Email input field visible
  - [ ] Password input field visible
  - [ ] Login button visible

## ✅ Build Check

- [ ] **Build completes without errors**
  ```bash
  pnpm build
  # Should create dist/ folder
  ```

- [ ] **TypeScript has no errors**
  ```bash
  pnpm typecheck
  # Should complete without errors
  ```

## ✅ Troubleshooting Guide

If any check fails, follow these steps:

### "Command not found: pnpm"
```bash
npm install -g pnpm
```

### "Cannot find module" errors
```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Port 8080 already in use
```bash
pnpm dev -- --port 3000
# Then visit http://localhost:3000
```

### "outside of Vite serving allow list" error
```bash
# Make sure vite.config.ts is updated (should be fixed already)
# Then restart:
pnpm dev
```

### Nothing works - complete reset
```bash
# Stop any running servers (Ctrl+C)
rm -rf node_modules dist
pnpm install
pnpm dev
```

## ✅ Once Everything Works

You can now:
- Log in with any email/password
- Access the dashboard
- Navigate to different pages
- Use the PDI Inspection feature
- Create requests
- View documents

## ✨ Success!

If all checks pass ✅, your SMG Dashboard is ready to use!

---

**Need help?** See the detailed guides:
- `QUICK_START.md` - for fastest setup
- `SETUP_INSTRUCTIONS.md` - for detailed instructions
