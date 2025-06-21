let lastMessage = ''; // Variable global para guardar el último texto recibido

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      const body = Buffer.concat(chunks).toString('utf-8');
      lastMessage = body;

      console.log('Texto recibido:', body);
      res.status(200).send('Texto recibido correctamente');
    } catch (error) {
      console.error('Error al procesar texto plano:', error);
      res.status(500).send('Error interno al procesar el texto');
    }
  } else if (req.method === 'GET') {
    // Leer el último mensaje recibido
    res.status(200).json({ lastMessage });
  } else {
    res.status(405).send('Método no permitido');
  }
}
