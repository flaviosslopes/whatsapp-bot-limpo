exports.handler = async (event, context) => {
  const path = event.path;
  
  if (path === '/qr') {
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html' },
      body: `
        <html>
          <head><title>QR Code WhatsApp</title></head>
          <body style="text-align:center; padding:20px; font-family:Arial;">
            <h1>🤖 QR Code WhatsApp</h1>
            <div style="width:200px; height:200px; background:#25D366; color:white; margin:20px auto; text-align:center; line-height:200px; border-radius:10px;">
              📱 QR CODE
            </div>
            <p>✅ Status: Funcionando!</p>
            <a href="/" style="background:#25D366; color:white; padding:10px 20px; text-decoration:none; border-radius:5px;">← Voltar</a>
          </body>
        </html>
      `
    };
  }
  
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/html' },
    body: `
      <html>
        <head><title>Bot WhatsApp</title></head>
        <body style="text-align:center; padding:20px; font-family:Arial;">
          <h1>🤖 Bot WhatsApp NETLIFY!</h1>
          <p>✅ Servidor funcionando perfeitamente!</p>
          <p>📅 ${new Date().toLocaleString("pt-BR")}</p>
          <a href="/qr" style="background:#25D366; color:white; padding:15px 30px; text-decoration:none; border-radius:5px; font-size:16px;">📱 Ver QR Code</a>
        </body>
      </html>
    `
  };
};
