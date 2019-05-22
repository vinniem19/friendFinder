var friends = require("../data/friends");

module.exports = function(app) {

app.get("/api/friends", function(req, res) {
    res.json(friends);
});

app.post("/api/friends", function(req, res) {
    friends.push(req.body);
    res.json(true);

    // Here, I set the variables and loop through newFriend array to begin my comparison
            var bestMatch;
            var possibleMatch = {};
            var compare = 0;
            // I want to loop through our friends array
    for(var i = 0; i < friends.length; i++){
        if (bestMatch === undefined) {
            bestMatch = {};
            bestMatch.name = i;
            for (var h = 0; h < newFriend.scores.length; h++) {
                compare += Math.abs(parseInt(friends[i].scores[h]) - parsInt(newFriend.scores[h]));
            };
            bestMatch.value = compare;

            console.log("Possible One Value: ", bestMatch.value );
            console.log("Possible One Name: ", friends[bestMatch.name] );
            compare = 0;

            i++;
        };
        possibleMatch.name = h;
        console.log("friends indes2: ", h);

        for (var i = 0; i < newFriend.scores.length; i++) {
            compare += Math.abs(parseInt(friends[i].scores[h]) - parsInt(newFriend.scores[h]));
        };
        possibleMatch.value = compare;
        compare = 0;
        console.log("possibleMatch Value: ", possibleMatch.value);
        console.log("possibleMatch ", friends[possibleMatch.name]);
        if (bestMatch.value < possibleMatch.value) {
            possibleMatch = {};
        } else {
            bestMatch = possibleMatch;
            possibleMatch = {};
        };
        };
});


}
