//search works but isn't live search and doesn't return elements to the DOM


function search() {
	var posts = document.getElementsByClassName('post-item');
	console.log("--Posts--");
	console.log(posts);
	var searchQuery = document.getElementById('search-box').value;
	var searchQuery2 = searchQuery.toLowerCase();

	var comments = document.getElementsByClassName('post-comments');
	var contacts = document.getElementsByClassName('post-contact-info');


	for (var i = posts.length - 1; i >= 0; i--){
		var itemString = posts[i].textContent;
		var itemString2 = itemString.toLowerCase();

		var itemString3 = comments[i].textContent;
		var itemString4 = itemString3.toLowerCase();

		var itemString5 = contacts[i].textContent;
		var itemString6 = itemString5.toLowerCase();

		if (itemString2.includes(searchQuery2) != 1 && itemString4.includes(searchQuery2) != 1 && itemString6.includes(searchQuery2) != 1){

			var dad1 = posts[i].parentNode;
			var dad2 = dad1.parentNode;
			var dad3 = dad2.parentNode;
			dad3.parentNode.removeChild(dad3);


		}
	}
	if(searchQuery==""){
		console.log("Returned!");
		location.reload();
	}
}


var siteTitle = document.getElementsByClassName("site-title");
  siteTitle[0].addEventListener('click',function(){
         window.location = 'http://localhost:3000/';
  });



function togglePosterView() {
	var hidden_poster = document.getElementsByClassName("hidden-poster");
	hidden_poster[0].style.display = 'flex';

}

function closePosterView() {
	var hidden_poster = document.getElementsByClassName("hidden-poster");
   	document.getElementById("poster-comments-input").value = "";
   	document.getElementById("poster-password-input").value = "";
	document.getElementById("poster-item-input").value = "";
	document.getElementById("poster-img-input").value = "";
	document.getElementById("poster-contact-input").value = "";
	document.getElementById("poster-price-input").value = "";
	hidden_poster[0].style.display = 'none';
}

function addPost(event) {

	var itemPic = document.getElementById('poster-img-input');
	var picToAdd = itemPic.value;

	var itemPass = document.getElementById('poster-password-input');
	var passToAdd = itemPass.value;

	var itemHeader = document.getElementById('poster-item-input');
	var headerToAdd = itemHeader.value;

	var itemComment = document.getElementById('poster-comments-input');
	var commentToAdd = itemComment.value;

	var itemContactInfo = document.getElementById('poster-contact-input');
	var contactToAdd = itemContactInfo.value;

	var itemPrice = document.getElementById('poster-price-input');
	var priceToAdd = itemPrice.value;

	if (isNaN(priceToAdd)){
                alert("Please enter a number for the price of the item");
        }	

	else if (picToAdd == "" || passToAdd == "" || headerToAdd == "" || commentToAdd == "" || contactToAdd == "" || priceToAdd == "") {
		alert("Please complete all fields to the post");
	}	


	else {
		var request = new XMLHttpRequest();
		var requestURL = '/post/';
		request.open('POST', requestURL);

		var postContext = {
			item: headerToAdd,
			photo: picToAdd,
			price: priceToAdd,
			comments: commentToAdd,
			contacts: contactToAdd,
			password: passToAdd
		};

		var requestBody = JSON.stringify(postContext);
		request.setRequestHeader (
			'Content-Type', 'application/json'
		);

		request.send(requestBody);

		var postHTML = Handlebars.templates.postBody(postContext);

		var postContainer = document.getElementsByClassName("post-container")[0];
		postContainer.insertAdjacentHTML('beforeend', postHTML);

		closePosterView();
		updateButtons();
	}
}

function updateButtons() {
	var images = document.getElementsByClassName("post-front");
	images[images.length-1].addEventListener('click', itemInfoRequest);


	var back_to_front = document.getElementsByClassName("post");
	back_to_front[back_to_front.length-1].addEventListener('click', closeInfoRequest);



	var back_to_front_button = document.getElementsByClassName("back-to-front");
        back_to_front_button[back_to_front_button.length-1].addEventListener('click', closeInfoRequest);


	var buttons = document.getElementsByClassName("remove-post-button");
	buttons[buttons.length-1].addEventListener('click', removePostRequest);


}

var pass_num = -1;

function togglePassView() {
	var hidden_pass = document.getElementsByClassName("hidden-pass-screen");
	hidden_pass[0].style.display = 'flex';
}

function closePassView() {
	var hidden_pass = document.getElementsByClassName("hidden-pass-screen");
	document.getElementById("pass-box-pass").value = "";
	hidden_pass[0].style.display = 'none';
}

function removeReq(pass_num){
	console.log("Index num: ", pass_num);
	var request = new XMLHttpRequest();
	var requestURL = '/delete';
	request.open('POST', '/delete');
	var pass = {
		num: pass_num
	}
	var requestBody=JSON.stringify(pass);
	console.log("req body", requestBody);
	request.setRequestHeader(
		'Content-Type', 'application/json'
	);

	request.send(requestBody);
	updateButtons();
}

function removePass() {
	var posts = document.getElementsByClassName('post-item');
	if (checkPass()) {
		console.log("remove the post @ index ", pass_num);
	   	var dad1 = posts[pass_num].parentNode;
		var dad2 = dad1.parentNode;
		var dad3 = dad2.parentNode;
		dad3.parentNode.removeChild(dad3);
		closePassView();

		removeReq(pass_num);

	}
	else {
	   	alert("Incorrect password entered.");
	}
}


function checkPass() {
	var post_passes = document.getElementsByClassName("post-pass");
	var pass = post_passes[pass_num].textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim();
	console.log("correct pass: ", pass);
	var pass_input = document.getElementById("pass-box-pass").value;
	console.log("entered pass: ", pass_input);
	if (pass_input == pass)
   		return true;
	else
   		return false;
}

var image_num = -1;

function toggleBackView() {
	console.log("image_num: ", image_num);
	document.getElementsByClassName("post-front")[image_num].style.display = 'none';
	document.getElementsByClassName("post-back")[image_num].style.display = 'block';
}

var post_num = -1;

function toggleFrontView() {
   	console.log("post_num: ", post_num);
	document.getElementsByClassName("post-front")[post_num].style.display = 'block';
	document.getElementsByClassName("post-back")[post_num].style.display = 'none';

}

function itemInfoRequest(event) {
	var val = 0;
	for (var j = 0; j < images.length; j++) {
		var image = images[j];
		if(this.isSameNode(image)) {
			val = j;
		}
	}
	image_num = val;
	toggleBackView();
	event.stopPropagation();

}

function closeInfoRequest(event) {
	var val = 0;
	for (var j = 0; j < back_to_front_button.length; j++) {
		var button = back_to_front_button[j];
		if(this.isSameNode(button)) {
			val = j;
		}
	}
	for ( var i = 0; i < back_to_front.length; i++){
		var button2 = back_to_front[i];
		if (this.isSameNode(button2)){
			val = i;
		}
	}
	post_num = val;
	toggleFrontView();
	event.stopPropagation();
}

function removePostRequest(event) {
   	var val = 0;
	for (var j = 0; j < buttons.length; j++) {
		var button = buttons[j];
		if (this.isSameNode(button)) {
			val = j;
		}
	}
	pass_num = val;
   	togglePassView();
	event.stopPropagation();
}


var images = document.getElementsByClassName("post-front");
for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click', itemInfoRequest);
}


var back_to_front = document.getElementsByClassName("post");
for (var i = 0; i < images.length; i++) {
	back_to_front[i].addEventListener('click', closeInfoRequest);
}



var back_to_front_button = document.getElementsByClassName("back-to-front");
for (var i = 0; i < images.length; i++) {
        back_to_front_button[i].addEventListener('click', closeInfoRequest);
}





var close_pass_button = document.getElementsByClassName("close-pass-button");
close_pass_button[0].addEventListener('click', closePassView);

var cancel_pass_button = document.getElementsByClassName("pass-cancel-button");
cancel_pass_button[0].addEventListener('click', closePassView);

var remove_pass_button = document.getElementsByClassName("pass-remove-button");
remove_pass_button[0].addEventListener('click', removePass);

var buttons = document.getElementsByClassName("remove-post-button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', removePostRequest);
}

var poster_button = document.getElementById("poster-button");
poster_button.addEventListener('click', togglePosterView);

var cancel_poster_button = document.getElementsByClassName("cancel-poster-button");
cancel_poster_button[0].addEventListener('click', closePosterView);

var close_poster_button = document.getElementsByClassName("close-poster-button");
close_poster_button[0].addEventListener('click', closePosterView);

var post_poster_button = document.getElementsByClassName("poster-post-button");
post_poster_button[0].addEventListener('click', addPost);

var searchButton = document.getElementById('search-button');
searchButton.addEventListener('click', search);

var searchBar = document.getElementById('search-box');
searchBar.addEventListener('input', search);
