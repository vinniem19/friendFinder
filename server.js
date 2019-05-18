// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`
// Dependencies

var express = require("express");
var path = require("path");

// sets up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up express app to handle data parsing
app.use(express.urlencoded({
    extended: true }));
app.use(express.json());


//New Section
// Data (data move to friends.js)
var friends = 
[{"name":"Ahmed","photo":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg","scores":["5","1","4","4","5","1","2","5","4","1"]},{"name":"Jacob Deming","photo":"https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg","scores":["4","2","5","1","3","2","2","1","3","2"]},{"name":"Jeremiah Scanlon","photo":"https://avatars2.githubusercontent.com/u/8504998?v=3&s=460","scores":["5","2","2","2","4","1","3","2","5","5"]},{"name":"Louis T. Delia","photo":"https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg","scores":["3","3","4","2","2","1","3","2","2","3"]},{"name":"Lou Ritter","photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg","scores":["4","3","4","1","5","2","5","3","1","4"]},{"name":"Jordan Biason","photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg","scores":["4","4","2","3","2","2","3","2","4","5"]},{"name":"gfdsgf","photo":"dsfgfds","scores":["1","1","1","1","1","1","1","2","2","1"]},{"name":"bill","photo":"https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg","scores":["2","2","2","1","5","3","4","5","2","2"]},{"name":"me","photo":"https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","scores":["5","3","2","3","5","3","3","2","2","3"]},{"name":"Darvin Bingle","photo":"https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2017/01/pig_AdobeStock_2747487-1024x683.jpeg","scores":["5","3","2","1","4","1","3","2","2","4"]},{"name":"gfdsgf","photo":"dsfgfds","scores":["1","1","1","1","1","1","1","2","2","1"]},{"name":"gfdsgf","photo":"dsfgfds","scores":["1","1","1","1","1","1","1","2","2","1"]},{"name":"Evgenia Semez","photo":"wedwer","scores":["3","2","2","2","3","2","3","2","2","3"]},{"name":"Test","photo":"Test","scores":["3","3","3","1","1","3","3","3","3","3"]},{"name":"Evgenia Semez","photo":"wedwer","scores":["3","2","2","2","3","2","3","2","2","3"]},{"name":"Evgenia Semez","photo":"wedwer","scores":["3","2","2","2","1","2","3","5","2","3"]},{"name":"hdf","photo":"dgs","scores":["4","3","5","5","1","3","3","1","3","3"]},{"name":"thrs","photo":"sf","scores":["1","5","5","2","3","3","4","2","1","2"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","5","2","3","3","3","3"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","5","2","3","3","3","3"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","5","2","3","3","3","3"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","5","2","3","4","3","3"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","2","3","3","4","3","3"]},{"name":"eryk","photo":"blA ","scores":["2","2","2","3","2","3","3","4","3","3"]},{"name":"amp3193","photo":"fghfjhfjh","scores":["5","3","3","5","3","1","3","2","2","1"]},{"name":"dsefs","photo":"sf","scores":["2","3","5","5","4","3","4","1","1","1"]},{"name":"Blake","photo":"https://vignette.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754","scores":["2","1","3","3","2","3","5","1","3","4"]},{"name":"Kev","photo":"https://media.licdn.com/dms/image/C5103AQFwgUk57H_IZA/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=e6HPkIhbWrSLDwyKwBQTIua4cDPORnE9PkvpdI7H92U","scores":["3","4","2","2","4","3","3","5","2","4"]},{"name":"Kev","photo":"https://media.licdn.com/dms/image/C5103AQFwgUk57H_IZA/profile-displayphoto-shrink_200_200/0?e=1563408000&v=beta&t=e6HPkIhbWrSLDwyKwBQTIua4cDPORnE9PkvpdI7H92U","scores":["3","4","2","2","4","3","3","5","2","4"]},{"name":"Sarah","photo":"https://vignette.wikia.nocookie.net/streetfighter/images/e/e3/Chunrender.png/revision/latest?cb=20170728163823","scores":["5","4","3","1","2","2","4","2","3","2"]},{"name":"Lucy","photo":"none","scores":["1","3","1","3","5","1","3","3","5","1"]},{"name":"srvinu","photo":"sss","scores":["1","2","2","1","2","2","3","3","3","3"]},{"name":"46uw56","photo":"6uw46","scores":["1","1","1","1","1","1","1","1","1","1"]},{"name":"46uw56","photo":"6uw46","scores":["4","3","1","2","1","3","5","1","2","1"]},{"name":"Ivan Rendon","photo":"imkdhejs.jkdioje","scores":["5","4","4","4","5","5","5","5","5","4"]},{"name":"Ivan Rendon","photo":"imkdhejs.jkdioje","scores":["5","4","4","4","5","5","5","5","5","4"]},{"name":"Ivan Rendon","photo":"imkdhejs.jkdioje","scores":["5","4","4","4","5","5","5","5","5","4"]},{"name":"asdf","photo":"asdf","scores":["1","1","3","3","4","2","2","4","4","1"]},{"name":"Ivan Rendon","photo":"sdkndijwef","scores":["5","4","4","4","5","5","5","5","5","4"]},{"name":"poop","photo":"photo","scores":["2","3","3","5","2","4","3","3","5","3"]},{"name":"Alex","photo":"/Users/alexandereversbusch1/Desktop/IMG_3405.jpeg","scores":["3","2","5","3","3","3","3","2","3","2"]},{"name":"Melissa Day","photo":"https://i.pinimg.com/originals/0e/41/f7/0e41f74f1edc0dfac2bea28ff655dbe9.jpg","scores":["5","3","3","1","3","3","4","2","3","1"]}];
 console.log(friends[0].scores);
 console.log(friends[0].scores[0]);

 // function to compare results of newFriend to friend
 function compareResults(friendScore, newFriendScore) {
     // use for each element.forEach()
    // let frScores =  friends[0].scores.length;
     // for (var i = 0; i < frScores; i++) {
// if (friendScore < newFriendScore) {
    var diff = Math.abs(newFriendScore-friendScore);
    console.log(diff);
  // } else {
//        diff = friendScore-newFriendScore;
//        console.log(diff);
//    }
 }
// }
 compareResults(friends[0].scores[0],friends[0].scores[2]);


 //  this is how to find the match friend
       //* User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
       //* User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
       //* Total Difference: **2 + 1 + 2 =** **_5_**
       //* The closest match will be the user with the least amount of difference.


//New section
//Routes

// route to send user to AJAX pg first
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/app/public/home.html"));
});

app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

// new section
// the click function for the submit button
// $("#submitButton").on("click", function(event) {
//     // event.preventDefault();
//     var newFriend = 
//     {
//         "name": $("#nameInput").val().trim(),
//         "photo": $("linkInput").val().trim(),
//         "scores":
//         [
//             $("#answer1.value"),
//             $("#answer2.value"),
//             $("#answer3.value"),
//             $("#answer4.value"),
//             $("#answer5.value"),
//             $("#answer6.value"),
//             $("#answer7.value"),
//             $("#answer8.value"),
//             $("#answer9.value"),
//             $("#answer10.value"),
      
//         ]
//     }
//         console.log(newFriend);

//     });
//     // new section
//     // Creating friend information from input on survey page
//     $.post("/api/friends", newFriend)
//     .then(function(data) {
//         console.log("survey.html", data);
//         alert("adding friend")
//     });


// start the server and listen for input
app.listen(PORT, function() {
    console.log("Listening on port: " + PORT);
});