const express = require("express");
const app = express();
const routes = require("./routes");
const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express")


const port = 3030;
const address = "localhost";

const utils = require("./utils");

const faker = require ("faker");

let toggleBol = true;

global.users =[];

for (let cont=0;cont<20;cont++){
    users.push({name:faker.name.findName(),email:faker.internet.email(),address:faker.address.streetAddress(),age:utils.getRandomByInterval(15,50,true),heigth:utils.getRandomByInterval(1.50,1.70,false).toFixed(2),vote:toggleBol});
    toggleBol=!toggleBol;
}

app.use(routes);

app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false})); 
app.use(express.json());

//app.use(utils.delay(2000));

app.use('/',routes);

const server = app.listen(port, address,()=> {
    let host = server.address().address;
    let port = server.address().port;
    console.log(`Servidor executando no endereço  ${host} e porta ${port}`);
});