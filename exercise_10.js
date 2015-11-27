var net = require('net');

var server = net.createServer(function(socket){
    var date = Date();
    //"YYYY-MM-DD hh:mm" 
    var date_now = 
        format(date.getFullYear()) + "-" + 
        format(date.getMonth()) + "-" +
        format(date.getDate()) + " " +
        format(date.getHours()) + ":" +
        format(date.getMinutes()) + "\n";

    socket.write(date_now);
    socket.end();
});

function format(num){
    var str_num = num.toString();
    if (num < 10){
        str_num = '0' + str_num;
    }

    return str_num;
}

server.listen(parseInt(process.argv[2]), function(err){
    console.error(err);
});
