import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  country?: string;
  visa_type?: string;
  message?: string;
  form_type?: string;
  created_at?: string;
}

export interface Review {
  id?: string;
  name: string;
  country: string;
  rating: number;
  comment: string;
  approved?: boolean;
  created_at?: string;
}
