import express,{Request,Response,NextFunction} from "express";
import { json } from "stream/consumers";
import router from './routes/bookrouter'
var bodyParser=require('body-parser');
const app=express();
const port=3000;

app.use(bodyParser.json());
app.use('/',router);


app.listen(port,()=>{
    console.log(`server running at http://localhost:${port} `);
});
