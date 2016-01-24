document.getElementById("toplinks").innerHTML =
"<ul id='toplinks'>" +
"<li><a href='Home.html'>Home</a></li>" +
"<li><a href='About.html'>About</a></li>" +
"<li><a href='Contact.html'>Contact</a></li>" +
"</ul>";

function myFunction() {
    var person = prompt("Please enter your name", "");
    
   	if (person != null) {
    document.getElementById("demo").innerHTML =
    "Hello " + person + "! I don't want to contact you either.";
   	}
}