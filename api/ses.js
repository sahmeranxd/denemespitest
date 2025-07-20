export default async function handler(req, res) {
  try {
    const text = req.query.text || "merhaba";
    const response = await fetch(`https://tilki.dev/api/yaziyi-ses-yapma?text=${encodeURIComponent(text)}`);
    const audioBuffer = await response.arrayBuffer();

    const base64Audio = Buffer.from(audioBuffer).toString("base64");

    res.status(200).json({
      audio: `data:audio/mpeg;base64,${base64Audio}`,
      alt: "inzaghibey"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
