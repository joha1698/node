//importamos app
const app = require("./app");
const port = 3000;

app.listen(port, ()=>{
    console.log("Se incia servidor en puerto: "+ port)
})