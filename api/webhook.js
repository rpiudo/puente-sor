// /api/webhook.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log('🛰 Payload recibido:', req.body);

    // Puedes procesar los datos aquí y hacer llamadas a Make u otros
    res.status(200).json({ success: true, message: "Webhook recibido correctamente por Ghost RUL:0002" });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
