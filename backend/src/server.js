import "dotenv/config"
import connect_DB from "./config/db.js"
import app from "./app.js"

await connect_DB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});