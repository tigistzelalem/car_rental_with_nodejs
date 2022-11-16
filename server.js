
const express = require('express');
const db = require('./routs/db-config')
const app = express();
const dotenv = require('dotenv')
dotenv.config({ path: 'env.default' });
app.set('view-engin', 'ejs')
app.set("views", "./views")
const PORT = process.env.PORT || 5000
app.use(express.urlencoded({ extended: false }))
require('dotenv').config();
app.use('/js', express.static(__dirname + './public/js'))
app.use('/css', express.static(__dirname + './public/css'))

app.use(express.json())
// the following code enable us to get all the user information on the bachend or db after signin




db.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        // console.log('Connected!:)');
    }
});

app.use("/", require("./routs/pages"))
app.use("api", require("./components/auth"))

// givig it a port to excute
app.listen(PORT)