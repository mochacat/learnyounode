var fs = require('fs');
var path = require('path');

var directory = fs.readdir(process.argv[2], function(err, list){
    if (err) throw err;
    else{
        for (var i = 0; i < list.length; i++){
            var ext_name = path.extname(list[i]).split("");
            ext_name.shift();            
            if (ext_name){
                if (ext_name.join("") == process.argv[3] ){
                    console.log(list[i]);
                }
            }
        }
    }
});
