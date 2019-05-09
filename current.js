function createRequest() {
	var input_parameter = document.getElementById("output").textContent;

	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
		
	oReq.open("GET", "https://cs410-python.herokuapp.com/site/" + input_parameter);

	document.getElementById("demo").textContent = "Loading Results...";

	oReq.send();	
}

document.getElementById('current').onclick = createRequest;

function reqListener () {
  console.log("Response from backend received", this.responseText);
  document.getElementById('demo').textContent = this.responseText   + " If you want to check out some graphed results, hit the Results button below";
}