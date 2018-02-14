//this is the client side 
//use ajax request to talk to the server 
//send JSON data to server

var addNode = function(results) {
    var split = results.split('\n');
    for (var i = 0; i < split.length; i++) {
        $('.attach').append(`<div> ${split[i]} </div>`);
    }
  }

//create an object to store methods.

var app = {}; 

//app.send is sending a string or messageObj to server.js
app.send = function (message) {
  $.ajax({
    type: 'POST',
    url: '/', //this is the url where client side ajax will post request to which is my local machine right now or can use '/' cause same domain root 
    data: message, //always needs to send json data to servers
    contentType: 'application/json', //needs to tell server what type of data we are sending 
    success: function (result) {
        console.log('success!')
        //append the successful data result you receive back to the dom
        addNode(result);
    },
    error: function () {
        console.log('err')  
    }
  })
}

//jquery input value capture 
//jquery on submit listener
// the $inputText needs to be in the document click function because when you click it needs to capture the value. previously I used it outside the document function and it never captures the value because it only has value when the page loaded
  $(document).on('click', '#subtn', function(){
    let $inputText = $('#hi').val(); 
    console.log('clicked!');
    app.send($inputText); 
})




