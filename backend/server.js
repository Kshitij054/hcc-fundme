require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/contractAddress", (req, res) => {
    res.json({ contractAddress: process.env.CONTRACT_ADDRESS });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
