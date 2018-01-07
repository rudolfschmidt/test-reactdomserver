import React from 'react'
import ReactDOMServer from 'react-dom/server'

var str = ReactDOMServer.renderToString(<h1>Foo</h1>)
print('print')
print(str)
