
 var bio = {
 	"name": "Paul Moldovan",
 	"age": 26,
 	"role": "Web Developer",
 	"contacts": {
 		"mobile" : "310-222-222",
		"email": "pmoldovan@udacity.com",
		"github": "sctribe",
		"twitter": "@sctribe",
		"location": "Portland, OR"
	},
 	"welcomeMessage": "My welcome message is supposed to go here",
 	"skills": ["HTML", "CSS", "JS", "Android Development", "Web Development"],
 	"biopic": "images/fox-main.jpg"

 };

 var work = {
 	"jobs" : [
 		{
 			"employer" : "Stantec Consulting",
 			"title" : "Consulting Engineer",
 			"location" : "Portland, OR",
 			"dates" : "May 2011 - Present",
 			"description" : "Develop protection and control systems for large scale electrical installations by programming IEDs."
 		},
 		{
 			"employer" : "PacifiCorp",
 			"title" : "Engineering Intern",
 			"location" : "Portland, OR",
 			"dates" : "May 2010 - August 2010",
 			"description" : "Analyzed PacifiCorp's Portland distrbution system and forecast load growth 5 years in to the future in order to develop a smart switching scheme to reduce customer outage times."
 		},
 		{
 			"employer" : "University of Southern California Pertusati Bookstore",
 			"title" : "Buyer's Assistant",
 			"location" : "Los Angeles, CA",
 			"dates" : "October 2008 - May 2011",
 			"description" : "Tracked inventory, selected styles of clothing to be sold at the USC Bookstore along, and handled all donation requests for bookstore merchandise."
 		},
 		{
 			"employer" : "University of Southern California Pertusati Bookstore",
 			"title" : "Customer Service Representative",
 			"location" : "Los Angeles, CA",
 			"dates" : "October 2007 - October 2008",
 			"description" : "Performed cashiering and customer service duties at the USC Bookstore."
 		}
 		]	
 };

 var education = {
 	"schools" : [
 		{
 			"name" : "University of Southern California Viterbi School of Engineering",
 			"location" : "Los Angeles, CA",
 			"degree" : "Masters of Science",
 			"majors" : "Electrical Engineering - Power",
 			"dates" : 2013,
 			"url" : "www.usc.edu"
 		},
 		{
 			"name" : "University of Southern California Viterbi School of Engineering",
 			"location" : "Los Angeles, CA",
 			"degree" : "Bachelors of Science",
 			"majors" : "Electrical Engineering",
 			"minor" : "Applied Computer Security",
 			"dates": 2011,
 			"url" : "www.usc.edu"
 		}
 	],
 	"onlineCourses" : [
 		{
 			"title" : "JavaScript Basics",
 			"school" : "Udacity",
 			"dates" : 2015,
 			"url" : "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1930528550/e-1935058561/m-1948898570"
 		}
 	]	
 };

 var projects = {
 	"projects" : [
 		{
 			"title" : "Shannon Wind Project",
 			"dates" : "March 2015 - October 2015",
 			"description" : "Calculated protection settings for SEL relays after which the relays were programmed using these settings. Communications was set up with 5 offtakers through an SEL 3530 RTAC which was connected to a local HMI.",
 			"images" : ["images/project1.jpg", "images/project2.jpg"]
 		}
 	]
 };


/*Keep in mind the order the code shows up in the document matters for
prepend/append. This is the only way to get this code to line up correctly
at the top of the page otherwise contact info goes to the very top. */

bio.display = function(){
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedMessage);


/*This was tricky since all examples only iterated through arrays.
First replace the %contact with the name of each item in the contact object.
Then replace the %data% with the value of each item in the contact object.
The other helper variables in helper.js are not needed when using a for loop.*/

for (var data in bio.contacts){
	var formattedTopContacts = HTMLcontactGeneric.replace("%contact%", data);
	formattedTopContacts = formattedTopContacts.replace("%data%", bio.contacts[data]);
	$("#topContacts").append(formattedTopContacts);
	$("#footerContacts").append(formattedTopContacts);
}
$("#header").append(HTMLskillsStart);

for (var i=0; i<bio.skills.length; i++){
 	

 	var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
 	$("#skills").append(formattedSkill);
 	
 }
}

work.display = function(){
for (var job in work.jobs) {

 	$("#workExperience").append(HTMLworkStart);

 	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
 	var formattedEmployerTitle = formattedEmployer + formattedTitle;
 	
 	$(".work-entry:last").append(formattedEmployerTitle);

 	var formattedWorLocation =HTMLworkLocation.replace("%data%", work.jobs[job].location);
 	$(".work-entry:last").append(formattedWorLocation);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
 	$(".work-entry:last").append(formattedDates);
 	
 	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
 	$(".work-entry:last").append(formattedDescription);


 }
}



projects.display = function() {
	for (var project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length >0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}


education.display = function(){
for (var school in education.schools){
	$("#education").append(HTMLschoolStart);


	var formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedSchool);

	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);

	var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedSchoolDates);

	var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedSchoolLocation);

	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	$(".education-entry:last").append(formattedMajor);

	}
 

for (var course in education.onlineCourses){
	$("#education").append(HTMLonlineClasses);
	$("#education").append(HTMLschoolStart);

	var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
	$(".education-entry:last").append(formattedOnlineTitle);

	var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
	$(".education-entry:last").append(formattedOnlineSchool);

	var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
	$(".education-entry:last").append(formattedOnlineDates);

	var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
	$(".education-entry:last").append(formattedURL);

	}
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

/*
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});
*/

/*
function locationizer(work_obj) {
	var locationArray=[];

	for(job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

*/

/*
$("#main").append(internationalizeButton);

function inName(name){
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
	
}

inName(bio.name);
*/












 