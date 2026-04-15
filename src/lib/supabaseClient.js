import { createClient } from '@supabase/supabase-js';

// Configuration for GLOBE Mobility Assistant Supabase
const SUPABASE_URL = 'https://hmsvuqawwjywtkqvsznp.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP';

// Initializing the Supabase client
export const supabase = createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
