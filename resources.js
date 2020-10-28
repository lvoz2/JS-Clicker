function gainResource() {
	if (resourceVisible == 'coal') {
		coal++;
		screenUpdate()
	}
	if (resourceVisible == 'stone') {
		stone++;
		screenUpdate()
	}
	if (resourceVisible == 'iron') {
		iron++;
		screenUpdate()
	}
	if (resourceVisible == 'copper') {
		copper++;
		screenUpdate()
	}
	if (resourceVisible == 'rubber') {
		rubber++;
		screenUpdate()
	}
}
function sellResource() {
	if (resourceVisible == 'coal') {
		coalvalue = coal * 1;
		coins = coins + coalvalue;
		coal = 0;
		screenUpdate()
	}
	if (resourceVisible == 'stone') {
		stonevalue = stone * 1;
		coins = coins + stonevalue;
		stone = 0;
		screenUpdate()
	}
	if (resourceVisible == 'iron') {
		ironvalue = iron * 4;
		coins = coins + ironvalue;
		iron = iron - iron;
		screenUpdate()
	}
	if (resourceVisible == 'copper') {
		coppervalue = copper * 10;
		coins = coins + coppervalue;
		copper = copper - copper;
		screenUpdate()
	}
	if (resourceVisible == 'rubber') {
		rubbervalue = rubber * 4;
		coins = coins + rubbervalue;
		rubber = rubber - rubber;
		screenUpdate()
	}
}
$(document).ready(function(){
	variable()
})
function reset() {
	localStorage.clear()
	divmakecoal.innerHTML = '<button class="button" onclick="coalOre()">Gain 1 Coal Ore</button>';
	pcopper.innerHTML = "";
	prubber.innerHTML = "";
	divmakeiron.innerHTML = "";
	pcoins.innerHTML = "Coins: 0";
	pcoal.innerHTML = "Coal: 0";
	divmakecopper.innerHTML = "";
	divsellcopper.innerHTML = "";
	divbuyiron.innerHTML = "";
	divbuycopper.innerHTML = "";
	divbuyrubber.innerHTML = "";
	divmakerubber.innerHTML = "";
	divsellrubber.innerHTML = "";
	divselliron.innerHTML = "";
	diviron.innerHTML = "";
	divsellcoal.innerHTML = "";
	alternate()
}
function gameStart() {
	console.log("Started");
	savefile = localStorage.getItem("save");
	divload.innerHTML = "";
	document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
	document.getElementById("container").style.display = "block";
	divnav.innerHTML = '<ul><li><a class="active" href="/JS-Clicker/index.html">Resources</a></li><li><a href="/JS-Clicker/research.html">Research</a></li><li><a href="/JS-Clicker/space.html">Space</a></li><li style="float:right"><a href="/JS-Clicker/achievements.html">Achievements</a></li><li style="float:right"><a href="/JS-Clicker/settings.html">Settings</a></li><li style="float:right"><a href="https://discord.gg/4zvyXpS">Join the Discord!</a></li></ul>';
	savefile = atob(savefile);
	if (savefile != "2") {
		alternate()
	}
	if (savefile == "2") {
		find()
	}
}
function find() {
	readyironfile = localStorage.getItem('readyiron');
	readycopperfile = localStorage.getItem('readycopper');
	readyrubberfile = localStorage.getItem('readyrubber');
	coinfile = localStorage.getItem('coins');
	coalfile = localStorage.getItem('coal');
	ironfile = localStorage.getItem('iron');
	copperfile = localStorage.getItem('copper');
	rubberfile = localStorage.getItem('rubber');
	gencopperbuttonfile = localStorage.getItem('gencopperbutton');
	genrubberbuttonfile = localStorage.getItem('genrubberbutton');
	genironbuttonfile = localStorage.getItem('genironbutton');
	makeironbuttonclickedsuccessfile = localStorage.getItem('makeironbuttonclickedsuccess');
	makecopperbuttonclickedsuccessfile = localStorage.getItem('makecopperbuttonclickedsuccess');
	makerubberbuttonclickedsuccessfile = localStorage.getItem('makerubberbuttonclickedsuccess');
	coinfile = atob(coinfile);
	coalfile = atob(coalfile);
	ironfile = atob(ironfile);
	copperfile = atob(copperfile);
	rubberfile = atob(rubberfile);
	genironbutton = atob(genironbuttonfile);
	gencopperbutton = atob(gencopperbuttonfile);
	genrubberbutton = atob(genrubberbuttonfile);
	makerubberbuttonclickedsuccess = atob(makerubberbuttonclickedsuccessfile);
	makeironbuttonclickedsuccess = atob(makeironbuttonclickedsuccessfile);
	makecopperbuttonclickedsuccess = atob(makecopperbuttonclickedsuccessfile);
	readyiron = atob(readyironfile);
	readycopper = atob(readycopperfile);
	readyrubber = atob(readyrubberfile);
	genironbutton = (genironbutton == "true");
	gencopperbutton = (gencopperbutton == "true");
	genrubberbutton = (genrubberbutton == "true");
	readyiron = (readyiron == "true");
	readycopper = (readycopper == "true");
	readyrubber = (readyrubber == "true");
	makerubberbuttonclickedsuccess = (makerubberbuttonclickedsuccess == "true");
	makeironbuttonclickedsuccess = (makeironbuttonclickedsuccess == "true");
	makecopperbuttonclickedsuccess = (makecopperbuttonclickedsuccess == "true");
	coins = parseInt(coinfile);
	coal = parseInt(coalfile);
	iron = parseInt(ironfile);
	copper = parseInt(copperfile);
	rubber = parseInt(rubberfile);
	sellironbutton = false;
	sellcoalbutton = false;
	sellcopperbutton = false;
	sellrubberbutton = false;
	genrubberbutton1 = false;
	gencopperbutton1 = false;
	genironbutton1 = false;
	makeironbutton = false;
	makecoalbutton = false;
	makecopperbutton = false;
	makerubberbutton = false;
	load()
}
function alternate() {
	coal = 0;
	coins = 0;
	iron = 0;
	copper = 0;
	rubber = 0;
	genrubberbutton = false;
	gencopperbutton = false;
	genironbutton = false;
	sellironbutton = false;
	sellcoalbutton = false;
	makerubberbutton = false;
	makeironbutton = false;
	sellcopperbutton = false;
	genrubberbutton1 = false;
	gencopperbutton1 = false;
	readyiron = false;
	makecoalbutton = false;
	readycopper = false;
	readyrubber = false;
	makecopperbutton = false;
	makeironbuttonclickedsuccess = false;
	makecopperbuttonclickedsuccess = false;
	makerubberbuttonclickedsuccess = false;
	genironbutton1 = false;
	load()
}
function coalAuto() {
	coalSpeed = coalgatherers / 100;
	decimalPointCoalSpeed = coalSpeed.indexOf(".");
	decimalCoalSpeed = slice(decimalPointCoalSpeed + 1);
	decimalCoalSpeed2 = decimalCoalSpeed + decimalCoalSpeed1;
	decimalPointCoalSpeed0 = decimalCoalSpeed2.indexOf(".");
	decimalCoalSpeed0 = slice(0, decimalPointCoalSpeed0);
	decimalCoalSpeed1 = decimalCoalSpeed;
	wholeCoalSpeed = slice(0, decimalPointCoalSpeed) + decimalCoalSpeed0;
	if (coalgatherers != 0) {
		coal = coal + wholeCoalSpeed;
	}
	pcoal.innerHTML = coal;
	setTimeout(coalAuto, 10);
}
function load() {
	screenUpdate()
	coalAuto()
	closeCoins()
	update()
}
function update() {
	if (coins > 39) {
		readyiron = true;
	}
	if (coins > 999) {
		readyrubber = true;
	}
	if (coins > 199) {
		readycopper = true;
	}
	if (genironbutton == true) {
		piron.innerHTML = iron;
	}
	if (gencopperbutton == true) {
		pcopper.innerHTML = copper;
	}
	if (genrubberbutton == true) {
		prubber.innerHTML = rubber;
	}
	if (readyiron == true) {
		if (makeironbutton == false) {
			if (makeironbuttonclickedsuccess == false) {
				makeironbutton = true;
				divbuyiron.innerHTML = '<button onclick="boughtIronProduction()">Unlock Iron Production: 200 Coins</button>';
			}
		}
	}
	if (readyrubber == true) {
		if (makerubberbutton == false) {
			if (makerubberbuttonclickedsuccess == false) {
				makerubberbutton = true;
				btn8 = document.createElement("BUTTON");
				btn8.innerHTML = "Unlock Rubber Production: 3000 Coins";
				divbuyrubber.appendChild(btn8);
				bt8 = divbuyrubber.getElementsByTagName("BUTTON")[0];
				onclick8 = document.createAttribute("onclick");
				onclick8.value = "boughtRubberProduction()";
				bt8.setAttributeNode(onclick8);
			}
		}
	}
	if (readycopper == true) {
		if (makecopperbutton == false) {
			if (makecopperbuttonclickedsuccess == false) {
				makecopperbutton = true;
				btn7 = document.createElement("BUTTON");
				btn7.innerHTML = "Unlock Copper Production: 1000 Coins";
				divbuycopper.appendChild(btn7);
				bt7 = divbuycopper.getElementsByTagName("BUTTON")[0];
				onclick7 = document.createAttribute("onclick");
				onclick7.value = "boughtCopperProduction()";
				bt7.setAttributeNode(onclick7);
			}
		}
	}
	if (makeironbuttonclickedsuccess == true) {
		triron.style.display = "table-row";
	}
	if (makecopperbuttonclickedsuccess == true) {
		trcopper.style.display = "table-row";
	}
	if (makerubberbuttonclickedsuccess == true) {
		trrubber.style.display = "table-row";
	}
	ironvalue = iron * 4;
	coppervalue = copper * 10;
	coalvalue = coal * 1;
	savetofile()
}
function screenUpdate() {
	pstone.innerHTML = stone;
	pcoins.innerHTML = coins;
	pcoal.innerHTML = coal;
	if (resourceVisible == 'stone') {
		resourcetype.innerHTML = 'Stone';
	}
	if (resourceVisible == 'coal') {
		resourcetype.innerHTML = 'Coal';
	}
	if (resourceVisible == 'iron') {
		resourcetype.innerHTML = 'Iron';
	}
	if (resourceVisible == 'rubber') {
		resourcetype.innerHTML = 'Rubber';
	}
	if (resourceVisible == 'copper') {
		resourcetype.innerHTML = 'Copper';
	}
	update()
}
function openCoins() {
	document.getElementById("coinstab").style.display = "block";
	document.getElementById("resourcestab").style.display = "none";
}
function closeCoins() {
	document.getElementById("coinstab").style.display = "none";
	document.getElementById("resourcestab").style.display = "block";
}
function openCoal() {
	resourceVisible = 'coal';
	closeCoins()
	screenUpdate()
}
function openStone() {
	resourceVisible = 'stone';
	closeCoins()
	screenUpdate()
}
function openIron() {
	resourceVisible = 'iron';
	closeCoins()
	screenUpdate()
}
function openCopper() {
	resourceVisible = 'copper';
	closeCoins()
	screenUpdate()
}
function openRubber() {
	resourceVisible = 'rubber';
	closeCoins()
	screenUpdate()
}
function boughtIronProduction() {
	if ( coins < 200) {
		alert("You don't have enough coins!")
	}
	if (coins > 199) {
		genironbutton = true;
		makeironbuttonclickedsuccess = true;
		divbuyiron.removeChild(divbuyiron.childNodes[0]);
		coins = coins - 200;
		screenUpdate()
	}
}
function boughtCopperProduction() {
	if (coins < 1000) {
		alert("You don't have enough coins!")
	}
	if (coins > 999) {
		gencopperbutton = true;
		makecopperbuttonclickedsuccess = true;
		divbuycopper.removeChild(divbuycopper.childNodes[0]);
		coins = coins - 1000;
		screenUpdate()
	}
}
function boughtRubberProduction() {
	if (coins < 3000) {
		alert("You don't have enough coins!")
	}
	if (coins > 2999) {
		genrubberbutton = true;
		makerubberbuttonclickedsuccess = true;
		divbuyrubber.removeChild(divbuyrubber.childNodes[0]);
		coins = coins - 3000;
		screenUpdate()
	}
}
function autoUpdate() {
	if (coalCanAuto == true) {
		coalautospeed = coalminers / 100;
		coal = coal + coalautospeed;
	}
}
function savetoLS(key, value) {
	lssave = btoa(value);
	localStorage.setItem(key, lssave);
}
function savetofile() {
	save = "2";
	savetoLS('coins', coins);
	savetoLS('stone', stone);
	savetoLS('coal', coal);
	savetoLS('iron', iron);
	savetoLS('copper', copper);
	savetoLS('rubber', rubber);
	savetoLS('genrubberbutton', genrubberbutton);
	savetoLS('gencopperbutton', gencopperbutton);
	savetoLS('genironbutton', genironbutton);
	savetoLS('makeironbuttonclickedsuccess', makeironbuttonclickedsuccess);
	savetoLS('makecopperbuttonclickedsuccess', makecopperbuttonclickedsuccess);
	savetoLS('makerubberbuttonclickedsuccess', makerubberbuttonclickedsuccess);
	savetoLS('readyiron', readyiron);
	savetoLS('readycopper', readycopper);
	savetoLS('readyrubber', readyrubber);
	savetoLS('save', save);
	savetoLS('hi', true);
}
