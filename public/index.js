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

	//This currently requires a link to a hosted image. Will look into local file sourcing if possible. Will also have to change home.handlebars.
	var itemPic = document.getElementById('poster-img-input');
	var picToAdd = itemPic.value;



	var itemHeader = document.getElementById('poster-item-input');
	var headerToAdd = itemHeader.value;
	console.log(headerToAdd);

	var itemComment = document.getElementById('poster-comments-input');
	var commentToAdd = itemComment.value;
	console.log(commentToAdd);

	var itemContactInfo = document.getElementById('poster-contact-input');
	var contactToAdd = itemContactInfo.value;
	console.log(contactToAdd);
	/*
	<article class = "post">
			   	<div class = "post-front">
		   			<div class = "post-header">
					   	<div class = "post-item">
							An A
						</div>
						<button type = "button" class = "remove-post-button">Remove</button>
					</div>

					<div class = "img-container">
						<img class = "img-item" src = "https://media.gettyimages.com/photos/letter-a-made-by-multi-colored-sparklers-at-night-picture-id914262264?s=612x612" alt = "a photo"/>
					</div>
				</div>
				<div class = "post-back">
				   	<div class = "post-back-header">
						<button type = "button" class = "back-to-front">&times;</button>
					</div>
					<div class = post-text>
					   	<label for = "post-comments">Comments: </label>
						<div class = "post-comments">
							It's an A.
						</div>
						<label for = "post-contact-info">Contact Info: </label>
						<div class = "post-contact-info">
							1-800-1230-123
						</div>
			     		</div>
				</div>
				<div class = post-pass>
					password
				</div>
			</article>

	*/

	var thriftPost = document.createElement('article');
	thriftPost.classList.add('post');

	var postFront = document.createElement('div');
	postFront.classList.add('post-front');
	thriftPost.appendChild(postFront);

	var postHeader = document.createElement('div');
	postHeader.classList.add('post-header');
	postFront.appendChild(postHeader);

	//NEED TO FIX BUTTONS ONE AND TWO


	var postItem = document.createElement('div');
	postItem.classList.add('post-item');
	//Add text here
	postItem.textContent = headerToAdd;
	postHeader.appendChild(postItem);

	var button = document.createElement('button');
	button.type = "button";
	button.classList.add('remove-post-button');
	button.textContent = "Remove";
	postHeader.appendChild(button);

	var imgContainer = document.createElement('div');
	imgContainer.classList.add('img-container');
	postFront.appendChild(imgContainer);


	var imgItem = document.createElement('img');
	imgItem.classList.add('img-item');
	imgItem.src = picToAdd;
	imgContainer.appendChild(imgItem);
	
	var postBack = document.createElement('div');
	postBack.classList.add('post-back');
	thriftPost.appendChild(postBack);

	var postBackHeader = document.createElement('div');
	postBackHeader.classList.add('post-back-header');
	postBack.appendChild(postBackHeader);

	var button2 = document.createElement('button');
	button2.type = "button";
	button2.classList.add('back-to-front');
	button2.textContent = "&times;";
	postBackHeader.appendChild(button2);
	
	var postText = document.createElement('div');
	postText.classList.add('post-text');
	postBack.appendChild(postText);

	
	var labelComments = document.createElement('label');
	labelComments.htmlFor = 'post-comments';
	postText.appendChild(labelComments);
	
	var postComments = document.createElement('div');
	postComments.classList.add('post-comments');
	postComments.textContent = commentToAdd;
	postText.appendChild(postComments);

	var labelContacts = document.createElement('label');
	labelContacts.htmlFor = 'post-contact-info';
	postText.appendChild(labelContacts);


	var postContactInfo = document.createElement('div');
	postContactInfo.classList.add('post-contact-info');
	postContactInfo.textContent = contactToAdd;
	postText.appendChild(postContactInfo);

	var postPass = document.createElement('div');
	postPass.classList.add('post-pass');
	postPass.textContent = 'placeholder password';
	thriftPost.appendChild(postPass);
	

	


	var postContainer = document.getElementsByClassName('post-container');
	postContainer[0].appendChild(thriftPost);
	

	console.log(thriftPost);

	closePosterView();
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
