const axios=require('axios');



exports.inde=(req,res)=>{
    axios.get("http://localhost:10000/api/users")
    .then(function(response){
        res.render('index',{users:response.data});
    })
   
}


exports.new=(req,res)=>{
    res.render("new");
}
