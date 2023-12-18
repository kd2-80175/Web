const express = require("express");
const app = express.Router();
const mysql = require("mysql2");

const connectionDetails = {
  host: "localhost",
  database: "kdac",
  user: "kd2_80175_prerna",
  password: "manager",
};

app.get("/", (request, response) => {
  var sql = `select * from products`;
  var connection = mysql.createConnection(connectionDetails);
  connection.query(sql, (error, result) => {
    if (error == null) {
      console.log("GET call received for /products");
      response.setHeader("Content-Type", "application/json");
      connection.end();
      response.write(JSON.stringify(result));
      response.end();
    } else {
      console.log("GET call received for /products");
      response.setHeader("Content-Type", "application/json");
      connection.end();
      response.write(JSON.stringify(error));
      response.end();
    }
  });
})

app.post("/",(request,response)=>{
    var sql =`insert into products(producttitle,price,stock) values('${request.body.producttitle}',${request.body.price},${request.body.stock})`;
    console.log(sql);

    var connection=mysql.createConnection(connectionDetails);
    connection.query(sql,(error,result)=>{
        if(error==null){
        console.log("POST call received for /products");
        response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(result));
        response.end();
        }
        else
        {
            console.log("POST call received for /products");
            response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(error));
        response.end();
        }
    })
})

app.put("/:productid",(request,response)=>{

    var connection=mysql.createConnection(connectionDetails);
    var sql=`update products set producttitle="${request.body.producttitle}" where productid=${request.params.productid}`
   console.log(sql);
    connection.query(sql,(error,result)=>{
        console.log(result)
        if(error==null){
        console.log("PUT call received for /products");
        response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(result));
        response.end();
        }
        else
        {
            console.log("PUT call received for /products");
            response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(error));
        response.end();
        }
    })
})

app.delete("/:productid",(request,response)=>{

    var connection=mysql.createConnection(connectionDetails);
    var sql=`delete from products where productid=${request.params.productid}`
   console.log(sql);
    connection.query(sql,(error,result)=>{
        console.log(result)
        if(error==null){
        console.log("DELETE call received for /products");
        response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(result));
        response.end();
        }
        else
        {
            console.log("DELETE call received for /products");
            response.setHeader("Content-Type","application/json");
        connection.end();
        response.write(JSON.stringify(error));
        response.end();
        }
    })
})

module.exports = app;
