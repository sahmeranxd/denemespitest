export default async function handler(req, res) {
  const { ad, soyad, il } = req.query;

  if (!ad  !soyad  !il) {
    return res.status(400).json({ message: "ad, soyad ve il gerekli" });
  }

  try {
    const apiUrl = http://api.prymx.fun/apiler/adsoyad.php?ad=${ad}&soyad=${soyad}&il=${il};
    const r = await fetch(apiUrl);
    const data = await r.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ message: "veri alınamadı" });
  }
}
