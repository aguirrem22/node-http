const http = require("http");
const datos = require("./data.js");

const server = http.createServer((req, res) => {
    res.setHeader( "Content-Type","text/html");
    
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>${datos.titulo}</h1>
    <h2>${datos.subtitulo}</h2>
    <p>${datos.descripcion}</p>
</body>
</html> `
    res.end(html);
})

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});

console.log(datos)