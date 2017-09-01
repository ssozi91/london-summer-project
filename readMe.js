
var showdown  = require('showdown');
var GitHubApi = require("github");
var github = new GitHubApi({
    version: "3.0.0",
     debug: true
});
var text;
github.authenticate({
    type: "basic",
    username: process.env.GITHUB_USERNAME,
    password: process.env.GITHUB_PASSWORD
});
  var html;
github.repos.getContent({
    owner : "ssozi91",
  repo: "london-summer-project",
  path: "README.md"
}).then( (response) => {
    text=Buffer.from(response.data.content, 'base64').toString();
 var converter = new showdown.Converter();
    var html      = converter.makeHtml(text);
    console.log(html)
    return new Promise((resolve, reject)=>{
        resolve(html);

    });
});
var returnHtml = function (){
return html
}
module.exports = returnHtml;