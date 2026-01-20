# ⚡ Quick Start - Supabase Setup

## 🎯 What You Need to Do

### 1️⃣ Create Supabase Project (5 minutes)
- Go to https://supabase.com → Sign in → New Project
- Name: `sabkapremium-reviews`
- Region: Choose closest to you
- Plan: **Free**

### 2️⃣ Create Reviews Table (2 minutes)
Go to **Table Editor** → **New Table** and run this SQL:

```sql
-- Create the reviews table
CREATE TABLE reviews (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INT4 NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE NOT NULL
);

-- Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Enable read access for all users" ON "public"."reviews"
FOR SELECT USING (true);

-- Allow public insert access
CREATE POLICY "Enable insert access for all users" ON "public"."reviews"
FOR INSERT WITH CHECK (true);

-- Allow updates (for admin to mark as verified)
CREATE POLICY "Enable update for all users" ON "public"."reviews"
FOR UPDATE USING (true) WITH CHECK (true);
```

### 3️⃣ Get Your Credentials (1 minute)
- Go to **Settings** → **API**
- Copy:
  - **Project URL** (e.g., `https://xxxxx.supabase.co`)
  - **anon/public key** (starts with `eyJ...`)

### 4️⃣ Update .env.local File
Open `sabkapremium-react/.env.local` and paste your values:

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...your_actual_key
```

### 5️⃣ Restart Dev Server
```bash
cd sabkapremium-react
npm run dev
```

### 6️⃣ Test It! 🎉
- Open http://localhost:5173/reviews
- Submit a test review
- Open in another browser - it should appear instantly!

---

## 📂 Files Modified/Created

✅ **Modified:**
- `src/pages/Reviews.jsx` - Added Supabase integration

✅ **Created:**
- `src/lib/supabase.js` - Supabase client setup
- `.env.local` - Configuration file (add your credentials here)

✅ **Installed:**
- `@supabase/supabase-js` package

---

## 🔍 Features Implemented

✨ **Live Reviews**: All users see the same reviews in real-time
✨ **Real-time Updates**: New reviews appear instantly across all devices
✨ **Fallback Support**: Works without Supabase (shows default reviews)
✨ **Same UI**: No visual changes - only backend upgraded
✨ **Email Storage**: Emails saved but not displayed publicly
✨ **Verified Badge**: Can mark reviews as verified in Supabase dashboard

---

## ✅ Testing Checklist

- [ ] Default reviews visible on page load
- [ ] Can submit new review with form
- [ ] New review appears immediately
- [ ] Open in incognito/another browser - review visible there too
- [ ] Filter by rating works
- [ ] Sort functionality works
- [ ] Average rating updates correctly

---

Need detailed instructions? See **SUPABASE_SETUP_GUIDE.md**
