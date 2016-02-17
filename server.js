var express =  require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function (req, res) {
	console.log("I received a GET request")

	person1 = {
		name: 'Tim',
		emial: 'tim1@gmail.com',
		number: '(111) 111-1111'
	};

	person2 = {
		name: 'emily',
		emial: 'emily2@gmail.com',
		number: '(222) 222-2222'
	};

	person3 = {
		name: 'John',
		emial: 'John3@gmail.com',
		number: '(333) 333-3333'
	};

	var contactList = [person1, person2, person3];
	res.json(contactList)
});

app.listen(3000);
console.log("Server running on port 3000");