const core = require('@actions/core')
const github = require('@actions/github')

try {
   const name = core.getInput('name');
   console.log('Bonjour ${name}');
   core.setOutput('response', 'Bonjour ${name}, comment ça va?');
   
} catch (error) {
    core.setFailed(error.message);
}
