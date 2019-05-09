function createRequest() {
	var input_parameter = document.getElementById("search_term").value;
	var num_comments = document.getElementById("sample_size").value;
	var oReq = new XMLHttpRequest();
	oReq.addEventListener("load", reqListener);
	if(num_comments){
		
		oReq.open("GET", "https://cs410-python.herokuapp.com/twitter/" + input_parameter + "/" + num_comments);

		document.getElementById("demo").textContent = "Loading Results...";
	}

	else{
		document.getElementById("demo").textContent = "Invalid sample size, please enter a value";
		return;
	}
	oReq.send();	
}

document.getElementById('twitter').onclick = createRequest;

function reqListener () {
  console.log("Response from backend received", this.responseText);
  document.getElementById('demo').textContent = this.responseText   + " If you want to check out some graphed results, hit the Results button below";
}