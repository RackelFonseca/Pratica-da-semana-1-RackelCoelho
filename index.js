const http = require('http')
const fs = require('fs')
const readline = require('readline');
const porta = 443


const servidor = http.createServer((req, res) => {

  fs.readFile('pagina.html', (err, arquivo) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(arquivo)
    return res.end()
  })
  fs.appendFile('texte.txt', 'Integer tristique diam id turpis gravida accumsan. Maecenas ut gravida elit. Maecenas posuere erat in magna pretium dignissim. Sed vel augue in ex ultrices convallis. Vestibulum tempus sollicitudin enim at varius. Maecenas tristique scelerisque tortor. Phasellus vestibulum nisl viverra odio congue fermentum.', (err) => {
    if (err) throw err
    console.log('Arquivo criado')
  })
  async function readFileByLine(file) {
    const fileStream = fs.createReadStream(file);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    for await (const line of rl) {
      console.log(line);
    }
  }
  readFileByLine('texte.txt')

})
servidor.listen(porta, () => { console.log('Servidor rodando') })




