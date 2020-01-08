const fs = require('fs');
var readline = require('readline');

exports.listFiles= ()=>{
    const files = fs.readdirSync('./data/');
    const temp=[];
    for (let i = 0; i < files.length; i++) {
        temp.push({id:i,fileName:files[i]});
    };
    return temp;
}



exports.readFile= (name)=>{
    var promise = new Promise(function(resolve,reject) {
        var rd = readline.createInterface({
            input: fs.createReadStream('./data/'+name),
            console: false
        });

        var games = [];
        var i =0;
        rd.on('line', function(line) {
            line=JSON.parse(line);
            games.push({id:i, matchId:line._id});
            i++;
        });

        rd.on('close', function() {
            var json = JSON.stringify(games);
            resolve(games);
        });

    }).then((resolveResult) => {
        console.log(resolveResult);
        // console.log(typeof(resolveResult));
        return resolveResult;
    });
}