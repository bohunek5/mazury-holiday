const url = "https://client37851.idosell.com/pl/calendar/ical/?id=1&symbol=cd1b7479704e6eb4df524b0deba162e0";
const proxy1 = `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`;
const proxy2 = `https://corsproxy.io/?${encodeURIComponent(url)}`;

async function test() {
  try {
    const r1 = await fetch(proxy1);
    console.log("allorigins:", r1.status, (await r1.text()).substring(0, 50));
  } catch (e) { console.error("allorigins fail:", e); }
  
  try {
    const r2 = await fetch(proxy2);
    console.log("corsproxy:", r2.status, (await r2.text()).substring(0, 50));
  } catch (e) { console.error("corsproxy fail:", e); }
}
test();
