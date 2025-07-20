export default async function handler(req, res) {
  try {
    // Örnek: ?il=samsun
    const il = req.query.il || "samsun"; 
    const response = await fetch(`https://tilki.dev/api/eczane?il=${il}`);
    const data = await response.json();

    // Discord bilgisini ekliyoruz
    res.status(200).json({
      eczaneler: data,
      discord: "inzaghiorj"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
