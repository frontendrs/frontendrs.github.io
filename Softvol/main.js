
if(getComputedStyle(document.querySelector('.sticky')).position!='sticky'){

	var sticky = document.querySelectorAll('.sticky');



	window.addEventListener('scroll', function() {
		var parent, topPosition, bottomPosition, parentHeight, stickyHeight;

		for(var i=0; i<sticky.length; i++){
			parent = sticky[i].parentElement;
			topPosition = parent.getBoundingClientRect().top;
			bottomPosition = parent.getBoundingClientRect().bottom;

			if (topPosition < 0 && bottomPosition  > 50 ) {
				sticky[i].style.position = 'absolute';
				sticky[i].style.top = -topPosition+'px';
			} else if(topPosition < 0 && bottomPosition<50 && bottomPosition>0){
				parentHeight = +getComputedStyle(parent).height.slice(0,-2);
				stickyHeight = +getComputedStyle(sticky[i]).height.slice(0,-2);
				sticky[i].style.position = 'absolute';
				sticky[i].style.top = parentHeight-stickyHeight+'px';
			}
			else {
				sticky[i].style.position = 'static';
				sticky[i].style.top = '';
			}
		}
	});
}