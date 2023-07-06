const express=require("express")

const app=express();

const middleware=(req,res,next)=>{
      console.log("middleware-1=Access for all page");
      next()
}
app.use(middleware);

const middleware2=(req,res,next)=>{
    next()
}

app.get("/login",(req,res)=>{
    res.send("<h1>Login Page</h1>")
})
app.get("/signup",middleware2,(req,res)=>{
    console.log("middleware-2");
    res.send("<h1>SignUP Page</h1>")
})
app.get("/home",(req,res)=>{
    res.send("<h1>Home Page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About</h1>")
})
app.listen(5000,()=>{
    console.log("server is running on 5000");
})