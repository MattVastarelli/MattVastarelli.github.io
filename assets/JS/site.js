
/*
Scene number:
0: home
1: about
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
    scenes.push($("#home"),$("#about"),$("#contact"));
    scenes.splice(num, 1,);

    for(let i = 0, length1 = scenes.length; i < length1; i++){
        scenes[i].hide('fast', function() {

        });
    }
}
//-------------------------------------------------------------------------
$("#aboutLink").click(function() {
    hideScenes(1);
    $( "#projects" ).show('fast', function() {

    });
});

$("#contactLink").click(function() {
    hideScenes(2);
    $("#contact").show("fast", function() {
        // Animation complete
    });
});

$("#homeLink").click(function() {
    hideScenes(0);
    $("#home").show("fast", function() {

    });
});