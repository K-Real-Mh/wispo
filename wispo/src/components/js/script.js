$(document).ready(function() {

	$.each($('.radiobuttons__item'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('active');
		}
	});
	$(document).on('click', '.radiobuttons__item', function(event) {
		$(this).parents('.radiobuttons').find('.radiobuttons__item').removeClass('active');
		$(this).parents('.radiobuttons').find('.radiobuttons__item input').prop('checked',false);
		$(this).toggleClass('active');
		$(this).find('input').prop('checked',true);
		return false;
	});
});

$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
			$('.block__title').not($(this)).removeClass('active');
			$('.block__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});