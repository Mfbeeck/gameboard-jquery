var main = function() {

	// $('.more-btn').on('click',function(){
	// 	// on attaches an event handler function...there are several events that can happen on a page and using on can control a lot...but how do we edit it so that it doesn't show all the menus under more?
	// $('.more-btn').on('click',function(){
	// 	$('.more-btn').next().toggle(); 
	// 	// .next selects the next element in the html after the .more-btn class

	// 	// The code above makes the code below happen only on the specific menu that you click instead of toggling all of them(using THIS)

	// $('.more-btn').on('click',function(){
	// 	$(this).next().toggle(); 
	// 	"this" is saying take only the next element of the element that I SELECT, not all of the next elements
	// 	So these links are now all working, but they are following the default of every link in a website (they jump to the top of the page every time you click them, how do we prevent the default action of a linke?) LOOK BELOW

	$('.more-btn').on('click',function(e){
		e.preventDefault();
		// Above you see that I prevent default
		// "e" is used to symbolize event, but you can put in whatever string you want
		$(this).next().toggle();	
	});

	$('.share').on('click',function(){
		// don't need the prevent default part, because it's a list item, it doesn't have the default property of a link
		$(this).next().toggle();	
	});

	$('.notification').click(function(){
		// We need to add and remove (toggle) a class. SO that when you click, it adds a class to the item, and when you click again it removes that class. Thus when you look at the CSS it has more attributes when it has the specific class 

		$(this).toggleClass('active');
		// don't need to indicate a "." (don't use a . to reference a class unless you are writing in a jQuery $ element). You don't need a "." because jQuery already knows it's looking for a class name. if you put .active it's going to add a class of ".active" not one of "active"
	});

	// Me fooling around
	// $('.more-btn').closest('div').click(function(){

	// 	$(this).toggleClass('test');
	// });

};

$(document).ready(main);