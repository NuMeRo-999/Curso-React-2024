import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'; // Importa el middleware de CORS

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

app.get('/api/data', async (req, res) => {
  try {
    const response = await fetch('https://api.preciodelaluz.org/v1/prices/all?zone=PCB');
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
