var apiRequest;
loadMenu();

function loadMenu() {
	//pull menu from localStorage, if it exists
	var menu = JSON.parse(localStorage.getItem('menu'));
	//grab dom element holding the text for menu items then erase it
	var menuItems = document.getElementById('menuItems');
	menuItems.innerHTML = '';

	if (menu == null) {
		getMenu();
	}
	else {
		showMenu(menu);
	}
}

function showMenu(menu) {
	//adds all menu items from localStorage(menu).
	menu.forEach(function(element){
		var fullMenuDescription = (element.description);
		var node = document.createElement('li');
		var textNode = document.createTextNode(fullMenuDescription);
		node.appendChild(textNode);
		menuItems.appendChild(node);
	});
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

function catchResponse() {
	var response = JSON.parse(apiRequest.responseText);
	var menu =(response.menu_items);
	localStorage.setItem('menu', JSON.stringify(menu));
	loadMenu();
}

function httpRequestOnError() {
	var node = document.createElement('li');
	var textNode = document.createTextNode("Sorry, we could not receive the menu at this time. Try later!");
	node.appendChild(textNode);
	menuItems.appendChild(node);
}
