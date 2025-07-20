export default async function handler(req, res) {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: "TC parametresi gerekli" });
    }

    // nowercheck API'sine istek at
    const response = await fetch(
      `https://nowercheck.com/nowerapi/aile.php?tc=${tc}`
    );

    // API genelde text döndürüyor
    const data = await response.text();

    // JSON formatında döndürüyoruz
    res.status(200).json({
      tc: tc,
      result: data,
      discord: "inzaghibey"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
