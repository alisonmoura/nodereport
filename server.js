const express = require('express');
const jsreport = require('jsreport');
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    jsreport.render("<h1>Hello world</h1>").then(function (out) {
        out.stream.pipe(res);
    }).catch(function (e) {
        res.status(500).send(e.message);
    });
})

app.listen(port, function () {
    console.log(`Server running on port: ${port}`);
});