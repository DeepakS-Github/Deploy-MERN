const express = require('express');
require('./database/connectDB');
const cors = require("cors");
const blogRoute = require('./routes/Blogs');

const PORT = 4500;
const app = express();

app.use(cors(
    {
        origin: ["https://deploy-mern-frontend-two.vercel.app"],
        methods: ["POST","GET"],
        credentials: true
    }
));
app.use(express.json());
app.use('/', blogRoute);


app.listen(PORT,()=>{
    console.log(`Server is running on PORT: ${PORT}`);
});
