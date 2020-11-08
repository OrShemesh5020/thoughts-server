const express = require("express");
const app = express();

app.listen(4000, () => {
  console.log("server is up: ", 4000);
});

app.get("/status", (req, res)=>{
    res.sendStatus(200);
});
