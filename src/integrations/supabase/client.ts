
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hchkxqrjuapmvzbysacm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhjaGt4cXJqdWFwbXZ6YnlzYWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUwNTg0MzYsImV4cCI6MjA2MDYzNDQzNn0.4ksF3FDrvyrMkKszIGAF51B2ITBAMJBAZGo2KN0M_g4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
