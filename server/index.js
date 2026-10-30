import express from 'express';
import mongosee from 'mongoose';
import Product from "./models/products.model.js";
import product_route from "./routes/product.route.js";

const app = express();
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));

//routes
app.use('/api/products', product_route);

app.get('/', (req, res) => {
    res.send("Hello World");
});

mongosee.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB is connected");
        app.listen(3000, () => {
            console.log('server is running on port 3000');
        });
    })
    .catch(() => {
        console.log("DB connection Error!!")
    })