var friends = require("../data/friends");



module.exports = function(app) {



    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });



    app.post("/api/friends", function(req, res) {

        var userData = req.body;
        var userScores = userData.scores;

        var bMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        var tDifference = 0;


        for (var i = 0; i < friends.length; i++) {

            tDifference = 0;


            for (var j = 0; j < friends[i].scores[j]; j++) {

                tDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                if (tDifference <= bMatch.friendDifference) {


                    bMatch.name = friends[i].name;
                    bMatch.photo = friends[i].photo;
                    bMatch.friendDifference = tDifference;
                }
            }
        }


        friends.push(userData);


        res.json(bMatch);

    });

};