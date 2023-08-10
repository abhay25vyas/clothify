import express from 'express';

const app = express();
const port = process.env.PORT || 5000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to Clothify Backend.!!!');
});

app.listen(port, () => {
  console.log(`Server is listing on port:${port}`);
});
