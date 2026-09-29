const SUPABASE_URL="https://tskdenypqzkfrlsjbxhg.supabase.co";
const SUPABASE_KEY="sb_publishable_EMF7iJmWJGPCXpQ-0pC0hg_w6F9OYnz";
const sb=supabase.createClient(SUPABASE_URL,SUPABASE_KEY);
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
