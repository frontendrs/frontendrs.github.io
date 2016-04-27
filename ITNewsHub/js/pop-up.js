$(document).ready(function(){

$( document ).on( 'click', '.main .open-pop-up',  function(event){
 event.preventDefault();
 event.stopPropagation();

 var newArticle = $(this).parent().clone().addClass('pop-up');
 $('.pop-up-blue').fadeIn().append(newArticle);
 // $('footer').hide();
}); 


$(document).on('click', '.close-pop-up', function(event){
 event.preventDefault();
 var _this = this;
 $('.pop-up-blue').fadeOut(600, function(){
   $(_this).parent().parent().remove();
 })
});

});