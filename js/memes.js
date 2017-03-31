var memes = ["barber.png", "bst.jpeg", "cage.jpg", "cookie.png", "java.jpg", "logn.png", "money.jpg", "muppet.jpg", "ryan.png", "stack.png", "source.png", "itcrowd.jpeg", "web.jpg"];

function memeIt(memes){
	var randMeme = memes[Math.floor(Math.random() * memes.length)];
	var img = document.createElement("img");
	var imgShortcut ="./img/";
	img.setAttribute("class", "img-fluid");
	img.src = imgShortcut.concat(randMeme);
	document.getElementById("memesGoesHere").innerHTML = "";
	document.getElementById("memesGoesHere").appendChild(img);

}