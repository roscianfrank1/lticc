# LTICC - Luton Town & Indians Cricket Club Website

A fully responsive, CMS-powered web application built for **Luton Town & Indians Cricket Club (LTICC)**. This project features a polished frontend design, real-time data integration via Firebase, and a secure administrative dashboard for content management.

## 🚀 Live Links
- **Development Preview:** [https://ais-dev-nwarrxgzicjuphiklzwtrk-801753884312.europe-west2.run.app](https://ais-dev-nwarrxgzicjuphiklzwtrk-801753884312.europe-west2.run.app)
- **Admin Login:** `/admin/login`
- **Admin Dashboard:** `/admin/dashboard` (Requires Admin Auth)

---

## 🚀 Deployment to GitHub Pages

I have pre-configured this project for automatic deployment to GitHub Pages.

### **How to Deploy:**
1.  **Export to GitHub:** Click the **Settings** (gear icon) in the AI Studio sidebar and select **Export to GitHub**. Follow the prompts to create a new repository.
2.  **Enable GitHub Actions:** 
    *   Go to your new repository on GitHub.
    *   Navigate to **Settings > Pages**.
    *   Under **Build and deployment > Source**, ensure **GitHub Actions** is selected.
3.  **Automatic Build:** I've added a `.github/workflows/deploy.yml` file. Every time you push code to the `main` branch, GitHub will automatically build the project and host it for you.
4.  **Base URL:** I have set the `base` path to `./` in `vite.config.ts`, making it compatible with both custom domains and `username.github.io/repo-name/` subfolders.

---

## 🛠 Tech Stack
- **Frontend:** React 19 + TypeScript
- **Styling:** Tailwind CSS 4.0 (using modern `@theme` variables)
- **Animations:** motion/react (Framer Motion)
- **Routing:** React Router v7
- **Backend/Database:** Google Firebase (Firestore + Authentication)
- **Icons:** Lucide React

---

## 🏗 Project Structure
- `src/components/`: Reusable UI components.
  - `layout/`: Navbar, Footer, and Page Layout wrappers.
  - `home/`: Home-specific components like Hero and LiveTicker.
  - `admin/`: Admin-specific wrappers like `AdminAuth`.
- `src/pages/`: Main application screens (Home, Fixtures, Membership).
  - `admin/`: CMS-related pages (Login, Dashboard).
- `src/services/`: Data fetching and Firebase interaction logic (`cmsService.ts`).
- `src/lib/`: Library initializations (Firebase, Utilities).
- `firestore.rules`: Security logic governing database access.
- `firebase-blueprint.json`: The source of truth for the database schema.

---

## 🔐 CMS & Admin Access
The website is dynamic. To update the content:
1. Navigate to `/admin/login`.
2. Log in using the authorized Google account: **roscian.frank@ten10.com**.
3. Access the **Dashboard** to manage matches.

### **Features in CMS:**
- **Fixtures:** Add, view, and delete upcoming matches.
- **Results:** Log match scores and outcomes. These automatically update the "Recent Results" section on the homepage and the main scoreboard.

---

## 📊 Database Schema (Firestore)
The database structure is managed through the following collections:
- `fixtures`: Stores match metadata (Opponent, Date, Venue, Team).
- `results`: Stores final scores, outcomes (Win/Loss), and match margins.
- `news`: (Ready for expansion) For club announcements.
- `club_info`: (Ready for expansion) For static site content management.

---

## 🛡 Security Policy
- **Read Access:** Publicly available for all users.
- **Write Access:** Strictly restricted to the admin email via Firebase Security Rules. 
- **Validation:** All incoming data is validated against a schema to prevent "Resource Poisoning" or invalid data types.

---

## 💻 Local Development

### **1. Install Dependencies**
```bash
npm install
```

### **2. Setup Environment Variables**
Create a `.env` file (or use local secrets) with:
- `GEMINI_API_KEY`: For AI-powered features (if implemented).
- `VITE_FIREBASE_API_KEY`: Your Firebase configuration.

### **3. Run Development Server**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

---

## 📝 Future Improvements
- [ ] **News CMS:** Complete the UI for the News/Blog section.
- [ ] **Image Uploads:** Integrate Firebase Storage for match photos.
- [ ] **Player Stats:** Add a collection for individual player performances.
- [ ] **Membership CRM:** Expand the membership registration to save data directly to Firestore.

---

*Project created and maintained for LTICC Heritage.*
