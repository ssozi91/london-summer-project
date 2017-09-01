var GitHubApi = require("github");
var github = new GitHubApi();
var allRepos;

github.authenticate({
    type: "basic",
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PASSWORD
});

github.repos.getAll({})
.then(data => {allRepos=data;})
console.log('');

var getMyWork=function(){
    return allRepos;
}

module.exports = getMyWork;