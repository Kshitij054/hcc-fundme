require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

// Route to send contract address
app.get("/contractAddress", (req, res) => {
    res.json({ contractAddress: process.env.CONTRACT_ADDRESS });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
