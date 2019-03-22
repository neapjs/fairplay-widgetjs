const uglifycss = require('uglifycss')
const { join } = require('path')
const fs = require('fs')

const CSS_PATH = join(__dirname, '../css/fairplay.css')
const CSS_MIN_DEST = join(__dirname, '../../dist/fairplay.min.css')

const uglified = uglifycss.processFiles([ CSS_PATH ])

// 1. Minify the CSS
fs.writeFile(CSS_MIN_DEST, uglified, err => {
	if (err) {
		console.log(`Minifying ${CSS_PATH} failed`)
		console.log(`${err.message}\n${err.stack}`)
	}
})

// 2. Save an unminified CSS version

/*
const CSS_DEST = join(__dirname, '../../dist/fairplay.css')

fs.readFile(CSS_PATH, 'utf8', (err, data) => {
	if (err) {
		console.log(`Reading the ${CSS_PATH} file failed`)
		console.log(`${err.message}\n${err.stack}`)
	}
	else
		fs.writeFile(CSS_DEST, data, err => {
			if (err) {
				console.log(`Copying ${CSS_PATH} to the 'dist' folder failed`)
				console.log(`${err.message}\n${err.stack}`)
			}
		})
})
*/
