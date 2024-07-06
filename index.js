const express = require("express");
const app = express();
// const cors = require("cors");

const path = require("path");

app.use(express.static(path.join(__dirname, 'build')))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
}
)