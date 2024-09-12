import express from "express"
import ejs from "ejs"
import connectMongoDB from "./mongodb";
import { Credential } from "./Credential";

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs'); 
connectMongoDB();

app.get("/login",(req,res)=>{
    return res.render("login");
})
app.get("/signup",(req,res)=>{
    return res.render("signup");
})

app.post("/signup",async (req,res)=>{
    const data = {
        name : req.body.name ,
        password : req.body.password
    }
    await Credential.create(data);
    return res.redirect("/login");
})

app.listen(port , ()=>{
    console.log(`server is listening at port ${port}`);
})