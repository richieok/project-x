import Products from "./_products.js"; 
// import "../_dbconnect.js";
import {init} from "@lib/mongo";

export async function get(req, res, next) {

    const { db } = await init();
    const data = await db.collection('products').find({});
    let products = await data.toArray();
    // console.log('Products >>> ');
    // console.log(products);
    if (products){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(products));
    } else {
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: "Not found"
        }));
    }
}