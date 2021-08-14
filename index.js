const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use("/image", express.static(path.resolve(__dirname, "image")));
app.use(require("./routes/index"));


mongoose
  .connect(
    "mongodb+srv://into:code@cluster0.56zzw.mongodb.net/gunsPortal?retryWrites=true&w=majority",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(3030, () => {
      console.log("server is work");
    });
    console.log("server is ok");
  });