/*
Scene number:
0: home
1: projects
2: contact
*/

/* 
Function to hide the scenes that should not be showing when a new scene is
selected. The scene number passed in is the index of scene that should not be 
hidden. 
*/
//-----------------------------------------------------------------------
function hideScenes(num){
	var scenes = [];
	scenes.push($("#home"),$("#projects"),$("#contact"));
	scenes.splice(num, 1,);
	
	for(let i = 0, length1 = scenes.length; i < length1; i++){
		scenes[i].hide('slow', function() {
			
		});
	}
}
//-------------------------------------------------------------------------
$("#proj").on('click', function(event) {
	hideScenes(1);
	$( "#projects" ).fadeIn('fast', function() {
		
	});
});

$("#cont").on('click', function(event) {
	hideScenes(2);
	$("#contact").fadeIn("fast", function() {
		
	});
});

$("#hom").on('click', function(event) {
	hideScenes(0);
	$("#home").fadeIn("fast", function() {
		
	});
});

