const express = require('express');
const port = 8000;

const app = express();

app.listen(port, function(err) {
    if(err) {
        console.log(`Error occured in running server: ${err}`);
        return;
    }

    console.log(`The server is running at port: ${port}`);
});