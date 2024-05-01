import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://v2.jokeapi.dev";

app.use(express.static("public"))

app.get("/", async (req, res) => {
    try {
        const result = await axios.get(API_URL + "/joke/Programming,Dark?blacklistFlags=racist");
        res.render("index.ejs", {
            setup: JSON.stringify(result.data.setup),
            delivery: JSON.stringify(result.data.delivery)
        });
    } catch (error) {
        res.status(404).send(error.message);
    }
});


app.listen(port, () => {
    console.log(`listening on ${port}`);
});     