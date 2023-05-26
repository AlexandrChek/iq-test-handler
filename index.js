import http from 'http'
import {resultsHandler} from './functions.js'

const server = http.createServer((req, res) => {
    if(req.method === 'OPTIONS') {
      res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET',
        'Access-Control-Allow-Headers': 'Content-Type'
      })
      res.end()
      return
    }
  
    if(req.method === 'POST' && req.url === '/') {
        let data = ''
        req.on('data', chank => {
            data += chank
        })
        req.on('end', () => {
            let dataArr = JSON.parse(data)
            let result = resultsHandler(dataArr)
            res.writeHead(200, {
              'Content-Type': 'text/html',
              'Access-Control-Allow-Origin': '*'
            })
            res.end(result)
        })
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server is on')
})