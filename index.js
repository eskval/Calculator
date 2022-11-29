const http = require('http')
const query_string = require('querystring')
const multiplication = require('./multiplication')

const demo_server = http.createServer(function(request, response) {
  console.dir(request.param)
  if (request.method == 'POST') {
    console.log('POST')
    var request_body = ''
    request.on('data', function(data) {
      request_body += data
    })

    request.on('end', function() {
      const post_request = query_string.parse(request_body)
      const input_numbers = post_request.numbers
     const product = multiplication.multiply(input_numbers)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('Result: ' + product)
    })
  } else {
    var html = `
            &lt;html&gt;
                &lt;body&gt;
                    &lt;form method="post" action="http://localhost:3000"&gt;Numbers: 
                        &lt;input type="text" name="numbers" /&gt;
                        &lt;input type="submit" value="Multiply" /&gt;
                    &lt;/form&gt;
                &lt;/body&gt;
            &lt;/html&gt;`
    response.writeHead(200, {'Content-Type': 'text/html'}
    response.end(html)
    }
})

const port = 3000
const host = '127.0.0.1'
demo_server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)