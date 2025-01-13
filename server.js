const express = require('express');
const nunjucks = require('nunjucks');
const app = express();

app.set('view engine', 'html');

app.listen(3000, () => {
    console.log('server open');
    
})