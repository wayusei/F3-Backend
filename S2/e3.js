const https = require('https')
const fs = require('fs')
const path = require('path')

function getAPOD() {
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',(resp) => {
        let data = ''
        resp.setEncoding('utf-8')
        resp.on('data', (chunk) => {
            data += chunk
        })

        resp.on('end', () => {
            let body = JSON.parse(data)
            console.log(body.title)
            console.log(body.explanation)
            console.log(body.url)
            let nombreImagen = body.title + '.jpg'
            descargarImagen(body.url, nombreImagen)
        }).on("Error", (err) => {
            console.log(err.message);
        })
    })
}

function descargarImagen(url, rutaLocal) {
    let file = fs.createWriteStream(rutaLocal);
    let request = https.get(url, function (response) {
      response.pipe(file);
    });
}

getAPOD()