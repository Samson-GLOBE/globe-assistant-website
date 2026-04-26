import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://hmsvuqawwjywtkqvsznp.supabase.co',
  'sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP'
);

export default async function handler(req, res) {
  await supabase.from('_keep_alive_ping').select('*').limit(1).catch(() => {});
  res.status(200).json({ ok: true, pinged: new Date().toISOString() });
}
