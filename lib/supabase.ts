// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ypxscykkvmgknxnnvwsz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlweHNjeWtrdm1na254bm52d3N6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI2MTY2NzQsImV4cCI6MjA2ODE5MjY3NH0.zQuRPxQ3nnnuL1QFGZeFPZvaE73H0iPgP4X2mjma2eE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);