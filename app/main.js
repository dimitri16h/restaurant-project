var apiRequest;
getMenu();

document.onreadystatechange = function() {
	if (document.readyState == "interactive") {
		// load some stuff
		// add.onclick = saveFoot;
		// loadSavedFeet();
	}
}

function getMenu() {

	// Set up url for fetching data.
	var url = "http://entree-s18.herokuapp.com/v1/menu";

	// Code that fetches data from the API URL and stores it in results.
	apiRequest = new XMLHttpRequest();
	apiRequest.onload = catchResponse;
	apiRequest.onerror = httpRequestOnError;
	apiRequest.open('get', url, true);
	apiRequest.send();
}