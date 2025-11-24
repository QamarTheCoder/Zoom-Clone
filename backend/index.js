    require("dotenv").config()
    const express=require('express')
    const cors=require('cors')
    const app=express();
    const PORT = process.env.PORT || 3000;
    const UserModel=require('./Models/userModel');
    const passport = require("passport");
    const session=require('express-session');
    const { default: mongoose } = require("mongoose");

    app.use(express.urlencoded({extended:true}))
    app.use(express.json())
    app.use(session({
        saveUninitialized:false,
        secret:'HIEAISQ@@',
        resave:false,
        maxAge:2302*2323*3*238*2312*2

    }))

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(UserModel.createStrategy());
    passport.serializeUser(UserModel.serializeUser());
    passport.deserializeUser(UserModel.deserializeUser());

    app.use(cors({origin:'http://localhost:3001',
        credentials:true
    }))

    app.post("/signup", (req, res, next) => {
    const { username, password } = req.body;

    const newUser = new UserModel({ username });

    UserModel.register(newUser, password, (err, user) => {
        if (err) {
            return res.status(400).json({
                success: false,
                msg: err.message
            });
        }

        passport.authenticate("local")(req, res, () => {
            return res.status(200).json({
                success: true,
                msg: "User registered and logged in"
            });
        });
    });
});

app.post('/login',(req,res,next)=>{
    console.log('QMA')
    passport.authenticate('local',(err,user,next)=>{
        if(err){
            return res.status(500).json({
                success:false,
                msg:"Server Error"
            })
        }

        if(!user){
            return res.status(400).json({
                success:false,
                msg:"Incorrect user"
            })
        }

        req.logIn(user,(err)=>{
            if(err){
                 return res.status(500).json({
                success:false,
                msg:"Error loggin in"
            })
            };

            return res.status(200).json({
                success:true,
                msg:'logged in successfully'
            })
        })
    })(req,res,next)


})

    app.listen(PORT, ()=>{
        mongoose.connect(process.env.MONGO_URI)
        console.log('DB connnected and Listening')
    })

