const {user} = require('../models/PEARLS')

function index(req, res) {
    res.render('index')
}

function studentLogin(req, res) {
    res.render('student-login')
}

function childLogin(req, res) {
    res.render('child-login')
}

function elderLogin(req, res) {
    res.render('elder-login')
}



async function login(req, res) {
    const username = req.body.username // username from input
    const password = req.body.password // password from input
    const userFind = await user.find({username:username,password:password})
    const status = userFind.length > 0 ? 'Login Success' : 'Login Failed'

    if(userFind.length > 0) { 
        res.render('home', {username:username, status:status}) // render home.ejs
    } else {
        res.render('home', {username:username, status:status}) // render home.ejs
    }
}


module.exports = { index, login, studentLogin, childLogin, elderLogin} // export all function