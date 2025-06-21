export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }

      const body = Buffer.concat(chunks).toString('utf-8');
      console.log('Texto recibido:', body); // Aquí podrías extraer lógica si quieres

      res.status(200).send('Texto recibido correctamente');
    } catch (error) {
      console.error('Error al procesar texto plano:', error);
      res.status(500).send('Error interno al procesar el texto');
    }
  } else {
    res.status(405).send('Método no permitido');
  }
}
