// JavaScript Document

/*
 naimul hasan shadhin
 mail:naimulshadhin@gmail.com
 skype:shadhin9227
 fb:facebook.com/shadhen.khan1/
*/





var cntrlU = 0 ;

var display = '';
var links = '';
var Home = '<div class="menu_text" style="background:#da3700;"><div class="under_menux"></div><span>Home</span></div>';
var WhoIam = '<div class="menu_text" style="background:#da8300;"><div class="under_menua"></div><span>Who I Am</span></div>';
var WhatIdo = '<div class="menu_text" style="background:#779e39;"><div class="under_menub"></div><span>What I Do</span></div>';
var WhyMe = '<div class="menu_text" style="background:#934650;"><div class="under_menuc"></div><span>Why Me</span></div>';
var ContactMe = '<div class="menu_text" style="background:#38889e;"><div class="under_menud"></div><span>Contact Me</span></div>';


function changeReturn()
{
	$('#menu_r').css('-webkit-animation', 'menu2 1s');
	$('#menu_r').css({animation: 'menu2 1s'});
	setTimeout("$('#menu_r').css('-webkit-animation', 'none')" , 1200);
	setTimeout("$('#menu_r').css({animation: 'none'})" , 1200);
	code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
	setTimeout("document.getElementById('menu_r').innerHTML = code", 600);
	

}

function displayView()
{
	if(display == Home)
	{
		$("#home").css({visibility: 'inherit'});
		$("#wia").css({visibility: 'hidden'});
		$("#wid").css({visibility: 'hidden'});
		$("#wm").css({visibility: 'hidden'});
		$("#cm").css({visibility: 'hidden'});
	}
	
	else if(display == WhoIam)
	{
		$("#home").css({visibility: 'hidden'});
		$("#wia").css({visibility: 'inherit'});
		$("#wid").css({visibility: 'hidden'});
		$("#wm").css({visibility: 'hidden'});
		$("#cm").css({visibility: 'hidden'});

	}
	else if(display == WhatIdo)
	{
		$("#home").css({visibility: 'hidden'});
		$("#wia").css({visibility: 'hidden'});
		$("#wid").css({visibility: 'inherit'});
		$("#wm").css({visibility: 'hidden'});
		$("#cm").css({visibility: 'hidden'});

	}
	else if(display == WhyMe)
	{
		$("#home").css({visibility: 'hidden'});
		$("#wia").css({visibility: 'hidden'});
		$("#wid").css({visibility: 'hidden'});
		$("#wm").css({visibility: 'inherit'});
		$("#cm").css({visibility: 'hidden'});

	}
	else if(display == ContactMe)
	{
		$("#home").css({visibility: 'hidden'});
		$("#wia").css({visibility: 'hidden'});
		$("#wid").css({visibility: 'hidden'});
		$("#wm").css({visibility: 'hidden'});
		$("#cm").css({visibility: 'inherit'});
	}

}


function changeLink(x)
{
	if(x == 'menu_a')
	{
		$('#menu_a').css('-webkit-animation', 'menu2 1s');
		$('#menu_a').css('animation', 'menu2 1s');
		setTimeout("$('#menu_a').css('-webkit-animation', 'none')" , 1200);
		setTimeout("$('#menu_a').css({animation: 'none'})" , 1200);
		setTimeout("document.getElementById('menu_a').innerHTML = links", 500);
	}
	
	else if(x == 'menu_b')
	{
		$('#menu_b').css('-webkit-animation', 'menu2 1s');
		$('#menu_b').css({animation: 'menu2 1s'});
		setTimeout("$('#menu_b').css('-webkit-animation', 'none')" , 1200);
		setTimeout("$('#menu_b').css({animation: 'none'})" , 1200);
		setTimeout("document.getElementById('menu_b').innerHTML = links", 500);
	}
	
	else if(x == 'menu_c')
	{
		$('#menu_c').css('-webkit-animation', 'menu2 1s');
		$('#menu_c').css({animation: 'menu2 1s'});
		setTimeout("$('#menu_c').css('-webkit-animation', 'none')" , 1200);
		setTimeout("$('#menu_c').css({animation: 'none'})" , 1200);
		setTimeout("document.getElementById('menu_c').innerHTML = links", 500);
	}
	
	else if(x == 'menu_d')
	{
		$('#menu_d').css('-webkit-animation', 'menu2 1s');
		$('#menu_d').css({animation: 'menu2 1s'});
		setTimeout("$('#menu_d').css('-webkit-animation', 'none')" , 1200);
		setTimeout("$('#menu_d').css({animation: 'none'})" , 1200);
		setTimeout("document.getElementById('menu_d').innerHTML = links", 500);
	}

	
}

function firstMenuLink()
{
	if(display == Home)
	{
		code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
		document.getElementById('menu_r').innerHTML = code;
		
		document.getElementById('menu_a').innerHTML = WhoIam;
		document.getElementById('menu_b').innerHTML = WhatIdo;
		document.getElementById('menu_c').innerHTML = WhyMe;
		document.getElementById('menu_d').innerHTML = ContactMe;
	}
	else if(display == WhoIam)
	{
		code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
		document.getElementById('menu_r').innerHTML = code;
		
		document.getElementById('menu_a').innerHTML = Home;
		document.getElementById('menu_b').innerHTML = WhatIdo;
		document.getElementById('menu_c').innerHTML = WhyMe;
		document.getElementById('menu_d').innerHTML = ContactMe;
	}
	else if(display == WhatIdo)
	{
		code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
		document.getElementById('menu_r').innerHTML = code;
		
		document.getElementById('menu_a').innerHTML = Home ;
		document.getElementById('menu_b').innerHTML = WhoIam;
		document.getElementById('menu_c').innerHTML = WhyMe;
		document.getElementById('menu_d').innerHTML = ContactMe;
	}
	else if(display ==  WhyMe)
	{
		code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
		document.getElementById('menu_r').innerHTML = code;
		
		document.getElementById('menu_a').innerHTML = Home;
		document.getElementById('menu_b').innerHTML = WhoIam;
		document.getElementById('menu_c').innerHTML = WhatIdo;
		document.getElementById('menu_d').innerHTML = ContactMe;
	}
	else if(display == ContactMe)
	{
		code = '<div class="back"><img src="images/back.png" width="100%"  /><span>back</span></div>\n' + display;
		document.getElementById('menu_r').innerHTML = code;
		
		document.getElementById('menu_a').innerHTML = Home;
		document.getElementById('menu_b').innerHTML = WhoIam;
		document.getElementById('menu_c').innerHTML = WhatIdo;
		document.getElementById('menu_d').innerHTML = WhyMe;
	}
}


function firstDisplay(x)
{
	if(x == '0')
	{
		$("#home").css({visibility: 'inherit'});
		display = Home ;
		setTimeout("changeMenuimage('home')", 300);
		
		
	}
	
	if(x == '1')
	{
		$("#wia").css({visibility: 'inherit'});
		display = WhoIam;
		setTimeout("changeMenuimage('who_i_am')", 300);
	}
	
	if(x == '2')
	{
		$("#wid").css({visibility: 'inherit'});
		display = WhatIdo ;
		setTimeout("changeMenuimage('what_i_do')", 300);
	}
	
	if(x == '3')
	{
		$("#wm").css({visibility: 'inherit'});
		display = WhyMe ;
		setTimeout("changeMenuimage('why_me')", 300);
	}
	
	if(x == '4')
	{
		$("#cm").css({visibility: 'inherit'});
		display = ContactMe ;
		setTimeout("changeMenuimage('contact_me')", 300);
	}
	
	setTimeout('firstMenuLink()',100 );
	
	
}


function viewPageAnimation()
{
	cntrlU++;
	
	setTimeout('displayView()', 1200);
	
	
/*	setTimeout("$('#viewani_container').css('-webkit-transition','all 1s')", 10);
	setTimeout("$('#viewani_container').css({transition: 'all 1s'})", 10);
	*/
	
	$('#viewani_container').css('animation','displaychange 1.8s');
	$('#viewani_container').css('-webkit-animation','displaychange 1.8s');
	
	var top = 0;
	var left = 0;
	var count = 0;
	var code = '';
	var an_delay = 0;
	for(count = 0; count <= 180; count = count + 20 )
	{
		left = 0;
		
		
		for(top = count; top >= 0;top = top - 20)
		{
			if( top <= 80 && left < 84)
			{
				code = code + '<div class="display_ani" style="top:' + top +'%; left:' + left + '%; animation-delay:' + an_delay + 's; -webkit-animation-delay:' + an_delay + 's;"><div class="display_ani_border"></div></div>' + "\n";
			
				
			}
			left = left + 25 ;
			
		}
		an_delay = an_delay + .07;
	}
	
	var text = '';
	
	if(display == Home)
	{
		text = '<span>H</span>ome';
		setTimeout("changeMenuimage('home')", 500);
	}
	else if(display == WhoIam)
	{
		text ='<span>W</span>ho I am';
		setTimeout("changeMenuimage('who_i_am')", 500);
	}
	else if(display == WhatIdo)
	{
		text ='<span>W</span>hat I do';
		setTimeout("changeMenuimage('what_i_do')", 500);
	}
	else if(display == WhyMe)
	{
		text ='<span>W</span>hy Me';
		setTimeout("changeMenuimage('why_me')", 500);
	}
	else if(display == ContactMe)
	{
		text ='<span>C</span>ontact Me';
		setTimeout("changeMenuimage('contact_me')", 500);
	}
	
	code = code + '<div id="dispaly_text">'+ text +'</div>';
	code = code + '<div id="dispaly_text_shadow">'+ text +'</div>';
	document.getElementById('viewani').innerHTML = code;	

/*	setTimeout("$('#viewani_container').css('-webkit-transform', 'rotateY(90deg)')", 1200);
	setTimeout("$('#viewani_container').css({transform: 'rotateY(90deg)'})", 1200);
	setTimeout("$('#viewani_container').css('-webkit-transform', 'rotateY(0deg)')", 2200);
	setTimeout("$('#viewani_container').css('-webkit-transition', 'all 0s')", 2200);
	setTimeout("$('#viewani_container').css({transform: 'rotateY(0deg)',transition: 'transform 0s'})", 2200);*/

	setTimeout("$('#viewani_container').css('animation', 'none')", 1600);
	setTimeout("$('#viewani_container').css('-webkit-animation','none')", 1600);
	setTimeout('cntrlU--;',1600);
	
}



function bganimation()
{
	cntrlU++;
	var top = 0;
	var left = 0;
	var count = 0;
	var code = '';
	var an_delay = 0;
	
	for(count = 0; count <= 180; count = count + 20 )
	{
		left = 0;
		
		
		for(top = count; top >= 0;top = top - 20)
		{
			if( top <= 80 && left < 84)
			{
				code = code + '<div class="bg_ani" style="top:' + top +'%; left:' + left + '%; animation-delay:' + an_delay + 's; -webkit-animation-delay:' + an_delay + 's;"><div class="bg_border"></div></div>' + "\n";
			
				
			}
			left = left + 16.655 ;
			
		}
		an_delay = an_delay + .07;
	}
	document.getElementById('bg_ani_container').innerHTML =  code;
	
	setTimeout("document.getElementById('menu_container').innerHTML = ''", 1000);
	setTimeout("bgMenu()",1600);
	
	setTimeout("cntrlU-- ", 1600);
	
}


function bgMenu()
{
	cntrlU++;
	
	var code = '<div class="bg_menu_bg"></div>\n';
		code = code + '<div onclick="Shadhin(x = 0)" class="bg_menu" id="hm_img" style="top:0; left:66.62%;"><img class="menu_img" src="images/bg_home_cl.jpg" /><div class="bg_menu_text" style="background:#da3700;"><div class="under_menux"></div><span>Home</span></div></div>\n';
		code = code + '<div onclick="Shadhin(x = 1)"  class="bg_menu" id="wim_img" style="top:20%; left:16.655%;"><img class="menu_img" src="images/bg_wim_cl.jpg" /><div class="bg_menu_text" style="background:#da8300;"><div class="under_menua"></div><span>Who I Am</span></div></div>\n';
		code = code + '<div onclick="Shadhin(x = 2)"  class="bg_menu" id="wid_img" style="top:40%; left:49.965%;"><img class="menu_img" src="images/bg_wid_cl.jpg" /><div class="bg_menu_text" style="background:#779e39;"><div class="under_menub"></div><span>What I Do</span></div></div>\n';
		code = code + '<div onclick="Shadhin(x = 3)" class="bg_menu" id="wm_img" style="top:60%; left:0%;"><img class="menu_img" src="images/bg_wm_cl.jpg" /><div class="bg_menu_text" style="background:#934650;"><div class="under_menuc"></div><span>Why Me</span></div></div>\n';
		code = code + '<div onclick="Shadhin(x = 4)"  class="bg_menu" id="cm_img" style="top:80%; left:33.31%;"><img class="menu_img" src="images/bg_cm_cl.jpg" /><div class="bg_menu_text" style="background:#38889e;"><div class="under_menud"></div><span>Contact Me</span></div></div>\n';
		
		document.getElementById('bg_menu_container').innerHTML = code;
	setTimeout("cntrlU-- ", 1000);
}

function bg_menu_hide(){
	cntrlU++;
		$(".bg_menu").css({left: '-20%'});
		$(".bg_menu_text").css({left: '0%'});
		$(".bg_menu_bg").css({left: '-106%'});
		menuShow();
		setTimeout('$("#bg_menu_container").css({visibility: "hidden"})', 600);
		setTimeout("cntrlU--",600);
		
		
	};

function menuShow(){

var code;
	
	code = '<div id="menu_img"><div id="menu_img_1"></div><div id="menu_img_2"></div><div id="menu_img_3"></div><div id="menu_img_4"></div><div id="menu_img_5"></div><div id="menu_img_6"></div></div>';
	
	code = code + '<div id="menu_r" onclick="Return()"></div>\n';
	
	code = code + '<div class="menu">\n';
	
		code = code + '<div id="menu_a" onclick="Shadhin' + "(x = 'menu_a')" + '"></div>\n';

		code = code + '<div id="menu_b" onclick="Shadhin' + "(x = 'menu_b')" + '"></div>\n';

		code = code + '<div id="menu_c" onclick="Shadhin' + "(x = 'menu_c')" + '"></div>\n';

		code = code + '<div id="menu_d" onclick="Shadhin' + "(x = 'menu_d')" + '"></div>\n';
		
		code = code + '</div>\n';
	
	document.getElementById("menu_container").innerHTML = code ;
}


function changeMenuimage(imgName){
	
	ak = '<div id="menu_img_a" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	dui = '<div id="menu_img_b" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	tin = '<div id="menu_img_c" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	char = '<div id="menu_img_d" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	pach = '<div id="menu_img_e" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	choy = '<div id="menu_img_f" style="background-image:url(images/' + imgName + '.jpg)"><div class="menu_img_blink"></div></div>';
	document.getElementById('menu_img_4').innerHTML = char;
	setTimeout('document.getElementById("menu_img_1").innerHTML = ak',400);
	setTimeout('document.getElementById("menu_img_6").innerHTML = choy', 200);
	setTimeout('document.getElementById("menu_img_5").innerHTML = pach',400);
	setTimeout('document.getElementById("menu_img_2").innerHTML = dui',400);
	setTimeout('document.getElementById("menu_img_3").innerHTML = tin',460);

	
} 


function Return(){
	display = '';
	links = '';
	bganimation();
	
	setTimeout('clearViwpage()', 1000);
	$("#bg_menu_container").css({visibility: "inherit"});
}
	
	
function clearViwpage(){
	$("#home").css({visibility: 'hidden'});
	$("#wia").css({visibility: 'hidden'});
	$("#wid").css({visibility: 'hidden'});
	$("#wm").css({visibility: 'hidden'});
	$("#cm").css({visibility: 'hidden'});
}


/*
 naimul hasan shadhin
 mail:naimulshadhin@gmail.com
 skype:shadhin9227
 fb:facebook.com/shadhen.khan1/
*/

