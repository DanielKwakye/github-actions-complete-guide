const core = require("@actions/core")
const github = require("@actions/github")
const exec = require("@actions/exec")

//  the name run is up to you
function run() {

    // get the inputs
    const bucket = core.getInput('bucket', { required: true }) // bucket here is the key present in the workflow file
    const bucketRegion = core.getInput('region', { required: true }) // region here is the key present in the workflow file
    const distFolder = core.getInput('dis-folder', { required: true })

    // you can use aws s3 sdk to interact with aws

    // alternatively you can use exec to run a command you'd have run in the command line
    // const s3Uri = `s3://${bucket}`
    // exec.exec(`aws s3 sync <local-folder> <s3-bucket> --region ${bucketRegion}`)

    // log to github action workflow
    core.notice("Hello from my custom javascript action")

    const websiteUrl = `http://examplewebiste.com`
    core.setOutput("website-url", websiteUrl)

}

run()