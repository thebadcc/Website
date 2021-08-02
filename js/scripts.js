var map = L.map('map', {
    crs: L.CRS.Simple,
});
var bounds = [[0,0], [500,500]];
var image = L.imageOverlay('https://github.com/thebadcc/thebad.cc/blob/main/images/world_map_v1.5.png?raw=true', bounds).addTo(map);

var greenIcon = L.icon({
    iconUrl: 'https://github.com/thebadcc/thebad.cc/blob/main/images/portalGIF_v1.1.gif?raw=true',
    iconSize:     [50, 50], 
    iconAnchor:   [0, 0], 
    popupAnchor:  [25, 0]
});

L.marker([-655, -240], {icon: greenIcon}).addTo(map).bindPopup('<a target=_blank href = "https://www.cryptovoxels.com/play?coords=W@60E,458S,1.5U">16 Rand Extension</a>');

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
    map.fitBounds(bounds);
    map.setMaxBounds(bounds);
	
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

