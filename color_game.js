let colors = [];
change_colors(6); //assign random rgb color to every emtry in colors array
let squares = document.querySelectorAll(".square");
let pickedColor = colors[Math.floor(Math.random()*colors.length)]; //choses a random color from colors array
let guess = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let easybtn = document.querySelector("#easybtn");
let hardbtn = document.querySelector("#hardbtn");
let mode = 6;

guess.textContent = pickedColor.toUpperCase();

for (let i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]

	//add click listeners to the sqaures
	squares[i].addEventListener("click",function(){
		let clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			document.querySelector("#reset").textContent = "PLAY AGAIN";
			if(mode === 6){
				change_to_winning_color(6);
			}
			else{
				change_to_winning_color(3);
			}
		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}
let reset = document.querySelector("#reset");
reset.addEventListener("click",function(){
	if(document.querySelector("#reset").textContent === "PLAY AGAIN"){
		document.querySelector("#reset").textContent = "New Colors";
	}
	document.querySelector("#guess").style.backgroundColor = "steelblue";
	document.querySelector("#header").style.backgroundColor = "steelblue";
	if(mode === 6){
		change_colors(6);
	}
	else{
		change_colors(3);
	}
	for (let i = 0; i < mode; i++) {
	squares[i].style.backgroundColor = colors[i];
	}
	pickedColor = colors[Math.floor(Math.random()*colors.length)];
	guess.textContent = pickedColor.toUpperCase();
	messageDisplay.textContent = "";
})

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	change_colors(3);
	for (let i = 0; i < 3; i++) {
	squares[i].style.backgroundColor = colors[i]
	}
	for (let i = 3; i < 6; i++) {
	squares[i].style.backgroundColor = "#232323";
	}
	pickedColor = colors[Math.floor(Math.random()*3)];
	guess.textContent = pickedColor.toUpperCase();
	messageDisplay.textContent = "";
	mode = 3;

})
	
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	change_colors(6);
	for (let i = 0; i < 6; i++) {
	squares[i].style.backgroundColor = colors[i]
	}
	pickedColor = colors[Math.floor(Math.random()*colors.length)];
	guess.textContent = pickedColor.toUpperCase();
	messageDisplay.textContent = "";
	mode = 6;

})

function change_colors(num_colors){
	colors = [];
	for (let i = 0; i < num_colors; i++) {
	colors[i]=random_bg_color();
	}
}

function random_bg_color() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + ", " + y + ", " + z + ")";
    return bgColor;
}
function change_to_winning_color(num){
	for (let i = 0; i < num; i++) {
		squares[i].style.backgroundColor = pickedColor;

	}
	document.querySelector("#guess").style.backgroundColor = pickedColor;
		document.querySelector("#header").style.backgroundColor = pickedColor;


}