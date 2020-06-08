//need to implement a search - exclude the password from the search terms


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
   	hidden_poster[0].style.display = 'none';
}

function addPost(event) {

	//almost done...need to make sure this now syncs with the server and data is transferred to posts.json

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
	
	if (picToAdd == "" || passToAdd == "" | headerToAdd == "" || commentToAdd == "" || contactToAdd == "") {
		alert("Please complete all fields to the post");
	}

	else {
		var postContext = {
			item: headerToAdd,
			photo: picToAdd,
			comments: commentToAdd,
			contacts: contactToAdd,
			password: passToAdd
		};
	
		var postHTML = Handlebars.templates.postBody(postContext);
	
		var postContainer = document.getElementsByClassName("post-container")[0];
		postContainer.insertAdjacentHTML('beforeend', postHTML);
	
		closePosterView();
	}
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

function removePass() {
	if (checkPass()) {
		console.log("remove the post @ index ", pass_num);
	   	//remove post @pass_num
		closePassView();
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

var images = document.getElementsByClassName("img-item");
for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click', function(event) {
		var val = 0;
		for (var j = 0; j < images.length; j++) {
			var image = images[j];
			if(this.isSameNode(image)) {
				val = j;
			}
		}
		image_num = val;
		toggleBackView();
	})
}

var back_to_front = document.getElementsByClassName("back-to-front");
for (var i = 0; i < images.length; i++) {
	back_to_front[i].addEventListener('click', function(event) {
		var val = 0;
		for (var j = 0; j < back_to_front.length; j++) {
			var button = back_to_front[j];
			if(this.isSameNode(button)) {
				val = j;
			}
		}
		post_num = val;
		toggleFrontView();
	})
}

var close_pass_button = document.getElementsByClassName("close-pass-button");
close_pass_button[0].addEventListener('click', closePassView);

var cancel_pass_button = document.getElementsByClassName("pass-cancel-button");
cancel_pass_button[0].addEventListener('click', closePassView);

var remove_pass_button = document.getElementsByClassName("pass-remove-button");
remove_pass_button[0].addEventListener('click', removePass);

var buttons = document.getElementsByClassName("remove-post-button");
for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function(event) {
	   	var val = 0;
		for (var j = 0; j < buttons.length; j++) {
			var button = buttons[j];
			if (this.isSameNode(button)) {
				val = j;
			}
		}	
		pass_num = val;
	   	togglePassView();
	})
}

var poster_button = document.getElementById("poster-button");
poster_button.addEventListener('click', togglePosterView);

var cancel_poster_button = document.getElementsByClassName("cancel-poster-button");
cancel_poster_button[0].addEventListener('click', closePosterView);

var close_poster_button = document.getElementsByClassName("close-poster-button");
close_poster_button[0].addEventListener('click', closePosterView);

var post_poster_button = document.getElementsByClassName("poster-post-button");
post_poster_button[0].addEventListener('click', addPost);
