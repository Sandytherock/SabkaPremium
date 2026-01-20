# 🔧 Admin Guide - Reviews Manage Kaise Kare

## 📋 Table of Contents
1. [Supabase Dashboard se Delete](#method-1-supabase-dashboard-recommended)
2. [SQL se Delete](#method-2-sql-editor)
3. [Reviews ko Verify/Unverify Kaise Kare](#verify-reviews)
4. [Spam Reviews Find Karna](#find-spam-reviews)

---

## Method 1: Supabase Dashboard (Recommended) ✅

Ye sabse simple aur safe method hai!

### Step-by-Step:

#### 1. Table Editor Kholo
```
https://supabase.com/dashboard/project/tywgidwvmvbinpzhnjlx/editor
```

Ya:
- Supabase Dashboard me jao
- Left sidebar me **"Table Editor"** click karo
- **"reviews"** table select karo

#### 2. Review Dekho
- Saari reviews list me dikhenge
- Columns:
  - `id` - Review ka unique ID
  - `created_at` - Kab submit kiya
  - `name` - User ka naam
  - `email` - User ki email
  - `rating` - 1-5 stars
  - `review` - Review text
  - `verified` - True/False

#### 3. Delete Karo
**Single Review Delete:**
1. Jo review delete karni hai, us row par click karo
2. Right side me row details dikhegi
3. **"Delete row"** button click karo (🗑️ icon)
4. Confirm karo
5. Done! ✅

**Multiple Reviews Delete:**
1. Checkbox se multiple rows select karo
2. Top par **"Delete selected"** button aayega
3. Click karo aur confirm karo

---

## Method 2: SQL Editor 

Agar specific conditions se delete karna hai toh SQL use karo.

### Delete by ID
```sql
-- Single review delete (ID se)
DELETE FROM reviews WHERE id = 123;
```

### Delete by Name
```sql
-- Specific naam wale saare reviews delete
DELETE FROM reviews WHERE name = 'Spam User';
```

### Delete by Email
```sql
-- Specific email wale saare reviews delete
DELETE FROM reviews WHERE email = 'spammer@example.com';
```

### Delete by Rating
```sql
-- 1 star wale saare reviews delete
DELETE FROM reviews WHERE rating = 1;
```

### Delete by Date
```sql
-- Aaj ke baad ke reviews delete (future dates)
DELETE FROM reviews WHERE created_at > NOW();

-- Specific date se pehle ke reviews delete
DELETE FROM reviews WHERE created_at < '2025-01-01';
```

### Delete Unverified Reviews
```sql
-- Saare unverified reviews delete
DELETE FROM reviews WHERE verified = false;
```

---

## Verify Reviews ✅

Reviews ko verified mark karna (verified badge ke liye):

### Table Editor Se:
1. Table Editor me jao
2. Review row select karo
3. `verified` column par click karo
4. `true` select karo
5. Save hoga automatically

### SQL Se:
```sql
-- Single review verify
UPDATE reviews SET verified = true WHERE id = 123;

-- Email se verify
UPDATE reviews SET verified = true WHERE email = 'trusted@example.com';

-- Saare 5-star reviews verify
UPDATE reviews SET verified = true WHERE rating = 5;
```

---

## Find Spam Reviews 🔍

### Low Rating Reviews
```sql
-- 1 aur 2 star reviews dekho
SELECT * FROM reviews WHERE rating <= 2 ORDER BY created_at DESC;
```

### Recent Reviews
```sql
-- Aaj ke reviews dekho
SELECT * FROM reviews 
WHERE created_at >= CURRENT_DATE 
ORDER BY created_at DESC;
```

### By Keyword
```sql
-- Review text me specific words dhundho
SELECT * FROM reviews 
WHERE review ILIKE '%spam%' 
OR review ILIKE '%fake%'
ORDER BY created_at DESC;
```

### Duplicate Reviews (Same Name/Email)
```sql
-- Same email se kitne reviews hai
SELECT email, COUNT(*) as review_count 
FROM reviews 
GROUP BY email 
HAVING COUNT(*) > 1
ORDER BY review_count DESC;
```

---

## Bulk Operations

### Delete All Unverified Low Ratings
```sql
-- Unverified + low rating wale delete
DELETE FROM reviews 
WHERE verified = false 
AND rating <= 2;
```

### Verify All Old Reviews
```sql
-- 30 din purane saare reviews verify
UPDATE reviews 
SET verified = true 
WHERE created_at < NOW() - INTERVAL '30 days';
```

---

## Quick Reference Table

| Task | Method |
|------|--------|
| **Single review delete** | Table Editor → Select row → Delete |
| **Multiple reviews delete** | Table Editor → Select checkboxes → Delete |
| **Delete by condition** | SQL Editor → Run DELETE query |
| **Mark as verified** | Table Editor → Toggle verified column |
| **Find spam** | SQL Editor → Run SELECT query |
| **View all reviews** | Table Editor → reviews table |

---

## 🔒 Safety Tips

1. **Test First:** Pehle SELECT query run karo to see what will be affected
   ```sql
   -- Pehle dekho kitne rows delete honge
   SELECT * FROM reviews WHERE rating = 1;
   
   -- Phir delete karo
   DELETE FROM reviews WHERE rating = 1;
   ```

2. **Backup:** Important reviews ka backup lo before bulk delete

3. **Be Careful:** DELETE query me WHERE clause zaroor use karo, nahi toh SAARE reviews delete ho jayenge!

---

## Examples

### Example 1: Spam Review Delete
```sql
-- Step 1: Find spam review
SELECT * FROM reviews WHERE name = 'Spammer123';

-- Step 2: Verify it's the right one
-- Check id, email, review text

-- Step 3: Delete
DELETE FROM reviews WHERE id = 456;
```

### Example 2: Verify Genuine Reviews
```sql
-- Step 1: Find genuine looking reviews
SELECT * FROM reviews WHERE rating = 5 AND LENGTH(review) > 50;

-- Step 2: Verify them
UPDATE reviews 
SET verified = true 
WHERE rating = 5 AND LENGTH(review) > 50;
```

---

## 📊 Monitor Your Reviews

### Total Reviews Count
```sql
SELECT COUNT(*) as total_reviews FROM reviews;
```

### Average Rating
```sql
SELECT AVG(rating) as average_rating FROM reviews;
```

### Verified vs Unverified
```sql
SELECT 
  verified,
  COUNT(*) as count
FROM reviews 
GROUP BY verified;
```

### Reviews per Day
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as reviews_count
FROM reviews 
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

---

## 🎯 Quick Actions

### Delete Today's Test Reviews
```sql
DELETE FROM reviews 
WHERE created_at >= CURRENT_DATE 
AND email LIKE '%test%';
```

### Verify All 5-Star Reviews
```sql
UPDATE reviews 
SET verified = true 
WHERE rating = 5;
```

### Delete Reviews Without Email
```sql
DELETE FROM reviews 
WHERE email IS NULL OR email = '';
```

---

## Need More Control?

Agar tumhe zyada advanced admin panel chahiye (web interface se delete/edit), toh batao - main bana dunga! 🚀

**Features ho sakte hai:**
- Admin login page
- Review list with delete buttons
- Edit reviews
- Bulk actions
- Statistics dashboard

Batao chahiye toh implement kar deta hoon! 😊
