import * as core from '@actions/core'
import * as github from '@actions/github'

try {
  // const githubToken = core.getInput('github-token') // Here you can get the github-token from action.yml
  const payload = github.context.payload // The context payload

  console.log(`The event payload: ${JSON.stringify(payload)}`) // A simple console.log
} catch (error) {
  core.setFailed((error as any).message)
}
