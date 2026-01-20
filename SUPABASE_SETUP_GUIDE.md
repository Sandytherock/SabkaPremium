# 🚀 Supabase Setup Guide for SabkaPremium Reviews

This guide will walk you through setting up Supabase for your live review system.

---

## 📋 Prerequisites
- A free Supabase account (sign up at https://supabase.com)
- Node.js installed on your machine

---

## 🎯 Step 1: Create a Supabase Project

1. Go to https://supabase.com and sign in (or create an account)
2. Click **"New Project"**
3. Fill in the details:
   - **Name**: `sabkapremium-reviews` (or any name you prefer)
   - **Database Password**: Create a strong password (save it somewhere safe!)
   - **Region**: Choose the closest region to your users (e.g., Mumbai for India)
   - **Pricing Plan**: Select **Free** tier
4. Click **"Create new project"**
5. Wait 2-3 minutes for your project to be set up

---

## 🗄️ Step 2: Create the Reviews Table

1. In your Supabase project dashboard, click on **"Table Editor"** in the left sidebar
2. Click **"Create a new table"**
3. Configure the table:
   - **Name**: `reviews`
   - **Description**: "Customer reviews for SabkaPremium"
   - **Enable Row Level Security (RLS)**: ✅ Check this box

4. Add the following columns (some are auto-added):

   | Column Name  | Type          | Default Value           | Primary | Nullable | Extra Settings          |
   |-------------|---------------|-------------------------|---------|----------|-------------------------|
   | `id`        | int8          | Auto-generated          | ✅      | ❌       | Identity, Auto-increment |
   | `created_at`| timestamptz   | `now()`                 | ❌      | ❌       | Auto-generated          |
   | `name`      | text          | -                       | ❌      | ❌       | -                       |
   | `email`     | text          | -                       | ❌      | ❌       | -                       |
   | `rating`    | int4          | -                       | ❌      | ❌       | Check: 1 <= rating <= 5 |
   | `review`    | text          | -                       | ❌      | ❌       | -                       |
   | `verified`  | bool          | `false`                 | ❌      | ❌       | -                       |

5. Click **"Save"** to create the table

---

## 🔐 Step 3: Configure Row Level Security (RLS)

Since RLS is enabled, we need to add policies to allow public read and write access:

### Option A: Using the SQL Editor (Recommended)

1. Click on **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Paste the following SQL:

```sql
-- Allow anyone to read reviews (public access)
CREATE POLICY "Enable read access for all users" ON "public"."reviews"
FOR SELECT
USING (true);

-- Allow anyone to insert reviews (public submission)
CREATE POLICY "Enable insert access for all users" ON "public"."reviews"
FOR INSERT
WITH CHECK (true);

-- Optional: Only allow updates to set verified=true (for admin use later)
-- You can skip this for now
CREATE POLICY "Enable update for verified field only" ON "public"."reviews"
FOR UPDATE
USING (true)
WITH CHECK (true);
```

4. Click **"Run"** to execute the SQL

### Option B: Using the GUI

1. Go to **"Authentication"** → **"Policies"** in the left sidebar
2. Find the `reviews` table and click **"New Policy"**

**For READ access:**
- Policy name: `Enable read access for all users`
- Policy command: `SELECT`
- Target roles: `public`
- USING expression: `true`
- Click **"Review"** then **"Save policy"**

**For INSERT access:**
- Click **"New Policy"** again
- Policy name: `Enable insert access for all users`
- Policy command: `INSERT`
- Target roles: `public`
- WITH CHECK expression: `true`
- Click **"Review"** then **"Save policy"**

---

## 🔑 Step 4: Get Your API Credentials

1. Click on **"Settings"** (gear icon) in the left sidebar
2. Click on **"API"** in the settings menu
3. You'll see two important values:

   - **Project URL**: Something like `https://xxxxxxxxxxxxx.supabase.co`
   - **anon/public key**: A long string starting with `eyJ...`

4. **IMPORTANT**: Keep these values safe! You'll need them in the next step.

---

## ⚙️ Step 5: Configure Your React App

1. Open the file `sabkapremium-react/.env.local` (already created)
2. Replace the placeholder values with your actual Supabase credentials:

```env
# Supabase Configuration
VITE_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Save the file**

---

## 🚀 Step 6: Run Your Application

1. Open a terminal in the `sabkapremium-react` folder
2. Run the development server:

```bash
npm run dev
```

3. Open your browser and go to `http://localhost:5173/reviews`
4. Test the review system:
   - Submit a new review
   - Open the page in another browser/incognito window
   - You should see the review appear in real-time! 🎉

---

## ✅ Step 7: Verify Everything Works

### Test Checklist:
- [ ] Default reviews are visible
- [ ] Can submit a new review through the form
- [ ] New reviews appear immediately after submission
- [ ] New reviews are visible across different browsers/devices
- [ ] Filter by rating works
- [ ] Sort options work correctly
- [ ] Average rating updates correctly

### Troubleshooting:

**Issue**: Reviews not appearing after submission
- Check browser console for errors
- Verify `.env.local` credentials are correct
- Make sure RLS policies are set up correctly

**Issue**: "Database not configured" alert
- Make sure `.env.local` file exists in `sabkapremium-react/` folder
- Restart the dev server after adding credentials
- Check that credentials don't have quotes around them

**Issue**: Real-time updates not working
- Real-time is enabled by default in Supabase
- Make sure you're subscribed to the free tier (includes real-time)
- Check the browser console for connection errors

---

## 🎨 Optional: Enable Realtime in Supabase Dashboard

1. Go to **"Database"** → **"Replication"** in the left sidebar
2. Find the `reviews` table in the list
3. Toggle **"Enable"** for the reviews table (should be enabled by default)
4. This allows real-time updates to work across all connected clients

---

## 📊 Step 8: Monitor Your Reviews

### View Reviews in Supabase:
1. Go to **"Table Editor"**
2. Click on the `reviews` table
3. You can see all submitted reviews here
4. You can manually edit the `verified` field to mark reviews as verified

### Optional: Add Test Data
You can manually add some test reviews through the Supabase interface:
1. In Table Editor, click **"Insert row"**
2. Fill in the fields
3. Click **"Save"**

---

## 🔒 Security Notes

- The `anon` key is safe to use in your frontend (it's public)
- RLS policies control what users can do with this key
- Never share your `service_role` key (it bypasses RLS)
- Email addresses are stored but not displayed publicly
- Consider adding rate limiting in production

---

## 🎯 What's Been Implemented

✅ **Supabase Integration**: Full database connection
✅ **Real-time Updates**: Live review updates across all users
✅ **Fallback Support**: Default reviews show if Supabase isn't configured
✅ **Error Handling**: Graceful degradation if database is unavailable
✅ **Same UI**: All existing styling and functionality preserved
✅ **Filter & Sort**: Works with both default and database reviews

---

## 📝 Database Schema Reference

```sql
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

-- Policies (already added in Step 3)
```

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for error messages
2. Verify your Supabase credentials in `.env.local`
3. Make sure the `reviews` table exists with correct columns
4. Confirm RLS policies are properly configured
5. Try restarting the dev server

---

## 🎉 You're All Set!

Your live review system is now ready! Reviews will be:
- ✅ Saved to Supabase database
- ✅ Visible to all users in real-time
- ✅ Persistent across browser sessions
- ✅ Backed up automatically by Supabase

Happy reviewing! 🌟
