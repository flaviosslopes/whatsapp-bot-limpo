const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
  
  if (req.url === "/qr") {
    res.end(`
      <h1>QR Code WhatsApp</h1>
      <div style="width:200px; height:200px; background:green; color:white; margin:auto; text-align:center; line-height:200px;">
        QR CODE AQUI
      </div>
      <br><a href="/">Voltar</a>
    `);
    return;
  }
  
  res.end(`
    <h1>Bot WhatsApp Funcionando!</h1>
    <p>Servidor rodando perfeitamente!</p>
    <a href="/qr">Ver QR Code</a>
  `);
});

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
