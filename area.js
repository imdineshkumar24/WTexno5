const http= require('http');
url= require('url');
http.createServer((req,res)=>{
    console.log(req.url);
    var q= url.parse(req.url,true).query;
    console.log(q);
    console.log(q.l1);
    console.log(q.b1);
    var l = Number(q.l1);
    var b = Number(q.b1);
    var area1 = l*b;
    res.write("area of a rectangle: "+area1);
    res.end(); 
}).listen(2020);