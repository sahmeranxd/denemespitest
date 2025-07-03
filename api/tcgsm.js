export default async function handler(req, res) {
  const { tc } = req.query;

  if (!tc || !/^\d{11}$/.test(tc)) {
    return res.status(400).json({ message: "Geçerli bir 11 haneli TC gerekli" });
  }

  try {
    const apiUrl = `https://api.hexnox.pro/sowixapi/tcgsm.php?tc=${tc}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "Veri alınamadı", error: e.message });
  }
}
