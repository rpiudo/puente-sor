import { buffer } from 'micro';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const rawBody = await buffer(req);
    const bodyText = rawBody.toString();
    
    let json;
    try {
      json = JSON.parse(bodyText);
    } catch (e) {
      return res.status(400).json({ error: 'JSON inválido', raw: bodyText });
    }

    console.log('🛰 Payload recibido (manual):', json);

    res.status(200).json({
      success: true,
      recibido: json,
      mensaje: 'Ghost RUL:0002 ha recibido tu POST con buffer 🚀'
    });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}

