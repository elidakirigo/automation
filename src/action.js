const core = require('@actions/core')
const github = require('@actions/github')

async function run() {
	const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
	const octokit = github.getOctokit(GITHUB_TOKEN)
	const { context = {} } = github
	const { pull_request } = context.payload
	console.log('hello world! github'); 
}
run()