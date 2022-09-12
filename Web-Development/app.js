const express= require("express");
const body_parser=require("body-parser");
const request=("request");
const https=require("https");
const mailchimp=require("@mailchimp/mailchimp_marketing");

app=express();
app.use(body_parser.urlencoded({extended:true}));
app.use(express.static("public"));
app.listen(process.env.PORT || 3000,()=>{console.log("The server has started at 3000.")})
app.get("/",(req,res)=>{
  var name=__dirname+"/signup.html";
  res.sendFile(name);
});
app.post("/",(req,res)=>
{
  // console.log(req);
  const email=req.body.email;
  const fname=req.body.Fname;
  const lname=req.body.Lname;

  mailchimp.setConfig({
  //*****************************ENTER YOUR API KEY HERE******************************
   apiKey: "20f9ce9688609cf478e6b29d3d78c2c8-us8",
  //*****************************ENTER YOUR API KEY PREFIX HERE i.e.THE SERVER******************************
   server: "us8"
  });
  var code;
const listId="f058bfa552";
  async function run() {
const response = await mailchimp.lists.addListMember(listId, {
email_address: email,
status: "subscribed",
merge_fields: {
FNAME: fname,
LNAME: lname
}
});
res.sendFile(__dirname+"/success.html");
}
  // const data={
  //   members:[
  //     {
  //       email_address:email,
  //       status:"subscribed",
  //       merge_fields:{
  //         FNAME:fname,
  //         LNAME:lname
  //       }
  //     }
  //   ]
  // }
//   const url="https://us8.api.mailchimp.com/3.0/lists";
//   var option={
//     method:"POST",
//     auth:"Nipun:20f9ce9688609cf478e6b29d3d78c2c8-us8"
//   }
//   var json_data=JSON.stringify(data);
//
// const request=https.request(url,option,(response)=>
// {
// response.on("data",(data)=>
// {
//   console.log(JSON.parse(data));
// })
// });
// request.write(json_data);
// request.end();

// run();

 run().catch(e => res.sendFile(__dirname + "/failure.html"));

});
// Api_key=20f9ce9688609cf478e6b29d3d78c2c8-us8
// List id=f058bfa552
