const express = require('express')
const server = express()

const { parse } = require('url')
const next = require('next')

const keyServer = require('./key-server')

const nextjsApp = next({distDir: '.next'})
const handle = nextjsApp.getRequestHandler()

nextjsApp.prepare().then(() => {

  server.get('/api/key', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    const { key } = query
    res.end(JSON.stringify(keyServer(key)))
  })

  server.get('*', (req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl
    return handle(req, res)
  })

  server.listen(80, () => console.log('[ Express ] server created.'))

})
