const http = require('http')
const url = require('url')

const start = (route, handle) => {
    http.createServer((request, response) => {
        console.log('request received.')
        // 解析请求的地址
        const { pathname } = url.parse(request.url)
        // console.log('pathname:', pathname)
        // 根据url映射到不同的处理逻辑
        route(handle, pathname, response)
    }).listen(8888)

    console.log('Server has started.')
}

exports.start = start
