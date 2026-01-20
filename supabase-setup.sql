-- =============================================
-- SabkaPremium Reviews - Supabase Setup SQL
-- =============================================
-- Copy and paste this entire file into Supabase SQL Editor
-- Then click "Run" to set up everything at once
-- =============================================

-- 1. Create the reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  rating INT4 NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE NOT NULL
);

-- 2. Enable Row Level Security
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

-- 3. Drop existing policies if they exist (for re-running this script)
DROP POLICY IF EXISTS "Enable read access for all users" ON reviews;
DROP POLICY IF EXISTS "Enable insert access for all users" ON reviews;
DROP POLICY IF EXISTS "Enable update for all users" ON reviews;

-- 4. Create policy for public read access
CREATE POLICY "Enable read access for all users" 
ON reviews
FOR SELECT
USING (true);

-- 5. Create policy for public insert access
CREATE POLICY "Enable insert access for all users" 
ON reviews
FOR INSERT
WITH CHECK (true);

-- 6. Create policy for updates (allows marking as verified)
CREATE POLICY "Enable update for all users" 
ON reviews
FOR UPDATE
USING (true)
WITH CHECK (true);

-- 7. Create an index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS reviews_created_at_idx ON reviews(created_at DESC);

-- 8. Create an index on rating for faster filtering
CREATE INDEX IF NOT EXISTS reviews_rating_idx ON reviews(rating);

-- =============================================
-- Optional: Insert some test data
-- =============================================
-- Uncomment the lines below to add test reviews
-- This helps verify everything is working

/*
INSERT INTO reviews (name, email, rating, review, verified) VALUES
  ('Test User 1', 'test1@example.com', 5, 'This is a test review from Supabase! Everything works great!', true),
  ('Test User 2', 'test2@example.com', 4, 'Another test review to verify real-time updates are working.', false),
  ('Test User 3', 'test3@example.com', 5, 'Amazing service! This review was added via SQL.', true);
*/

-- =============================================
-- Setup Complete! ✅
-- =============================================
-- Next steps:
-- 1. Go to Settings → API in Supabase dashboard
-- 2. Copy your Project URL and anon key
-- 3. Add them to .env.local in your React app
-- 4. Run: npm run dev
-- 5. Test by submitting a review!
-- =============================================
