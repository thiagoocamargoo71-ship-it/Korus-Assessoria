/*
  # Create Korus Assessoria Internacional Database Tables

  ## New Tables
  
  ### `contacts`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Client name
  - `email` (text) - Client email
  - `phone` (text) - Client phone number
  - `country` (text) - Desired visa country
  - `visa_type` (text) - Type of visa
  - `message` (text) - Additional message
  - `form_type` (text) - Type of form (contact, analysis, whatsapp)
  - `created_at` (timestamptz) - Timestamp of submission

  ### `reviews`
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Reviewer name
  - `country` (text) - Visa country
  - `rating` (integer) - Rating from 1 to 5
  - `comment` (text) - Review comment
  - `approved` (boolean) - Whether review is approved for display
  - `created_at` (timestamptz) - Timestamp of submission

  ## Security
  - Enable RLS on both tables
  - Allow public inserts for both tables
  - Allow public reads only for approved reviews
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  country text DEFAULT '',
  visa_type text DEFAULT '',
  message text DEFAULT '',
  form_type text DEFAULT 'contact',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment text NOT NULL,
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contacts
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can submit reviews"
  ON reviews
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved reviews"
  ON reviews
  FOR SELECT
  TO anon, authenticated
  USING (approved = true);