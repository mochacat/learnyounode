var fs = require('fs');
var path = require('path');

module.exports = function(name, ext, callback){
    var directory = fs.readdir(name, function(err, list){
        if (err){
            callback(err);
        } else{
            var new_list = [];
            for (var i = 0; i < list.length; i++){
                var ext_name = path.extname(list[i]).split("");
                ext_name.shift();
                if (ext_name){
                    if (ext_name.join("") == ext){
                        new_list.push(list[i]);
                    }
                }
            }
            callback(null, new_list);
        }
    });
}
