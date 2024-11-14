const express = require("express")
const cors = require("cors")
const port = 5000
const connectDB = require('./config/db')
const itemRoutes = require("./routes/itemRoutes");
const app = express()

app.use(cors())
app.use(express.json())

connectDB()
app.use("/api/items", itemRoutes);
app.listen(port, () => {
  console.log(`server running at port,${port}`);
})