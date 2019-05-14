/**
 * Copyright (c) 2017-2019, Neap Pty Ltd.
 * All rights reserved.
 * 
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

const _getResponseHeaders = xhttp => {
	// Get the raw header string
	const headers = xhttp.getAllResponseHeaders() || ''

	// Convert the header string into an array
	// of individual headers
	const arr = headers.trim().split(/[\r\n]+/)

	// Create a map of header names to values
	return arr.reduce((acc,line) => {
		const parts = line.split(': ')
		const header = parts.shift()
		const value = parts.join(': ')
		acc[header] = value
		return acc
	}, {})
}

const _parseResponse = xhttp => {
	const content = xhttp.responseText
	const status = xhttp.status
	const headers = _getResponseHeaders(xhttp) || {}
	const contentType = headers['content-type']
	const isJSON = contentType && contentType.indexOf('json') >= 0

	if (isJSON) {
		try {
			const c = JSON.parse(content)
			return { status, data:c, headers }
		} catch(e) {
			return (() => ({ 
				status:500, 
				data:{ 
					error: {
						message: 'Fairplay SDK Error. Server responded successfully, but the SDK failed to parse JSON response', 
						data: content
					}
				}, 
				headers
			}))(e)
		}
	} else {
		return { status, data:content, headers }
	}
}

const _setRequestHeaders =  (xhttp, headers) => {
	if (!headers || !xhttp)
		return
	if (typeof(headers) != 'object')
		throw new Error('Wrong argument exception. \'headers\' must be an object.')

	Object.keys(headers).forEach(key => {
		const value = headers[key]
		xhttp.setRequestHeader(key, value)
	})
}

/**
 * Sends an AJAX request. 
 * 
 * @param {String}  uri 			
 * @param {String}  method 			HTTP methods. Valid values are: 'GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'HEAD' and 'PATCH'.			
 * @param {Object}  headers 		HTTP request headers. 			
 * @param {Object}  body 			Payload.
 * 
 * @yield {Number}	output.status	HTTP response status code 
 * @yield {Object}	output.data 	If the response's content type if application/json, then 'data' is a JSON object,
 *        							otherwise, it is a string. 
 * @yield {Object}	output.headers 	HTTP response headers
 */
const _fetchMethod = ({ uri, method, headers, body }) => new Promise((resolve,failure) => {
	try {
		if (!uri)
			throw new Error('Missing required argument \'uri\'.')
		if (!method)
			throw new Error('Missing required argument \'method\'.')

		const xhttp = new XMLHttpRequest()
		// 1. Define the handler that processes the response.
		xhttp.onreadystatechange = () => {
			if (xhttp.readyState == XMLHttpRequest.DONE) {
				const res = _parseResponse(xhttp)
				resolve(res)
			}
		}
		xhttp.open(method, uri, true) 
		_setRequestHeaders(xhttp, headers)
		const payload = (() => {
			if (!body)
				return
			if (typeof(body) == 'string' || (body instanceof Buffer))
				return body
			
			return JSON.stringify(body)
		})()
		
		// 3. Execute the HTTP request.
		if (payload)
			xhttp.send(payload)
		else
			xhttp.send()
	} catch(e) {
		failure(e)
	}
})
	
const fetch = {
	'get': ({ uri, headers, body }) => _fetchMethod({ uri, method:'GET', headers, body }),
	post: ({ uri, headers, body }) => _fetchMethod({ uri, method:'POST', headers, body }),
	put: ({ uri, headers, body }) => _fetchMethod({ uri, method:'PUT', headers, body }),
	delete: ({ uri, headers, body }) => _fetchMethod({ uri, method:'DELETE', headers, body }),
	options: ({ uri, headers, body }) => _fetchMethod({ uri, method:'OPTIONS', headers, body }),
	head: ({ uri, headers, body }) => _fetchMethod({ uri, method:'HEAD', headers, body }),
	patch: ({ uri, headers, body }) => _fetchMethod({ uri, method:'PATCH', headers, body })
}

export {
	fetch
}