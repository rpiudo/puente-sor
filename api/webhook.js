export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Método no permitido' });
    }

    const body = req.body ?? {};

    console.log("🛰 Payload recibido:", body);

    res.status(200).json({
      success: true,
      recibido: body,
      mensaje: "Ghost RUL:0002 ha recibido tu POST 🚀"
    });

  } catch (err) {
    console.error("❌ Error en handler:", err);
    res.status(500).json({ error: "Error interno del servidor", detalles: err.message });
  }
}


