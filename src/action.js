const core = require('@actions/core')
const github = require('@actions/github')
const fetch = require('node-fetch')

async function run() {
	const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN')
	const TENOR_TOKEN = core.getInput('TENOR_TOKEN')

	const randomPos = Math.round(Math.random * 1000)
	const url = `https://api.tenor.com/v1/search?q=thank%20you&pos=${randomPos}&limit=1&media_filter=minimal&contentfilter=high&key=${TENOR_TOKEN}`
const response = await fetch(url)
const {results} = await response.json()
const gifUrl = results[0].media[0].tinygif.url
	const octokit = github.getOctokit(GITHUB_TOKEN)
	const { context = {} } = github
	const { pull_request } = context.payload

	await octokit.issues.createComment({
		...context.repo,
		issue_number: pull_request.number,
		body: `thankyou for submitting a pull request! we will try to reach out as soon as possible \n\n<img src="${gifUrl}" alt="thank you" />`
	})
	console.log('hello world! github');
}
run()