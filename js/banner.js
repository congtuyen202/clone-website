// $(function() {
// 	$('#img_banner img:gt(0)').hide();
// 	setInterval(function(){
//       $('#img_banner :first-child').fadeOut()
//       .next('img').fadeIn() 
//       .end().appendTo('#img_banner');
//   	}, 5000);
// });
$("#left").click(function(){
    $('#anh_slide:first-child').fadeOut().prev('img').fadeIn().end().appendTo('#img_banner');
    $('#anh_slide:first-child').show().appendTo('#img_banner');
});
$("#right").click(function(){
    $('#anh_slide').fadeOut().next('img').fadeIn().end().appendTo('#img_banner');
});