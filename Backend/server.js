const express= require('express') ;
const cors=require("cors")

const PORT =  8000;
const app = express();
app.use(cors())

app.get('/api', (req, res) => {
    res.status(200).json({
        success: false,
        msg: {id:1,name:"Test"},
      })
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

