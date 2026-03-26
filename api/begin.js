const { createVercelBeginHandler } = require('netlify-cms-oauth-provider-node');

const requiredEnvVars = [
	'OAUTH_CLIENT_ID',
	'OAUTH_CLIENT_SECRET',
	'ORIGIN',
	'COMPLETE_URL',
	'OAUTH_PROVIDER'
];

const getMissingEnvVars = () => requiredEnvVars.filter((key) => !process.env[key]);

module.exports = async (req, res) => {
	const missing = getMissingEnvVars();
	if (missing.length > 0) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.end(JSON.stringify({
			error: 'Missing required environment variables for OAuth function.',
			missing
		}));
		return;
	}

	try {
		const handler = createVercelBeginHandler({}, { useEnv: true });
		await handler(req, res);
	} catch (error) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'application/json; charset=utf-8');
		res.end(JSON.stringify({
			error: 'OAuth begin handler failed.',
			message: error && error.message ? error.message : 'Unknown error'
		}));
	}
};
