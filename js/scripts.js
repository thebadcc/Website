(function($){
 $(function(){
  $('nav ul li > a:not(:only-child)').click(function(e) {
    $(this).siblings('.nav-dropdown').toggle();
    $('.nav-dropdown').not($(this).siblings()).hide();
    e.stopPropagation();
  });
 });
 $('html').click(function() {
  $('.nav-dropdown').hide();
 });
 document.querySelector('#nav-toggle').addEventListener('click', function() {
  this.classList.toggle('active');
 });
 $('#nav-toggle').click(function() {
  $('nav ul').toggle();
 });
})(jQuery);


$(".tab_content").hide();
    $(".tab_content:first").show();
    $("ul.nav-list li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.nav-list li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });


    $("ul.footer-links li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.footer-links li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });

    $("ul.back-links li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.back-links li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });


	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.nav-list li").removeClass("active");
	  $("ul.nav-list li[rel^='"+d_activeTab+"']").addClass("active");
    });

	$('ul.nav-list li').last().addClass("tab_last");



    $("ul.back-dropdown li").click(function() {
		
      $(".tab_content").hide();
      var activeTab = $(this).attr("rel"); 
      $("#"+activeTab).fadeIn();		
		
      $("ul.back-dropdown li").removeClass("active");
      $(this).addClass("active");

	  $(".tab_drawer_heading").removeClass("d_active");
	  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
	  
    });
	$(".tab_drawer_heading").click(function() {
      
      $(".tab_content").hide();
      var d_activeTab = $(this).attr("rel"); 
      $("#"+d_activeTab).fadeIn();
	  
	  $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
	  
	  $("ul.back-dropdown li").removeClass("active");
	  $("ul.back-dropdown li[rel^='"+d_activeTab+"']").addClass("active");
    });

	$('ul.back-dropdown li').last().addClass("tab_last");





(function($) {

  'use strict';

  $(document).on('show.bs.tab', '.nav-tabs-responsive [data-toggle="tab"]', function(e) {
    var $target = $(e.target);
    var $tabs = $target.closest('.nav-tabs-responsive');
    var $current = $target.closest('li');
    var $parent = $current.closest('li.dropdown');
		$current = $parent.length > 0 ? $parent : $current;
    var $next = $current.next();
    var $prev = $current.prev();
    var updateDropdownMenu = function($el, position){
      $el
      	.find('.dropdown-menu')
        .removeClass('pull-xs-left pull-xs-center pull-xs-right')
      	.addClass( 'pull-xs-' + position );
    };

    $tabs.find('>li').removeClass('next prev');
    $prev.addClass('prev');
    $next.addClass('next');
    
    updateDropdownMenu( $prev, 'left' );
    updateDropdownMenu( $current, 'center' );
    updateDropdownMenu( $next, 'right' );
  });

})(jQuery);


$(document).ready(function(){

if (typeof window.ethereum !== 'undefined') {
  const connectAccount = document.querySelector('.connectAccount');
  const metaMaskInstall = document.querySelector('.metaMaskInstall');
  metaMaskInstall.style = "display: none !important";
    connectAccount.style = "display: block !important";

	
}

	
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})

const ethereumButton = document.querySelector('.metaMask');
const showAccount = document.querySelector('.showAccount');
const connectAccount = document.querySelector('.connectAccount');
const nav1 = document.getElementById("nav1");
const nav3 = document.getElementById("nav3");
const nav4 = document.getElementById("nav4");
const motto = document.querySelector('.motto');
const motto2 = document.querySelector('.motto2');
const login = document.querySelector('.login');
const page = document.querySelector('.page');
const row = document.querySelector('.row');
const legalLinks = document.querySelector('.legal-links');
const metaMaskRequired = document.querySelector('.metaMaskRequired');
const metaMask = document.querySelector('.metaMask');

ethereumButton.addEventListener('click', () => {
  getAccount();

});

async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    var logIn = String(accounts);
    var front = logIn.substring(0, 6);
    var middle = "...";
    var back = logIn.substring(38, 42);
    var fullLogIn = front.concat(middle, back)
    metaMask.style = "width: auto !important";
    showAccount.innerHTML = fullLogIn;
    connectAccount.innerHTML = "";
    $('.login').fadeOut();
    $('.page').fadeIn();
	$('#nav1').fadeIn();
	$('#nav2').fadeIn();
	$('#nav3').fadeIn();
    row.style = "display: none !important";
    legalLinks.style = "display: block !important";
    metaMaskRequired.style = "display: none !important";
	
}


$(document).ready(function() {
  
  var counter = 0;
  var c = 0;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");
    counter++;
    c++;
      
    if(counter == 101) {
        clearInterval(i);
        $('.loading-page').fadeOut();
	$('.navigation').show();
	$('.pages').show();
	$('.site-footer').show();
	    
    }
  }, 15);
});


$('#search-bar').keyup(function(){
    $('.badCards').hide();
    var txt = $('#search-bar').val();
    $('.badCards').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).show();
       }
    });
});


//ETH_Call Functions

const inputOne = document.getElementById('inputOne');
const inputTwo = document.getElementById('inputTwo');
const response = document.getElementById('responseCall');
const contractABI = [{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"burner","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];
const contractAddress = "0x0f5d2fb29fb7d3cfee444a200298f468908cc942";
const provider = ethers.getDefaultProvider();
const erc20 = new ethers.Contract(contractAddress, contractABI, provider);

const abi = [
    "function transfer(address to, uint value)"
];
const iface = new ethers.utils.Interface(abi)
const sendEthButton = document.querySelector('.executeTx');

sendEthButton.addEventListener('click', () => {
  const sb = document.querySelector('#dataFunction');
  console.log(sb.selectedIndex);
  if (sb.selectedIndex == 0) {

  } else if (sb.selectedIndex == 1) {
	 const balanceOf = erc20.balanceOf(inputOne.value);
	 console.log(balanceOf);
	 const printBalanceOf = async () => {
		const a = await balanceOf;
		
		 const b = ethers.utils.formatUnits(a, 18)
		 response.innerHTML = b;
		 console.log(b);
	};
	printBalanceOf();  
  } else if (sb.selectedIndex == 2) {
	const data = iface.encodeFunctionData("mineToken");
	  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
          value: '0x00',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
	  data: data,  
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error);  
  } else if (sb.selectedIndex == 3) {
	  const tokenNumber = ethers.utils.parseUnits(inputTwo.value, 18);
	  console.log(tokenNumber);
	const data2 = iface.encodeFunctionData("transfer", [inputOne.value, tokenNumber]);
	  console.log(data2);
	ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x0f5d2fb29fb7d3cfee444a200298f468908cc942',
          value: '0x00',
          gasPrice: '0x09184e72a000',
          gas: '0x2710',
	  data: data2,  
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch((error) => console.error); 
  }
});


function changeFunc() {
var eID = document.getElementById("dataFunction");
var funcVal = eID.options[eID.selectedIndex].value;
if (funcVal == 1) {
document.getElementById('inputOne').style.display = "initial";
document.getElementById('inputOne').placeholder='{null}';
document.getElementById('inputTwo').style.display = "initial";
document.getElementById('inputTwo').placeholder='{null}';	
} else if (funcVal == 2) {
document.getElementById('inputOne').style.display = "initial";
document.getElementById('inputOne').placeholder='Enter Address';
document.getElementById('inputTwo').style.display = "none";
} else if (funcVal == 3) {
document.getElementById('inputOne').style.display = "none";
document.getElementById('inputTwo').style.display = "none";
} else if (funcVal == 4) {
document.getElementById('inputOne').style.display = "initial";
document.getElementById('inputOne').placeholder='Enter Address';
document.getElementById('inputTwo').style.display = "initial";
document.getElementById('inputTwo').placeholder='Enter Amount';
}
}

/*  FAQ  */

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

var container, sqr;
var terrain = [25, 20]; 
var coords = [];

var type = [
    ['deepsea', '#000000'],  
    ['sea', '#3e3e3e'],      
    ['coast', '#cdcdcd'],    
    ['land', '#909090'],     
    ['forest', '#292929'],   
    ['mountain', '#ffffff'], 
    ['hole', '#3A2612']      
]; 

var pattern = [
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,2,2,1,1,1,2,2,2,1,1,1,1,1,1,0,0,0,0,0,
    0,0,0,1,1,2,2,2,2,1,2,2,3,2,2,2,1,1,1,1,1,0,0,0,0,
    0,0,0,0,1,2,2,6,2,2,2,3,3,3,3,2,2,2,1,1,1,1,0,0,0,
    0,0,1,1,1,2,2,3,3,2,2,3,3,3,3,2,2,2,2,2,1,1,0,0,0,
    0,0,1,1,2,2,3,3,3,3,3,3,3,3,3,3,2,2,6,2,2,1,1,0,0,
    0,1,1,2,2,3,3,3,3,3,4,4,4,3,3,3,3,2,2,2,2,1,1,0,0,
    1,1,2,2,2,3,3,4,4,4,5,4,3,3,4,4,3,3,3,3,2,1,1,0,0,
    1,2,2,2,3,3,4,5,5,4,4,4,4,4,4,5,4,3,3,3,2,2,1,1,0,
    1,6,2,3,3,4,4,5,5,5,4,4,4,5,4,4,4,4,3,3,3,2,1,1,0,
    1,2,2,2,3,3,4,5,5,5,4,4,5,5,5,5,4,3,3,3,3,2,2,1,1,
    1,1,2,2,3,3,4,4,5,4,4,4,5,5,5,5,5,4,3,3,3,3,2,1,1,
    0,1,1,2,3,3,3,4,4,3,4,4,5,5,5,5,5,4,4,3,3,3,2,1,1,
    0,1,1,2,2,3,3,3,3,3,3,4,4,5,5,5,5,4,3,3,3,2,2,1,0,
    0,1,1,1,2,2,4,4,3,3,4,5,4,5,5,4,4,3,3,3,2,2,1,1,0,
    0,0,1,1,1,2,3,4,4,3,4,4,5,4,5,4,3,3,3,2,2,1,1,0,0,
    0,0,0,1,2,2,6,3,3,3,3,4,4,4,4,3,3,3,2,2,1,1,1,0,0,
    0,0,0,1,1,2,2,3,3,3,3,3,4,4,3,3,6,2,2,1,1,0,0,0,0,
    0,0,0,0,1,1,2,2,3,2,3,3,3,3,3,2,2,2,1,1,1,0,0,0,0,
    0,0,0,0,1,1,1,2,2,2,2,2,3,3,3,2,2,1,1,1,0,0,0,0,0,
    0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,2,1,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,1,1,1,1,2,1,2,2,6,1,1,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0
];

var dot;
var dotCoords = [13, 7] 
var dotSpeed = 200; 
var dotTeleportSpeed = 500; 
var activeTransition = false;

var dotColor = [
  'linear-gradient(45deg, rgba(46,244,205,0) 30%,rgba(198,171,203,0) 60%,rgba(246,148,203,1) 100%), radial-gradient(ellipse at center, rgba(76,110,207,0) 27%,rgba(76,110,207,0.33) 51%,rgba(89,88,179,0.58) 69%,rgba(89,78,183,1) 100%), linear-gradient(80deg, rgba(246,148,203,0) 0%,rgba(70,232,205,.1) 70%,rgba(46,244,205,1) 100%), linear-gradient(45deg, rgba(46,244,205,1) 0%,rgba(76,110,207,0.2) 50%,rgba(76,110,207,0) 60%)',
  '#FFFFFF'
]; 
function setCoords(c, x, y, t){
  $(c).attr("data-x", x);
  $(c).attr("data-y", y);
  $(c).attr("title", t);
}; 

function exception(x, y, type){
  return $('div[class^="sqr"][data-x="'+x+'"][data-y="'+y+'"]').hasClass(type);
}; 


function circumstance(){

  if ( exception(dotCoords[0], dotCoords[1], "sea") || exception(dotCoords[0], dotCoords[1], "deepsea") ){
    $(".dot").css({
      'background': dotColor[1]
    });
    $(".dot").addClass("boat");
  }
  else {
    $(".dot").css({
      'background': dotColor[0]
    });
    $(".dot").removeClass("boat");
  };

  if ( exception(dotCoords[0], dotCoords[1], "hole") ){
    teleport();
  };
};


function teleport(){
 
  var randNum = Math.floor(Math.random()*$('.hole').length);
  dotCoords[0] = $(".hole").eq(randNum).attr("data-x");
  dotCoords[1] = $(".hole").eq(randNum).attr("data-y");
  setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');
  $(".dot").addClass("teleport-out");
  setTimeout(function(){
    $(".dot").stop().animate(
      {
        left: dotCoords[0]*terrain[1],
        top: dotCoords[1]*terrain[1]
      }, 
      0,
      function(){
        $(".dot").removeClass("teleport-out").addClass("teleport-in");
        setTimeout(function(){
          $(".dot").removeClass("teleport-in"); 
        }, dotTeleportSpeed);
      }
    );   
  }, dotTeleportSpeed);

  console.log(dotCoords);
};


$(document).ready(function(){

  $(".map-container").css({
    'box-sizing': 'border-box',
    'position': 'absolute',
    'width': terrain[0]*terrain[1]+'px',
    'height': terrain[0]*terrain[1]+'px',
    'background': type[3][1],
    'overflow': 'hidden',
    'cursor': 'crosshair'
  });


  for (i=0; i<pattern.length; i++) {

    coords[0] = i%terrain[0]; 
    coords[1] = Math.floor(i/terrain[0]); 

    sqr = '<div class="sqr'+i+'"></div>';
    $(".map-container").append(sqr);

    setCoords(".sqr"+i, coords[0], coords[1], type[pattern[i]][0]+' ['+coords+']');
    $(".sqr"+i).addClass(type[pattern[i]][0]);

    $(".sqr"+i).css({
      'box-sizing': 'border-box',
      'position': 'absolute',
      'top': coords[1]*terrain[1]+'px',
      'left': coords[0]*terrain[1]+'px',
      'width': terrain[1]+'px',
      'height': terrain[1]+'px',
      'background': type[pattern[i]][1]
    });
    
    if (
      $(".sqr"+i).hasClass("forest") &&
      pattern[i] != pattern[i-1] &&
      pattern[i] != pattern[i-terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-top-left-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("forest") &&
      pattern[i] != pattern[i+1] &&
      pattern[i] != pattern[i-terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-top-right-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("forest") &&
      pattern[i] != pattern[i+1] &&
      pattern[i] != pattern[i+terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-bottom-right-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("forest") &&
      pattern[i] != pattern[i-1] &&
      pattern[i] != pattern[i+terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-bottom-left-radius': terrain[1]/2
      });
    };

    if (
      $(".sqr"+i).hasClass("mountain") &&
      pattern[i] != pattern[i-1] &&
      pattern[i] != pattern[i-terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-top-left-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("mountain") &&
      pattern[i] != pattern[i+1] &&
      pattern[i] != pattern[i-terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-top-right-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("mountain") &&
      pattern[i] != pattern[i+1] &&
      pattern[i] != pattern[i+terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-bottom-right-radius': terrain[1]/2
      });
    };
    if (
      $(".sqr"+i).hasClass("mountain") &&
      pattern[i] != pattern[i-1] &&
      pattern[i] != pattern[i+terrain[0]]
    ){
      $(".sqr"+i).css({
        'border-bottom-left-radius': terrain[1]/2
      });
    };

  };

  dot = '<div class="dot"></div>';
  $(".map-container").append(dot);
  
  setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');

  $(".dot").css({
    'box-sizing': 'border-box',
    'position': 'absolute',
    'width': terrain[1]+'px',
    'height': terrain[1]+'px',
    'top': dotCoords[1]*terrain[1]+'px',
    'left': dotCoords[0]*terrain[1]+'px',
    'border-radius': '100%',
    'box-shadow': '0px 4px 4px -2px rgba(0, 0, 0, .2)',
    'z-index': '1'
  });

  circumstance();
  
  $(document).keydown(function(e){
    if ( !activeTransition ){
      activeTransition = true;
      switch ( e.which ){

        case 38:
          if ( dotCoords[1] > 0 && !exception(dotCoords[0], parseInt(dotCoords[1])-1, "mountain" ) ){
            dotCoords[1] = parseInt(dotCoords[1])-1;
            setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');
            $(".dot").stop().animate(
              {
                top: dotCoords[1]*terrain[1]
              },
              dotSpeed
            );
          }; 
        break;

        case 39:
          if ( dotCoords[0] < coords[0] && !exception(parseInt(dotCoords[0])+1,dotCoords[1], "mountain" ) ){
            dotCoords[0] = parseInt(dotCoords[0])+1;
            setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');
            $(".dot").stop().animate(
              {
                left: dotCoords[0]*terrain[1]
              },
              dotSpeed
            );
          }; 
        break;

        case 40:
        if ( dotCoords[1] < coords[1] && !exception(dotCoords[0], parseInt(dotCoords[1])+1, "mountain" ) ){

          dotCoords[1] = parseInt(dotCoords[1])+1;
          setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');
 
          $(".dot").stop().animate(
            {
              top: dotCoords[1]*terrain[1]
            },
            dotSpeed
          );
        }; 
        break;

        case 37:
          if ( dotCoords[0] > 0 && !exception(parseInt(dotCoords[0])-1, dotCoords[1], "mountain" ) ){
            dotCoords[0] = parseInt(dotCoords[0])-1;
            setCoords(".dot", dotCoords[0], dotCoords[1], 'dot ['+dotCoords+']');

            $(".dot").stop().animate(
              {
                left: dotCoords[0]*terrain[1]
              },
              dotSpeed
            );
          }; 
        break;

      };
      activeTransition = false;
    };
    circumstance();
    console.log("x:"+dotCoords[0]+" y:"+dotCoords[1]);
  });
}); 
