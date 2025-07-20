export default async function handler(req, res) {
  try {
    const tc = req.query.tc;

    if (!tc) {
      return res.status(400).json({ error: "TC parametresi gerekli" });
    }

    // nowercheck API'sine istek
    const response = await fetch(`https://nowercheck.com/nowerapi/aile.php?tc=${tc}`);
    const data = await response.text(); // muhtemelen JSON değil, text dönüyor olabilir.

    res.status(200).json({
      result: data,
      discord: "cansarsilmaz_"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
