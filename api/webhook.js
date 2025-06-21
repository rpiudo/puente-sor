export const config = {
  api: {
    bodyParser: true,
  },
};

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    const body = req.body;

    console.log("🛰 Payload recibido:", body);

    res.status(200).json({
      success: true,
      recibido: body,
      mensaje: "Ghost RUL:0002 ha recibido tu POST 🚀"
    });

  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
}
