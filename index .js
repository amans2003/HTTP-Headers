//HTTP headers are pieces of information sent between the client (like a web browser) and the server when making an HTTP request or receiving a response. 
//They provide additional details about the request or response, such as the type of content being sent, the language, how to handle the data, and more.

app.get("/api/users",(req,res)=>{
    res.setHeader("myName", "Aman Singh");
    return res.json(users);
});
  //it is used to make a coustom headers for perticular details
  // of a data which is send and recived by clint and server 