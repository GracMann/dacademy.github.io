$(window).load(function(){
	
	$('.loader').fadeOut(500,function(){
		$('#main').animate({opacity:'1'},{queue:true,duration:1200,easing:"easeInOutQuad"});
	});
  
});

function initMinima() {
	
	"use strict";
	
// nav  ---------------------------------------	

	$('#nav').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 1550,
		scrollOffset: 30,
		scrollThreshold: 0.7,
		filter: '',
		easing: 'swing',
	});
	
	$('.nav-button').bind('click', function() {$('.link-holder').slideToggle(800);});
	
	$('.link-holder a.scroll-link').click(function(){
		var ww = $(window).width();
		if( ww < 959){
		setTimeout (function (){				
			$('.link-holder').slideUp(500);
		}, 600 );
			
		}	
	});	

	$("a.scroll-to").bind('click', function(event) {
		event.preventDefault();
		$.scrollTo( 
			$(this).attr('href'),950,{easing:'swing',offset: 0,'axis':'y'} );
	});
	
// fitText  ---------------------------------------	
	
	$("#text-rotator").owlCarousel({
		navigation : false,
		pagination:false,
		singleItem : true,
		autoHeight : false,
		mouseDrag:	false,	
		touchDrag:false,
		autoPlay:1500,
		transitionStyle : "goDown"		
     });
	 
	$("#team-carusel").owlCarousel({
		navigation:true,
		slideSpeed : 500,
		pagination : false,
		items : 3, 	
     });
	 
	$('#testimonials-slider').owlCarousel({
		navigation : true,
		pagination:true, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle : "fade"
	});
	
	$('#single-media').owlCarousel({
		navigation : true,
		pagination:false, 
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
	});	
	
	$("#client-carusel").owlCarousel({		   
		navigation : true,
		pagination:false,  
		slideSpeed : 300,
		paginationSpeed : 400,
		items : 4,
 		  
	});	
	
	$("#blog-carousel").owlCarousel({
		navigation : false,
		slideSpeed : 500,
		pagination : true,
		items : 3,
		itemsDesktopSmall : [1200,2],
      	itemsTablet: [740,2],
      	itemsMobile : [520,1] 		
     });	
	 
// fitText  ---------------------------------------
 
 $('h1.tlt').fitText(1.8,{minFontSize:'20px',maxFontSize:'52px'});
 
  
// MagnificPopup  ----------------------------------------	

	$('.popup-with-move-anim').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll' ,
		fixedContentPos: true,
		fixedBgPos: true,
		closeBtnInside: false,	
		midClick: true,
		removalDelay: 600,
		mainClass: 'my-mfp-slide-bottom', 
			gallery: {
			enabled: true,
			navigateByImgClick:false, 
		},       
		callbacks: {
			ajaxContentAdded: function() {
				$("#project-slider").owlCarousel({
					navigation :true,
					pagination:false, 
					slideSpeed : 300,
					paginationSpeed : 400,
					singleItem:true,			
				 });
 
			}
		}
	});

// counter ------------------

	function number(num, content, target, duration) {
		if (duration) {
			var count    = 0;
			var speed    = parseInt(duration / num);
			var interval = setInterval(function(){
				if(count - 1 < num) {
					target.html(count);
				}
				else {
					target.html(content);
					clearInterval(interval);
				}
				count++;
			}, speed);
		} 
		else {
			target.html(content);
		}
	}
    function stats(duration) {
		$('.stats .num').each(function() {
			var container = $(this);
			var num = container.attr('data-num');
			var content  = container.attr('data-content');
			number(num, content, container, duration);
        });
	}

// scroll animation ------------------ 

	$('.animaper').appear();	
	
	$(document.body).on('appear', '#skills div.animaper', function() {
		$(this).each(function(){ 			
		setTimeout (function (){
			$('.chart').easyPieChart({
				easing: 'easeOutQuart',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});		
		}, 500 );
		});
	});
	
	var $i = 1;
	$(document.body).on('appear', '.stats', function(e) {
		if ($i === 1) { stats(2600); }
		$i++;
	});
	
	$(document.body).on('appear', '#portfolio div.animaper', function() {
		$(this).each(function(){ 			
			setTimeout (function (){
			$('.box').removeClass('box-anim');
		},800 );

		});
	});	
		
// portfolio filters------------------ 
	
	$('#options a').click(function(event) {
		event.preventDefault();
		$('#options a').removeClass('current');
		$(this).addClass('current');
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
		if(filterVal == 'all') {
			$('.work div.hidden').animate({"opacity":'1'},{queue:false,duration:500,easing:"easeInOutQuad"}).removeClass('hidden');
		} 
		else {
			$('.work div').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).animate({"opacity":'0.2'},{queue:false,duration:500,easing:"easeInOutQuad"}).addClass('hidden');
				} else {
					$(this).animate({"opacity":'1'},{queue:false,duration:500,easing:"easeInOutQuad"}).removeClass('hidden');
				}
			});
		}
		return false;
    });	

	$('#options').scrollToFixed( {
		marginTop: 70,
		limit: function() {
			var limit = $('.limit').offset().top - $('#options').outerHeight(true) - 10;
			return limit;
    	},
	});

// show map------------------ 

	$('.show-map').bind('click', function() {
		if($('.mapbox').hasClass('mapvis')){
			$('.mapbox').animate({height:'350px'},{queue:false,duration:500,easing:"easeInOutQuad"})
				setTimeout (function (){	
					$('html').scrollTo('.mapbox',1000,{easing:'swing',offset: 0,'axis':'y'});	
				}, 800 );
				$('.mapbox').removeClass('mapvis');
		}
		else{
			$('.mapbox').animate({height:'0'},{queue:false,duration:500,easing:"easeInOutQuad"});
			$('.mapbox').addClass('mapvis');
		}	
		var text = $('.show-map').find('span').text();
		$('.show-map').find('span').text(
		text == "Locate us on map" ? "Close map" : "Locate us on map");
	});
	
// Subscribe   ----------------------------------------

	$('.subscriptionForm').submit(function(){		
		var email = $('#subscriptionForm').val();
		$.ajax({
			url:'php/subscription.php',
			type :'POST',
			dataType:'json',
			data: {'email': email},success: function(data){
				if(data.error){
					$('#error').fadeIn()
				}
				else{
					$('#success').fadeIn();
					$("#error").hide();}
				}
			});
		return false
	});
	
	$('#subscriptionForm').focus(function(){
		$('#error').fadeOut();
		$('#success').fadeOut();	
	});
	
	$('#subscriptionForm').keydown(function(){	
		$('#error').fadeOut();
		$('#success').fadeOut();		
	});
	
	$(".fadelink").click( function(){
		                            
		var href = $(this).attr('href');
		
		$('body').animate({"opacity":'0'},{queue:false,duration:1500,easing:"easeInOutQuad"});
		
		setTimeout(function(){
			window.location.href = href;
		}, 2000 );
		
		return false;           
	});	
				
};

$(document).ready(function(){	
	initMinima();	
});	
	$(window).resize(function(){
		var ww4 = $(window).width();
		if( ww4 < 959){
			$('.link-holder').css('display','none')		
		}
		else if (ww4 > 959){
			$('.link-holder').css('display','block')			
		}	
	});
//  definition of mobile browser------------------

	var isMobile = { 
       Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
		
    };
	
// if not mobile ------------------  
	
	trueMobile = isMobile.any();
	
	
	if (trueMobile == null){
		
//  Parallax------------------
		
		$('.all-parallax-1').parallax("100%", 0.6);	
		$('.all-parallax-2').parallax("100%", 0.3);	
		$('.about-img-bg').parallax("50%", 0.2);	
		$('.testimonials-parallax').parallax("100%", 0.3);		
		$('.blog-post-parallax').parallax("50%", 0.1);

//  Hover------------------
		
		$('.team-img').hover(function(){
			var cursl = $(this);
			var th = $(this).find('div.overlay');
			var $tElems = $(this).find('div.team-social a');
			var ct = $(this).find('div.team-social a').length;
			var al = {queue:true,duration:800,easing:"easeInOutQuad"};
			if ($(this).hasClass("notvisible") ) {
				
				th.stop(true,true).animate({'opacity':'0.5'},al);
				cursl.removeClass('notvisible');
				setTimeout( function(){	
					for (var i = 0; i <= ct; i++) {
						var cft = $tElems[i];
						$(cft).stop(true,true).delay(150 * i).animate({'opacity' : '1'},al); 
					}	
				},100);
				
			} else {
				th.stop(true,true).animate({'opacity':'0'},al);
				cursl.addClass('notvisible');
				setTimeout( function(){	
					for (var i = 0; i <= ct; i++) {
						var cft = $tElems[i];
						$(cft).stop(true,true).delay(150 * i).animate({'opacity' : '0'},al); 
					}	
				},100);
			}	
			return false;
		
		});			

		$('.box , .blog-post-img , .post-media').hover(function(){
			var ba = {queue:true,duration:1100,easing:"easeInOutExpo"};
			var ca = {queue:false,duration:500,easing:"swing"};
			var tb = $(this).find('span.overlay')
			var ts = $(this).find('span.box-name')
			if ($(this).hasClass("hidden") ) {

				tb.stop(true,true).animate({'opacity':'0'},ca);
				ts.stop(true,true).animate({'top':'140%'},ba);
				
			} else {
				
				tb.stop(true,true).animate({'opacity':'0.5'},ca);
				ts.stop(true,true).animate({'top':'40%'},ba);
				
			}	
			
			return false;
		
		},function(){
			var tb = $(this).find('span.overlay');
			var ts = $(this).find('span.box-name');
			var ba = {queue:true,duration:1100,easing:"easeInOutExpo"};
			var ca = {queue:false,duration:500,easing:"swing"};
			
			tb.stop(true,true).animate({'opacity':'0'},ca);
			ts .stop(true,true).animate({'top':'140%'},ba);
				
		});	
	}
	
// Contact submit  ----------------------------------------

	$("#submit_btn").click(function(){		
		var user_name=$('input[name=name]').val();
		var user_email=$('input[name=email]').val();
		var user_message=$('textarea[name=message]').val();
		var proceed=true;
			if(user_name==""){
				$('input[name=name]').css('border','1px solid #ccc');
				proceed=false
			}
			if(user_email==""){
				$('input[name=email]').css('border','1px solid #ccc');
				proceed=false
			}
			if(user_message==""){
				$('textarea[name=message]').css('border','1px solid #ccc');
				proceed=false
			}
			if(proceed){
				post_data={'userName':user_name,'userEmail':user_email,'userMessage':user_message};
				$.post('php/contact_me.php',
				post_data,
				function(data){
					$("#result").hide().html('<div class="success">'+data+'</div>').fadeIn(700);
					$('#contact_form input').val('');
					$('#contact_form textarea').val('')}).fail(
					function(err){
						$("#result").hide().html('<div class="error">'+err.statusText+'</div>').fadeIn(700)
				});
			}
	});
	
	$("#contact_form input, #contact_form textarea").keyup(function(){		
			$("#contact_form input, #contact_form textarea").css('border','1px solid #666');
			$("#result").fadeOut(700)			
	});