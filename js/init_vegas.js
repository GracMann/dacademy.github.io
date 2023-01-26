$.vegas('slideshow', {
  backgrounds:[
  { src:'images/bg/8.jpg', fade:2000 },
  { src:'images/bg/7.jpg', fade:2000 },
  { src:'images/bg/6.jpg', fade:2000 },

  ]
});
$('#vegas-next').click(function(){$.vegas('next');return false;});$('#vegas-prev').click(function(){$.vegas('previous');return false;});