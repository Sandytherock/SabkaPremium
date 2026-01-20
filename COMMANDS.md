# 🎯 Quick Commands Reference

## Development Commands

### Start Development Server
```bash
cd sabkapremium-react
npm run dev
```
Then open: http://localhost:5173/reviews

### Build for Production
```bash
cd sabkapremium-react
npm run build
```

### Preview Production Build
```bash
cd sabkapremium-react
npm run preview
```

### Install Dependencies (if needed)
```bash
cd sabkapremium-react
npm install
```

---

## Supabase Setup Commands

### 1. Create Supabase Project
👉 Go to: https://supabase.com
- Click "New Project"
- Fill in details
- Choose Free plan

### 2. Run SQL Setup
👉 In Supabase Dashboard:
1. Open **SQL Editor**
2. Click **New Query**
3. Copy content from `supabase-setup.sql`
4. Paste and click **Run**

### 3. Get Credentials
👉 In Supabase Dashboard:
1. Go to **Settings** → **API**
2. Copy:
   - **Project URL**
   - **anon public key**

### 4. Add to .env.local
```env
VITE_SUPABASE_URL=your_url_here
VITE_SUPABASE_ANON_KEY=your_key_here
```

---

## Troubleshooting Commands

### Check if Supabase package is installed
```bash
npm list @supabase/supabase-js
```

### Clear node_modules and reinstall
```bash
rm -rf node_modules
npm install
```

### Check environment variables (won't show values, just confirms file exists)
```bash
# Windows
type .env.local

# Mac/Linux
cat .env.local
```

### Restart dev server
```bash
# Stop server: Ctrl+C
npm run dev
```

---

## File Locations

```
sabkapremium-react/
├── .env.local                    ← Add your credentials here
├── supabase-setup.sql           ← Run this in Supabase SQL Editor
├── src/
│   ├── lib/
│   │   └── supabase.js          ← Supabase client
│   └── pages/
│       └── Reviews.jsx          ← Updated with database integration
└── Documentation files (*.md)
```

---

## Testing Flow

1. **Without Supabase** (before setup):
   - Page loads with 8 default reviews
   - Form submission shows "Database not configured" alert

2. **With Supabase** (after setup):
   - Page loads with default + user reviews
   - Form submission saves to database
   - Real-time updates work
   - All users see same reviews

---

## Quick Links

- 🌐 Supabase Dashboard: https://supabase.com/dashboard
- 📖 Supabase Docs: https://supabase.com/docs
- 🎓 Supabase YouTube: https://www.youtube.com/@Supabase

---

## Need Help?

1. Check browser console for errors (F12)
2. Check `SUPABASE_SETUP_GUIDE.md` for detailed help
3. Verify credentials in `.env.local`
4. Restart dev server after changing `.env.local`

---

**Quick Support Checklist:**
- [ ] Is Supabase project created?
- [ ] Did you run the SQL setup script?
- [ ] Are credentials in `.env.local` correct?
- [ ] Did you restart dev server after adding credentials?
- [ ] Are RLS policies enabled in Supabase?
