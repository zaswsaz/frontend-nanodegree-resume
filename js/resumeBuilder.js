
var bio = {
	"name" : "Arvid Trubin",
	"role" : "WebMiester",
	"contacts": {
		"mobile" : "804-3478697",
		"email" : "arvidtrubin@gmail.com",
		"github" : "zaswsaz",
		"location" : "Richmond"
	},
	"welcomeMessage" : "Welcome to my page",
	"skills" : [
	"Programming", "Gaming", "More gaming", "Juggling"
	],
	"bioPic" : "images/Claw.jpg"
}
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").append(formattedRole);
var formattedbioPic = HTMLbioPic.replace("%data%", bio.bioPic)
$("#header").append(formattedbioPic);


var formattedwelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedwelcomeMessage);
var formattedcontactArray = [];
for( contact in bio.contacts){
	var formattedContact = HTMLcontactGeneric.replace("%contact%", contact);
	var formattedContact = formattedContact.replace("%data%", bio.contacts[contact]);
	formattedcontactArray.push(formattedContact);
}
$("#header").append(formattedcontactArray);
var formattedskillArray = [];
formattedskillArray.push(HTMLskillsStart);

for (skill in bio.skills){
	var formattedskill = HTMLskills.replace("%data%", bio.skills[skill]);
	formattedskillArray.push(formattedskill);
}
$("#header").append(formattedskillArray);


var education = {
	"schools" : [
		{
	"name" : "Collegiate School",
	"city" : "Richmond, VA"
	},
	{
		"name" : "Rochester Institute of Technology",
		"city" : "Rochester, NY",
		"degree": [""],
		"majors": [""],
		"dates" : 2013,

	}
	]
}

 var work = {
 	"jobs": [
 	{
 		"employer": "Sabra Dipping Company",
 		"title" : "Inventory Coordinator",
 		"dates" : "September 2014 - Present",
 		"description" : "Investigating errors and maintaining Inventory for Raw Materials Warehouse. This is done using the SAP IM system."
 	}
 	]
 }



 var projects = {
 	"projects" : [
 	{
 		"title" : "Project 1",
 		"dates" : "2015",
 		"description" : "Example Project!",
 		"images" : [
 		"images/castle.jpg",
 		"images/castle2.jpg"
 		]
 	},
 	{
 		"title" : "Project 2",
 		"dates" : "2046",
 		"description" : "Example Project! Again. Filler Filler Filler",
 		"images" : [
 		"images/castle.jpg",
 		"images/castle2.jpg"
 		]
 	}
 	]
 }


 for (job in work.jobs) {
 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

 	$(".work-entry:last").append(formattedEmployerTitle);
 	var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedworkDates);
 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description); 	
 	$(".work-entry:last").append(formattedDescription);
 }




 function inName(name) {
 	name = name.trim().split(" ");
 	name[1] = name[1].toUppercase();
 	name[0] = name[0].slice(0,1).toUppercase() + name[0].slice(1).toLowercase();

 	return name[0] +" "+name[1];
 }

 $("#main").append(internationalizeButton);

 function locationizer(work) {
    var a = [];
    for ( job in work.jobs ) {
        a.push(work.jobs[job].location);
    }
    return a;
}

for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
		}
	}
}

$("#mapDiv").append(googleMap);
	
