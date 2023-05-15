const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = 8000;//local host port


const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../Templates/views");
const hbs_path=path.join(__dirname, "../Templates/partials");
app.set('view engine', 'hbs');
app.set('views', template_path);
app.use(express.static(static_path)); 
hbs.registerPartials(hbs_path);

// *****************routing 
app.get('/', (req, res) => {
    res.render('index');
    // res.end();
});

app.get('/weather', (req, res) => {
    res.render('weather');
    // res.end();
});
app.get("*", (req, res) => {
    res.rendor(
        "<center><h1>404 Error Page !</h1></center>"
    );
})
app.listen(port, () => {
    console.log("listening");
})