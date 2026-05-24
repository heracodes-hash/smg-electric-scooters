# SMG Dashboard - Setup & Running Instructions

This is a professional dashboard application built with React, TypeScript, Vite, and Express. Follow these instructions to run it on your local machine and deploy it.

## ✅ Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18.17.0 or later) - Download from https://nodejs.org/
- **pnpm** package manager (required for this project)

### Step 1: Install Node.js

**Windows:**
1. Download from https://nodejs.org/ (LTS version recommended)
2. Run the installer and follow the prompts
3. Restart your computer
4. Open Command Prompt and verify: `node --version`

**Mac:**
```bash
# Using Homebrew (if installed)
brew install node

# Or download from https://nodejs.org/
```

**Linux:**
```bash
# Ubuntu/Debian
sudo apt-get update
sudo apt-get install nodejs npm

# Or download from https://nodejs.org/
```

### Step 2: Install pnpm Package Manager

This project **requires pnpm**, not npm or yarn.

```bash
npm install -g pnpm
```

Verify installation:
```bash
pnpm --version
node --version
```

You should see version numbers for both commands.

## 🖥️ Opening in VS Code

1. Open VS Code
2. Click **File → Open Folder**
3. Navigate to your project folder and select it
4. Open the **Terminal** in VS Code (Terminal → New Terminal or Ctrl+`)
5. You'll now be in the project directory
6. Follow the "Quick Start" steps below

## 🚀 Quick Start (Local Development)

### Step 1: Navigate to Project Directory

**Windows (PowerShell or CMD):**
```bash
cd C:\Users\YourName\path\to\smg-dashboard
```

**Mac/Linux:**
```bash
cd /Users/YourName/path/to/smg-dashboard
# or
cd ~/projects/smg-dashboard
```

Verify you're in the right folder:
```bash
# Should show these files/folders
dir     # (Windows)
ls      # (Mac/Linux)

# You should see:
# - client/
# - server/
# - package.json
# - vite.config.ts
```

### Step 2: Install Dependencies
```bash
pnpm install
```

This will install all required packages listed in `package.json`.

### Step 3: Start Development Server
```bash
pnpm dev
```

The app will start on **http://localhost:8080**

You should see:
```
  VITE v7.x.x  ready in 234 ms

  ➜  Local:   http://localhost:8080/
  ➜  press h + enter to show help
```

### Step 4: Open in Browser
Open your browser and go to:
```
http://localhost:8080/
```

You should see the SMG Dashboard login page with the branded header.

## 🛠️ Troubleshooting Common Issues

### Issue 1: "outside of Vite serving allow list" Error
**Symptoms:**
```
The request id '...index.html' is outside of Vite serving allow list
```

**Solution**: This is already fixed in the updated `vite.config.ts`. If you still see this:
1. Stop the dev server (Ctrl+C)
2. Run: `pnpm install`
3. Run: `pnpm dev`

### Issue 2: "Command not found: pnpm"
**Solution**: Install pnpm globally
```bash
npm install -g pnpm
pnpm --version  # Verify installation
```

### Issue 3: "Cannot find module" or "Module not found" errors
**Solution**: Clear node_modules and reinstall
```bash
# Windows
rmdir /s /q node_modules
del pnpm-lock.yaml
pnpm install

# Mac/Linux
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Issue 4: Port 8080 already in use
**Solution**: Use a different port
```bash
pnpm dev -- --port 3000
```
Then access the app at `http://localhost:3000`

### Issue 5: "Cannot find file" errors in terminal
**Solution**: Make sure you're in the correct project directory
```bash
# Windows
cd C:\Users\YourName\path\to\project
dir   # Should show package.json, vite.config.ts, etc

# Mac/Linux
cd /path/to/project
ls    # Should show package.json, vite.config.ts, etc
```

### Issue 6: TypeScript or build errors
**Solution**: Run type check and build
```bash
pnpm typecheck
pnpm build
```

### Issue 7: "npm ERR! code ERESOLVE" - Dependencies conflict
**Solution**: Use legacy peer deps
```bash
pnpm install --legacy-peer-deps
```
(This is already configured in `.npmrc`)

### Issue 8: "Timeout or network errors"
**Solution**: Clear npm cache and reinstall
```bash
npm cache clean --force
pnpm install --no-frozen-lockfile
```

## 💻 Windows-Specific Setup

If you're on Windows and encounter issues:

1. **Use PowerShell or CMD, not Git Bash** for best compatibility
2. **Ensure paths don't have spaces** - place project in `C:\Users\YourName\projects\smg-dashboard` (avoid Desktop or Documents if possible)
3. **Run as Administrator** if you get permission errors:
   - Right-click PowerShell/CMD
   - Select "Run as administrator"
4. **Disable antivirus temporarily** if installation is very slow (only if from trusted source)

### Recommended Windows Terminal Setup:
- Install Windows Terminal from Microsoft Store (recommended)
- Use PowerShell 7+ or Windows PowerShell
- Run all commands from project root directory

## 📦 Building for Production

When you're ready to deploy:

```bash
pnpm build
```

This creates optimized files in the `dist/` folder that can be deployed to hosting services like Netlify, Vercel, or any web server.

### To test production build locally:
```bash
pnpm build
pnpm start
```

## 📁 Project Structure

```
├── client/                 # React frontend code
│   ├── pages/             # Page components
│   ├── components/        # Reusable UI components
│   ├── main.tsx           # React entry point
│   └── App.tsx            # Main app routes
├── server/                # Express backend
├── shared/                # Shared utilities/types
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── package.json           # Dependencies and scripts
├── index.html             # HTML entry point
└── tailwind.config.ts     # Tailwind CSS configuration
```

## 🔐 Login Credentials

For testing the application:
- **User Login**: Use any email/password combination (frontend only - no validation)
- **Admin Login**: Use any Admin ID/password combination
- Click "Login" to proceed to the dashboard

## 💡 Available Pages

After logging in, you can access:
- **Dashboard**: Main overview page
- **Parts List**: Vehicle parts management
- **List my Requests**: View your requests
- **Request Form**: Create new requests
- **PDI Inspection**: Pre-delivery inspection checklist
- **Documents**: Document management
- **Policies**: Company policies
- **Facilities**: Facilities information
- **Profile**: User profile management

## 🚢 Deployment to Netlify

1. Connect your repository to Netlify
2. Set build command: `pnpm build`
3. Set publish directory: `dist/spa`
4. Click Deploy

## 🚢 Deployment to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📞 Need Help?

If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Check that pnpm is installed: `pnpm --version`
3. Delete node_modules and reinstall: `rm -rf node_modules && pnpm install`
4. Check for error messages in the terminal for specific issues
5. Make sure you're running the correct commands from the project root

## ✨ Features

- ✅ Responsive design with Tailwind CSS
- ✅ Modern UI with Radix UI components
- ✅ Authentication (User & Admin login)
- ✅ Professional branding (SMG)
- ✅ Pre-Delivery Inspection (PDI) workflow
- ✅ Dashboard with analytics
- ✅ Form management with React Hook Form
- ✅ TypeScript for type safety

Happy coding! 🎉
