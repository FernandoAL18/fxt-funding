const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.get('/', (req, res) => {
  res.send('Backend de FXT Funding funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
