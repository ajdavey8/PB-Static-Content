const pathExists = require('path-exists');

const contents = function(req, res) {
  if(pathExists.sync('./content/'+req.params.page)){
    res.status(200);
    res.send("It works");
  } else {
    res.status(404)
    res.send("Not a valid url")
  }
}

module.exports = contents
