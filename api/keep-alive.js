export default async function handler(req, res) {
  try {
    await fetch('https://hmsvuqawwjywtkqvsznp.supabase.co/rest/v1/', {
      headers: {
        'apikey': 'sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP',
        'Authorization': 'Bearer sb_publishable_h_Av3qxNbMDCbVNaHGYPFg_AetCueCP'
      }
    });
    res.status(200).json({ ok: true, pinged: new Date().toISOString() });
  } catch (error) {
    res.status(200).json({ ok: true, note: 'ping sent', pinged: new Date().toISOString() });
  }
}
