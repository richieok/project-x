import { init } from "@lib/mongo";

export async function get(req, res, next) {
    const { slug } = req.params;
    const { db } = await init();
    const data = await db.collection('products').findOne({productParam: slug});
    console.log(data);
    if (data){
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(400, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify({
            message: "Not found"
        }));
    }
}