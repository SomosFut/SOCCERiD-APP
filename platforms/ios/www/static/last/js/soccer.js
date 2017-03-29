/*
$(document).ready( function(){

	$('#AddNewL').click( function(){
		$('.newleague').animate({ marginTop: "160px", opacity: '1', });
		$(this).fadeOut();
	});
	
	$('#removeNewL').click( function(){
		$('.newleague').animate({ marginTop: "80px", opacity: '0', });
		$('#AddNewL').fadeIn();
	});
	
	$('#addNewLeague').click( function(){
		$('.newleague').fadeOut();
		$('.addedLeague').fadeIn();
	});
	
	$('#addedLeague').click( function(){
		$('.addedLeague').fadeOut();
		$('#AddNewL').fadeIn();
	});

});



window.onload = function(){
	
	var _ = document.getElementById.bind(document);
	var __ = document.querySelector.bind(document);
	
	_('AddNewL').onclick = function(){
		var s = __('.newleague')[0];
		s.style.marginTop = '160px';
		s.opatity = 1;
		s.style.display = 'none';
		s.classList.add('uno', 'dos'); .remove .toggle
	};
	
};
*/