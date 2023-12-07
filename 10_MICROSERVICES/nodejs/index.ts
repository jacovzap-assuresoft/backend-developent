import http from 'http'

const server = http.createServer((req, res) =>
{

    if(req.url === '/modules')
    {
        
    }

    res.writeHead(200, { 'Content-Type': 'text/html' }) 
})

server.listen(3000, () => console.log('Server is running'))
