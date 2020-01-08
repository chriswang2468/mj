const express = require("express");
const bodyParser=require('body-parser');
const path= require('path');
var readline = require('readline');
const fs = require('fs');
const t=require('./tool.js');
const app = express();
const port = 5000;
var  list_file=[];
//view engin
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// set static Path
app.use(express.static(path.join(__dirname,'client')));

//list all the files
app.get("/", (req, res) => {
  list_file=t.listFiles();
  res.render('index',{file:list_file});
});
app.get('/match', (req, res) => {
  res.render('match');
});
app.post('/mj_prob_cal', (req, res) => {
  var data=req.body;
  var result=t.calculate_prob(data.player_list,data.remaining_tile,data.tileCnt);
  res.json(result);
});

app.post('/mj_info', (req, res) => {
  var info=req.body;
  t.extract_data(info,res);
  // console.log("+++++++++++");

  // setTimeout(() => {
  //   console.log(data);
  //   res.json(data);
  //   console.log("Dasdassdsa");
  // }, 3000);
  
});

app.get("/api/matches",(req,res)=>{
  const temp=[];
  for (let i = 0; i < list_file.length; i++) {
	const name = list_file[i].fileName;
    var promise = new Promise(function(resolve,reject) {
        var rd = readline.createInterface({
            input: fs.createReadStream('./client/data/'+name),
            console: false
        });
        var temp=[];
        var games = [];
        var j =0;
        rd.on('line', function(line) {
            line=JSON.parse(line);
            games.push({id:j, 
                matchId:line._id,
            });
            j++;
        });

        rd.on('close', function() {
            var json = JSON.stringify(games);
            
            resolve(games);
		});
		
    }).then((resolveResult) => {
		temp.push({id:i,fileName:name, fileContents:resolveResult});
		i++;
        
    });
};
setTimeout(() => {
	res.send(temp);
}, 3000);
});
app.listen(port, () => console.log(`Server started on port ${port}`));
