const express = require("express")
//const fs = require('fs')

const port = 8000;


console.log('Initializing webservice.')
const webservice = express()


/* const TOKENS_FILENAME = '/data/tokens.json'
var refreshToken = process.env.REFRESH_TOKEN
if (refreshToken == undefined) {
	console.log("You must set a refresh token in the addon config")
	process.exit(22)
}

console.log('Checking and possibly updating persisted tokens.')
var tokens = null
if (fs.existsSync(TOKENS_FILENAME)) {
	tokens = JSON.parse(fs.readFileSync(TOKENS_FILENAME));
	if (tokens.config === refreshToken) {
		refreshToken = tokens.updated
		console.log(`Ignoring token in addon config, using updated one from ${TOKENS_FILENAME}`, tokens)
	} else {
		tokens.config = refreshToken
		tokens.updated = refreshToken
		console.log(`Updated ${TOKENS_FILENAME} given new refresh_token in addon config`, tokens)
	}
} else {
	tokens = {
		config: refreshToken,
		updated: refreshToken
	}
	console.log(`Created /data/tokens.json`, tokens)
}
fs.writeFileSync(TOKENS_FILENAME, JSON.stringify(tokens)); */



console.log(`Starting server on port ${port}.`)
webservice.listen(port, () => {
	console.log(`Shelly config tool is running on port ${port}.`);
})
