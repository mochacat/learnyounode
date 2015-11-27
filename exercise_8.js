var http = require('http');
var bl = require('bl');
var url = process.argv[2];

http.get(url, function(res){
    res.pipe(bl(function(err, data){
        if (err) throw err;
        else{
            var all_data = data.toString();
            console.log(all_data.length);
            console.log(all_data);
        }
    }));
})
