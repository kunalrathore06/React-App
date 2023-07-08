
// render the sign in page
module.exports.signIn = function(req,res){
    
    return res.render('sign_in',{
        title: "user sign in"
    })
}


// render the registration page
module.exports.signUp = function(req,res){
    return res.render('sign_up',{
        title: "user sign up"
    })
}