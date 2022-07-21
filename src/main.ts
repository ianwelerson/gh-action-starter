import * as core from '@actions/core'
import * as github from '@actions/github'

try {
  // const githubToken = core.getInput('github-token')
  const payload = github.context.payload

  console.log(`The event payload: ${JSON.stringify(payload)}`)
} catch (error) {
  core.setFailed((error as any).message)
}
