import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_APIKEY;

// MIDLERTIDIG TEST
console.log("SUPABASE URL:", supabaseUrl);

if (!supabaseUrl) {
  throw new Error("VITE_SUPABASE_URL mangler");
}

if (!supabaseKey) {
  throw new Error("VITE_SUPABASE_APIKEY mangler");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
