-- Create the orders table for live notifications
CREATE TABLE IF NOT EXISTS orders (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  plan_name TEXT NOT NULL,
  plan_amount TEXT NOT NULL,
  discount_code TEXT,
  final_amount TEXT NOT NULL,
  screenshot_url TEXT
);

-- Enable Row Level Security
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (for notifications)
CREATE POLICY "Enable read access for all users" 
ON orders FOR SELECT USING (true);

-- Create policy for public insert access
CREATE POLICY "Enable insert access for all users" 
ON orders FOR INSERT WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS orders_created_at_idx ON orders(created_at DESC);

-- Note: This table will be populated when users submit orders
-- The OrderNotification component will fetch recent orders and show them as LIVE notifications
