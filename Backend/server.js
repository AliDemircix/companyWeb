import express from 'express';

const app = express();
const PORT =  8000;
app.get('/', (req, res) => res.json({ msg: 'Hello from backend to frontend' }));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

