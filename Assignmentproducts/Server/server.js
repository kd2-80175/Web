const express =require('express');
const app = express();
const appWithDetailOfProductsRoutes = require('./Router/product');

const cors = require('cors');
app.use(cors());
app.use(express.json())

app.use("/products",appWithDetailOfProductsRoutes);

app.listen(5000, ()=>{console.log("server started")})