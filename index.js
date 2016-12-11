var express=require("express"); 
var bodyParser=require("body-parser"); 
var mongoose = require("mongoose");

var app=express();

mongoose.connect('mongodb://nerjada:a12345678b@ds161487.mlab.com:61487/nerjada' , function(err){
	if(err){
		console.log(err);
		mongoose.disconnect();
		return;
	}
	console.log("Databasa u lidh me sukses");
});

app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}));


 mongoose.connection.once('open' , function(err){
	 if(err){
		 console.log(err);
		 mongoose.disconnect();
		 return;
	 }
	 var snippetSchema= mongoose.Schema({
		 authorName:{type : String ,unique:true} ,
		 bookName : String
		 
	 });
	 var Book=mongoose.model('book' , snippetSchema);
	 
	 app.post('/submit' , function(req,res){
	var bookform = {
		authorName: req.body.authorName,
		bookName: req.body.bookName 
		
	} 
	snippet.create(bookform ,function(err , result) {
		if (err){
			console.error("Could not create" , bookform.authorName );
			mongoose.disconnect();
			return;
		} 
		console.log("Created" , bookform.authorName ); 
		mongoose.disconnect();
	});
	
	app.post('/search by author name' , function(req,res){ 

	var authorName = req.body.authorName ;
	
	console.log(authorName);
   snippet.findOne({authorName : authorName}, function(err, snippet) {
        if (!snippet || err) {
            console.error("Could not read snippet", authorName);
			res.json({a:1});
           mongoose.disconnect();
            return;
        }
        console.log("Read snippet", snippet.authorName);
		res.json(snippet);
		mongoose.disconnect();
        
    });
});

app.post('/search by book name' , function(req,res){ 
	
	var bookName =req.body.bookName;
	
	console.log(authorName);
   snippet.findOne({ bookName : bookName}, function(err, snippet) {
        if (!snippet || err) {
            console.error("Could not read snippet", bookName);
			res.json({a:1});
           mongoose.disconnect();
            return;
        }
        console.log("Read snippet", snippet.bookName);
		res.json(snippet);
		mongoose.disconnect();
        
        });
    });

	 }); 
 
 app.listen(process.env.PORT||8000);
 
 