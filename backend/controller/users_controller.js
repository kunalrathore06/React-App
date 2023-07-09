
const User = require('../models/user')

module.exports.home = function(req,res){
    console.log(req.cookies)
    return res.render('home.ejs',{
        title:"Home"
    });
};

// render the sign in page
module.exports.signIn = function(req,res){
    return res.render('sign_in.ejs',{
        title:"SIGNIN"
    });
};

// render the registration page
module.exports.signUp = function(req,res){
    return res.render('sign_up.ejs',{
        title: "user sign up"
    }); 
};


// get the sign up data

module.exports.create = function(req,res){
    if(req.body.password != req.body.confirm_password){
        return res.redirect('back')
    }
    User.findOne({email: req.body.email}, function(err,  user){
        if(err){
            console.log("error in finding user in singing up");
            return
        }
        if(!user){
            User.create(req.body, function(err, user0){
                if(err){console.log("error in signing up the user"); return}

                return res.redirect('/index/sing-in')
            })
        }
        else{
            return res.redirect('back')
        }
    })
}

// sign in and create session for user

module.exports.createSession = function(req,res){
    //TODO later
}