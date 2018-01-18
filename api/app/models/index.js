var mongoose = require("mongoose");
mongoose.connect("mongodb://admin:SuperUser@ds046377.mlab.com:46377/podcast-be");

mongoose.set("debug", true);

module.exports.User = require("./user");