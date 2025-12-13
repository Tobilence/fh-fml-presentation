import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserSupabaseClient: SupabaseClient | null = null;

export function createBrowserSupabaseClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing Supabase env vars. Set NEXT_PUBLIC_SUPABASE_URL and either NEXT_PUBLIC_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY.",
    );
  }

  // Avoid "Multiple GoTrueClient instances detected" by reusing a single
  // Supabase client instance in the browser.
  if (typeof window === "undefined") {
    return createClient(supabaseUrl, supabaseKey);
  }

  if (!browserSupabaseClient) {
    browserSupabaseClient = createClient(supabaseUrl, supabaseKey);
  }

  return browserSupabaseClient;
}


