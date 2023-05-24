import http from 'http'
import {resultsHandler} from './functions.js'

const server = http.createServer((req, res) => {
    if(req.method === 'POST' && req.url === '/') {
        let data = ''
        req.on('data', chank => {
            data += chank
        })
        req.on('end', () => {
            dataArr = JSON.parse(data)
            let result = resultsHandler(dataArr)
            res.setHeader('Content-Type', 'text/html')
            res.end(result)
        })
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server is on')
})