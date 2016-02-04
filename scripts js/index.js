var server = require("./holamundo2");
var router = require("./router");
server.iniciar(router.route);