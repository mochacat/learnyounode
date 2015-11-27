var http = require('http');
var bl = require('bl');
var urls = process.argv.slice(2, 5), finished = [], count = 0;

urls.forEach(function(url, i){
    http.get(url, function(res){
        
        res.pipe(bl(function (err, data){
            if (err) throw err;
            else {
                finished[i] = data.toString();
                count++;
                if (count == urls.length){
                    finished.forEach(function(finish){
                        console.log(finish);
                    });
                }
            }
        }));   
    });
});
