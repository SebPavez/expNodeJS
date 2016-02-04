var http = require("http"); //referencia a la librería http incluída en node.js


//llama a método createServer, el cuál retorna un objeto que 
//tiene un método listen, el cuál toma un valor número como 
//parámetro de entrada, que indica el número de puerto que 
//escucha nuestro servidor

http.createServer(onRequest).listen(8888);

function onRequest(request, response){
	response.writeHead(200, {"Content-type": "text/html"});
	response.write("HI!");
	response.end();	
}