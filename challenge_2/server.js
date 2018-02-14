var express = require('express');
var bodyParser = require('body-parser'); //middleware should always start at the top 
var app = express(); 

app.use(bodyParser.json());
//.use is a method that adds the middleware that we specifiy 
// app.get('/', (req, res) => res.send('hello')) // just used for test connection 
app.use(express.static('client')); //serves my index.html to whoever made the get request. looks throught the client folder looking for any statis assets in this case index.html 



//you're using app.post for the post request type from ajax  
app.post('/', (req,res) => { 
console.log(combo(req.body));
  res.send(combo(req.body));
});

var header = function(obj) {
    var temp = []; 
    let csv = '';
    var keys = Object.keys(obj); 
    keys.pop(); 
    var joinedKeyRow = keys.join(', ')
    joinedKeyRow += '\n';
    return joinedKeyRow;
}

var convertFile = function(obj) {
  var temp = []; 
  let csv = '';
  var keys = Object.keys(obj); 
//   keys.pop(); 
//   var joinedKeyRow = keys.join(', ')

for(var i = 0; i < keys.length - 1; i++) {
    if (i !== keys.length - 2) {
        csv += obj[keys[i]]; 
        csv += ','; 
    } else {
        csv += obj[keys[i]];
        csv += '\n';
        if (obj['children'].length !== 0) {
            for (var j = 0; j < obj['children'].length; j++) {
                csv += convertFile(obj['children'][j]);
            }
        }
    }
  }
//   temp.push(joinedKeyRow); 
//   temp.push(csv);
//   return temp;
  return csv; 
}

var combo = function(obj) {
    var temp = ''; 
    temp += header(obj);
    temp += convertFile(obj);
    return temp;
}
  //use for loop to get all key values 
  //if children.length === 0 return 
  //if not use recursion for loop 
//   var anotherTemp = []; 
//   for (var key in obj) {
//       if (key !== 'children') {
//         anotherTemp.push(obj[key]);
//       }
//       if (key === 'children') {
//           if (obj[key].length === 0) {
              
//           }
//       }
//   } cant use this way will be out of order. 




//in app.post the req.body will contain the message/data that the ajax posted to the server 
//then you use res.send to send back the data 

app.listen(3000, () => console.log('listening!'));
