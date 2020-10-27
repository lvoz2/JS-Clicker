function variable() {
	// Save Variables

	// Load Variables

	window.coinfile;
	window.coalfile;
	window.ironfile;
	window.copperfile;
	window.rubberfile;

	// Resource Variables

	window.resourceVisible = 'stone';

	// Coins

	window.coins = 0;
	window.coinsspeed = 0;
	window.coinsgatherers = 0;

	// Coal

	window.coal = 0;
	window.coalvalue;
	window.coalspeed = 0;
	window.coalgatherers = 0;

	// Stone

	window.stone = 0;
	window.stonevalue;
	window.stonespeed = 0;
	window.stonegatherers = 0;

	// Iron

	window.iron = 0;
	window.ironvalue;
	window.ironspeed = 0;
	window.irongatherers = 0;

	// Copper

	window.copper = 0;
	window.coppervalue;
	window.copperspeed = 0;
	window.coppergatherers = 0;

	// Rubber

	window.rubber = 0;
	window.rubbervalue;
	window.rubberspeed = 0;
	window.rubbergatherers = 0;

	// Button Variables

	window.makecopperbutton;
	window.gencopperbutton;
	window.gencopperbutton1;
	window.makerubberbutton;
	window.genrubberbutton;
	window.genrubberbutton1;
	window.readyiron;
	window.readycopper;
	window.readyrubber;
	window.genironbutton1;
	window.genironbutton;
	window.makeironbutton;
	window.makeironbuttonclickedsuccess;
	window.makecopperbuttonclickedsuccess;
	window.makerubberbuttonclickedsuccess;

	// Element Variables

	window.divbuyiron = document.getElementById("buyiron");
	window.divbuycopper = document.getElementById("buycopper");
	window.divbuyrubber = document.getElementById("buyrubber");
	window.triron = document.getElementById("triron");
	window.trcopper = document.getElementById("trcopper");
	window.trrubber = document.getElementById("trrubber");
	window.pcoins = document.getElementById("coins");
	window.pstone = document.getElementById("stone");
	window.pcoal = document.getElementById("coal");
	window.piron = document.getElementById("iron");
	window.pcopper = document.getElementById("copper");
	window.prubber = document.getElementById("rubber");
	window.divload = document.getElementById("load");
	window.divnav = document.getElementById("nav");
	window.h2resourcetype = document.getElementById("resourcetype");
	window.h3selltype = document.getElementById("selltype");
	window.h3storagetype = document.getElementById("storagetype");
	window.presourcedefine = document.getElementById("resourcedefine");
	window.pselldefine = document.getElementById("selldefine");
	window.pstoragedefine = document.getElementById("storagedefine");
	window.btngainresource = document.getElementById("gainresource");
	window.btnsellresource = document.getElementById("sellresource");
	window.btngainstorage = document.getElementById("gainstorage");
	gameStart()
}