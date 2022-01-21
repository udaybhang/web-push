var express = require('express');
var app = express();
var FCM = require('fcm-node');
var fcm = new FCM('AAAAozeY74I:APA91bEYjtNmlfn9OdeBIOCQIo_IPtENRwErk3zJAaMrqO5S4JiZXAFqX_g-qbG_X46pqNfKjClxGbzAJUpKBCp161y1gakZFlCmYaR4BVVR9M7xKIYT0dHzKa508f1CRa0z2fK_rLsV');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
})

app.post('/', function (req, res) {
    let message = {
        to: 'dxCngnZGarA:APA91bHevg7nbIe862r_V6ynl1IGcjXQYyXfRVc1vBoMxbcgy9Y3ZYJsWRrYKQqC5DlFSM34Tfdgc5yMggBfvNt5be7N2iEx0YVfDoeXzNe3kxZhl3Hgqj5TJRkneqq5VX-hZQDv8WV-',
        collapse_key: 'your_collapse_key',
        notification: {
            title: 'Booking Confirm',
            body:  "Your Order  has been Confirm.",
            icon: '/ab-logo.png'
          }
    };
    fcm.send(message, async function(err, response) {
        if (err) {
            console.log("=======================Android error comming===================")
            console.log(null, err);
        } else {
            console.log("=======================Android===================")
            res.status(200).json({
                data:response
            })
            console.log(null, response);            
        }
    });
})

var server = app.listen(8000, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("App listening at http://%s:%s", host, port)
})