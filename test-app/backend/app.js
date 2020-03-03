const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const nodemailer = require('nodemailer');
const ejs = require('ejs');
var fs = require('fs');

const Post = require('./models/post');
const app = express();
const app1 = express();


mongoose.connect("mongodb+srv://prem:U6IPYr2mjoPWel26@cluster0-todbc.mongodb.net/node?retryWrites=true&w=majority")
    .then(() => {
        console.log('Connected to DB!');
    })
    .catch(() => {
        console.log('Connection failed!');
    })
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token");
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
    );
    next();
});

app.post("/api/posts", (req, res, next) => {
    let post = new Post({
        title: req.body.title,
        content: req.body.content,
        diag: req.body.diag,
        his_fin_1_1: req.body.his_fin_1_1,
        his_fin_1_2: req.body.his_fin_1_2,
        his_fin_1_3: req.body.his_fin_1_3,
        phy_ex_1_1: req.body.phy_ex_1_1,
        phy_ex_1_2: req.body.phy_ex_1_2,
        phy_ex_1_3: req.body.phy_ex_1_3,

        diag2: req.body.diag2,
        his_fin_2_1: req.body.his_fin_2_1,
        his_fin_2_2: req.body.his_fin_2_2,
        his_fin_2_3: req.body.his_fin_2_3,
        phy_ex_2_1: req.body.phy_ex_2_1,
        phy_ex_2_2: req.body.phy_ex_2_2,
        phy_ex_2_3: req.body.phy_ex_2_3,

        diag3: req.body.diag3,
        his_fin_3_1: req.body.his_fin_3_1,
        his_fin_3_2: req.body.his_fin_3_2,
        his_fin_3_3: req.body.his_fin_3_3,
        phy_ex_3_1: req.body.phy_ex_3_1,
        phy_ex_3_2: req.body.phy_ex_3_2,
        phy_ex_3_3: req.body.phy_ex_3_3,

        diag_study1: req.body.diag_study1,
        diag_study2: req.body.diag_study2,
        diag_study3: req.body.diag_study3,

        email: req.body.email
    });
    post.save().then(createdPost => {
        res.status(201).json({
            message: 'post added successfully',
            postId: createdPost._id,
<<<<<<< Updated upstream
           
    });
    newMail() //calling nodemailer
     console.log("test",post.title);
     
function newMail() {

    //nodemailer code
    app1.set('view engine', 'ejs');  
    app1.listen(3001, function() {
        console.log("Listening on 3000");
         sendMail((err,info)=>{
               console.log(info)
           });
      });
     
     app1.get('/', function (req, res) {
       res.send('Hello World!')
     });
    
    const sendMail = (cb) => {
      
        // Create a SMTP transporter object
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'premchandran563@gmail.com',
                pass:  'personalacc'
            }
        });
        //let poolConfig = 'smtp://virender.nehra@causeway.com:10101989\@Cc@192.168.76.5/?pool=true';
        //  let transporter = nodemailer.createTransport(poolConfig);        	          
        // Message object
        console.log('new', Post.find().title);
        let message = {
           
            from: 'premchandran563@gmail.com',
    
            // Comma separated list of recipients
            to: post.email,
            subject: 'Target USMLE support', //Subject of the message
            UserName: 'prem',
            HISTORY: post.title,
            PHYSICAL: post.content,
            DIAGNOSIS: post.diag,
            HISF1: post.his_fin_1_1 ,
            HISF2: post.his_fin_1_2,
            HISF3: post.his_fin_1_3,

            PHYF1: post.phy_ex_1_1 ,
            PHYF2: post.phy_ex_1_2 ,
            PHYF3: post.phy_ex_1_3 ,


            DIAGNOSIS2: post.diag2,
            HISF2_1: post.his_fin_2_1,
            HISF2_2: post.his_fin_2_2,
            HISF2_3: post.his_fin_2_3,

            PHYF2_1: post.phy_ex_2_1 ,
            PHYF2_2: post.phy_ex_2_2 ,
            PHYF2_3: post.phy_ex_2_3 ,

            DIAGNOSIS3: post.diag3,
            HISF3_1: post.his_fin_3_1,
            HISF3_2: post.his_fin_3_2,
            HISF3_3: post.his_fin_3_3,

            PHYF3_1: post.phy_ex_3_1 ,
            PHYF3_2: post.phy_ex_3_2 ,
            PHYF3_3: post.phy_ex_3_3 , 

            DIAGSTUDY1: post.diag_study1 ,
            DIAGSTUDY2: post.diag_study2 ,
            DIAGSTUDY3: post.diag_study3 ,
            Message: 'Hi this is test project to send mail with ejs template.'
            
        };
         var filePath = './views/test.ejs';
         var compiled = ejs.compile(fs.readFileSync(filePath, 'utf8'));
         message.html = compiled(message);
        transporter.sendMail(message, (error, info) => {
            console.log(error);
            if (error) {
               cb(error.message,null);
            }
            cb(null,info);
            transporter.close();
=======

>>>>>>> Stashed changes
        });
        newMail() //calling nodemailer
        console.log("test", post.title);

        function newMail() {

            //nodemailer code
            app1.set('view engine', 'ejs');
            app1.listen(3001, function() {
                console.log("Listening on 3000");
                sendMail((err, info) => {
                    console.log(info)
                });
            });

            app1.get('/', function(req, res) {
                res.send('Hello World!')
            });

            const sendMail = (cb) => {

                // Create a SMTP transporter object
                let transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                        user: 'premchandran563@gmail.com',
                        pass: 'personalacc'
                    }
                });
                //let poolConfig = 'smtp://virender.nehra@causeway.com:10101989\@Cc@192.168.76.5/?pool=true';
                //  let transporter = nodemailer.createTransport(poolConfig);        	          
                // Message object
                console.log('new', Post.find().title);
                let message = {

                    from: 'premchandran563@gmail.com',

                    // Comma separated list of recipients
                    to: post.email,
                    subject: 'Subject of the message', //Subject of the message
                    UserName: 'prem',
                    HISTORY: post.title,
                    PHYSICAL: post.content,
                    DIAGNOSIS: post.diag,
                    HISF1: post.his_fin_1_1,
                    HISF2: post.his_fin_1_2,
                    HISF3: post.his_fin_1_3,

                    PHYF1: post.phy_ex_1_1,
                    PHYF2: post.phy_ex_1_2,
                    PHYF3: post.phy_ex_1_3,


                    DIAGNOSIS2: post.diag2,
                    HISF2_1: post.his_fin_2_1,
                    HISF2_2: post.his_fin_2_2,
                    HISF2_3: post.his_fin_2_3,

                    PHYF2_1: post.phy_ex_2_1,
                    PHYF2_2: post.phy_ex_2_2,
                    PHYF2_3: post.phy_ex_2_3,

                    DIAGNOSIS3: post.diag3,
                    HISF3_1: post.his_fin_3_1,
                    HISF3_2: post.his_fin_3_2,
                    HISF3_3: post.his_fin_3_3,

                    PHYF3_1: post.phy_ex_3_1,
                    PHYF3_2: post.phy_ex_3_2,
                    PHYF3_3: post.phy_ex_3_3,

                    DIAGSTUDY1: post.diag_study1,
                    DIAGSTUDY2: post.diag_study2,
                    DIAGSTUDY3: post.diag_study3,
                    Message: 'Hi this is test project to send mail with ejs template.'

                };
                var filePath = './views/test.ejs';
                var compiled = ejs.compile(fs.readFileSync(filePath, 'utf8'));
                message.html = compiled(message);
                transporter.sendMail(message, (error, info) => {
                    console.log(error);
                    if (error) {
                        cb(error.message, null);
                    }
                    cb(null, info);
                    transporter.close();
                });
            };

        }

    });
})


app.get('/api/posts', (req, res, next) => {
    //    const posts = [
    //        {
    // id: "111",
    // title: "First server",
    // content: "First content"
    //        }
    //    ];
    Post.find()
        .then(documents => {
            console.log(documents);
            res.status(200).json({
                message: 'post fetched successfully',
                posts: documents // posts.title
            });
            // var sam = "working";
            // res.render("test.ejs", {thingvar: "working"});
            // console.log("this is test:", sam);
        });

});
//    res.status(200).json(
//        {
//            message:'post fetched successfully',
//            posts: posts
//        }
//    );

app.delete("/api/posts/:id", (req, res, next) => {
    Post.deleteOne({ _id: req.params.id }).then(result => {
            console.log(result);
            res.status(200).json({ message: "Post deleted" });
        })
        // console.log(req.params.id);
        // res.status(200).json({ message: "Post deleted" });
});



module.exports = app;