import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World, Minh Quang build lên AWS');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});