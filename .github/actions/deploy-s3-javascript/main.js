const core = require("@actions/core")
const github = require("@actions/github")
const exec = require("@actions/exec")

//  the name run is up to you
function run() {

    // log to github action workflow
    core.notice("Hello from my custom javascript action")
}

run()