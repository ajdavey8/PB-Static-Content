const pathExists = require('path-exists');
const readFile = require('read-file');
const marked = require('marked');

const contents = function(req, res) {
  if(pathExists.sync('./content/'+req.params.page)){
    const template = readFile.sync('./template.html', 'utf8');
    const content = readFile.sync('./content/'+req.params.page+'/index.md', 'utf8');
    const page = template.replace(/{{content}}/, marked(content));
    res.status(200);
    res.send(page);
  } else {
    res.status(404);
    res.send("Not a valid url");
  }
};

module.exports = contents;
