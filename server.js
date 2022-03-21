import {} from "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import contactRoute from "./route/contactRoute.js"
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;
app.use("/", contactRoute);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    app.get("*", (req, res) => (
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    ))
}
app.listen(port, () => console.log(`Server listening on ${port} only`))
