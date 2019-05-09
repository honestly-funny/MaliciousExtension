function createRequest() {
	var input_parameter = document.getElementById("search_term").value;
	var subreddit = document.getElementById("subreddit").value;
	var num_comments = document.getElementById("sample_size").value;
	var num_posts = document.getElementById("num_posts").value;
	var time_period = document.getElementById("time_period").value;
	// chrome.browserAction.onClicked.addListener(function(activeTab){
	// 	var newURL = "http://cs410-python.herokuapp.com";
	// 	chrome.tabs.create({url: newURL});
	// });
	var url = "http://cs410-python.herokuapp.com/graph";
	if(!time_period || !subreddit || !num_comments || !num_posts){
		document.getElementById("demo").textContent = "Please enter values for all required fields";
		return;
	}
	else{
		if(input_parameter){
			url = url + "/" + input_parameter + "/" + subreddit + "/" + num_comments + "/" + num_posts + "/" + time_period;
		}
		else{
			url = url + "/" + subreddit + "/" + num_comments + "/" + num_posts + "/" + time_period;
		}
	}

	window.open(url,'_blank');
	document.getElementById("demo").textContent = "Loading Results... ";

}

document.getElementById('rgraph').onclick = createRequest;

