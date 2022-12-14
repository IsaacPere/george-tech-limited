const web_http = require("http");
const website_host_number = "localhost";
const webapp_port = 4500;
const web_request_listener = function(website_request, website_respond){
	website_respond.writeHead(200);
	website_respond.end("Hello George Technologies Limited");
}
const website_server = web_http.createServer(web_request_listener);
website_server.listen(webapp_port, website_host_number, () =>{
	console.log("Company website server is running fine");
})