$(function() {

	//select the box with id of photo
	//get the value from that box
$("#jimi-hendrix").click(function(){
	var photoString = $("#photo").val();
	// var photo = parseInt(photoString);

	if ( photoString == "yes") {
		alert("Have you ever been experienced?");
		$("#27").attr("src", "http://assets.rollingstone.com/assets/2014/article/jimi-hendrixs-early-recordings-as-a-sideman-to-get-proper-release-20140717/16186/_original/1035x807-20140717-jimihendrix-x1800-1405632282.jpg")
	} else {
		alert('27');
	}
});

$("#janis-joplin").click(function(){
	var portraitString = $("#portrait").val();
	// var portrait = parseInt(portraitString);

	if ( portraitString == "yes") {
		alert('And didnt I give you nearly everything that a woman possibly can?');
		$("#27").attr("src", "http://marieclaire.media.ipcdigital.co.uk/11116/000083cf2/a17a_orh1000w646/Janis-Joplin.jpg")
	} else {
		alert('27');
	}
});

$("#jim-morrison").click(function(){
	var centeredString = $("#centered").val();
	// var centered = parseInt(centeredString);

	if ( centeredString == "yes") {
		alert('Show me the way to the next whisky bar.');
		$("#27").attr("src", "http://www.reshareit.com/wp-content/uploads/jim-morrison-flower-crown.jpg")
	} else {
		alert('27');
	}
});

$("#amy-winehouse").click(function(){
	var amesString = $("#ames").val();
	// var ames = parseInt(amesString);

	if ( amesString == "yes") {
		alert("You made me miss the Slick Rick gig.");
		$("#27").attr("src", "http://assets.rollingstone.com/assets/images/story/amy-winehouses-life-explored-in-new-jewish-museum-exhibit-20130703/20130703-amy-x624-1372856742.jpg")
	} else {
		alert('27');
	}
})

});