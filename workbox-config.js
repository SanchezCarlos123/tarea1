module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,json,js,jpg}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};