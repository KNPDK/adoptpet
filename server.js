const http = require('http');
const host_name = '0.0.0.0';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    const url = request.url;
    if (url === '/home') {
        response.write('<html>');
        response.write('<head><title>Na *uj sie patrzysz</title></head>');
        response.write('<body><h1>Elo Mordy</h1></body>');
        return response.end();
    } else if (url === '/first_page') {
        response.write('First Page');
        response.end();
    } else {
        response.write('Just Page');
        response.end();
    }

})
server.listen(port, () => {
    console.log("server is running");
})