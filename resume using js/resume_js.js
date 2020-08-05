function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState ===4 && xhr.status=="200"){
		callback(xhr.responseText);
		}
	} 
xhr.send();
}
//calling function
getjson("resume.json",function(text){
	var data= JSON.parse(text);
	console.log(data.details);
	mydetails(data.details);
	careerobj(data.co);
	eduQualifications(data.EducationalQualifications);
	ECActivities(data.ExtraCircularActivities);
	TechnicalSkills(data.TechnicalSkills);
})

var parent= document.querySelector(".parent-div");
var d =document.querySelector(".BasicDetails");
d.classList.add("BasicDetails");
function mydetails(alexa) {
	
	var imgdiv= document.createElement("div");
	imgdiv.classList.add("img-div");
	var i=document.createElement("img");
	i.src=alexa.image;
	i.alt="profile pic";
	imgdiv.appendChild(i);
	d.appendChild(imgdiv);


	var name = document.createElement("p");
	name.classList.add("name");
	name.setAttribute("id","name");
	name.textContent=alexa.name;
	d.appendChild(name);

	var Qualification = document.createElement("p");
	Qualification.classList.add("Qualification");
	Qualification.textContent=alexa.Qualification;
	d.appendChild(Qualification);

	var h= document.createElement("h3");
	h.textContent="Hobbies";
	d.appendChild(h);
	var ul = document.createElement("ul");
	for(var i=0;i< alexa.Hobbies.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=alexa.Hobbies[i];
		ul.appendChild(li);
	}
	d.appendChild(ul);

	var h= document.createElement("h3");
	h.textContent="Languages Known";
	d.appendChild(h);
	var ol = document.createElement("ol");
	for(var i=0;i< alexa.LanguagesKnown.length;i++)
	{
		var li=document.createElement("li");
		li.textContent=alexa.LanguagesKnown[i];
		ol.appendChild(li);
	}
	d.appendChild(ol);
}
parent.appendChild(d);
	var ad =document.querySelector(".About");
	
	function careerobj(career){
	
	var h =document.createElement("h2");
	h.textContent="career Objective:";
	ad.appendChild(h);
	h.appendChild(document.createElement("hr"));
	var careerObject = document.createElement("p");
	careerObject.classList.add("careerObjective");
	careerObject.textContent=career.careerObjective;
	ad.appendChild(careerObject);

	}



	//for educcational qualifications...
	function eduQualifications(eq){
		var d= document.createElement("div");
		d.classList.add("edu-qua");
		ad.appendChild(d);
		var h= document.createElement("h3");
		h.textContent="educational Qualifications :";
		d.appendChild(h);
		h.appendChild(document.createElement("hr"));
		
		var table = document.createElement("table");
		row="";
		row="<tr><th>"+"Qualification"+"</th>"+"</th><th>"+"School/College"+"</th><th>"+"Board"+"</th><th>"+"Year"+"</th><th>"+"Grade/Percent"+"</th>";
		for (var i=0;i< eq.length;i++){
			row +="<tr><td>"+eq[i].Qualification+"</td><td>"+eq[i].College+"</td><td>"+eq[i].Board+"</td><td>"+eq[i].Year+"</td><td>"+eq[i].Percent+"</td></tr>";
			table.innerHTML=row;
			d.appendChild(table);
		}
	}
	function TechnicalSkills(ts) {
		var d= document.createElement("div");
		d.classList.add("TechSkills");
		ad.appendChild(d);
		var h= document.createElement("h3");
		h.textContent="Technical Skills:";
		d.appendChild(h);
		h.appendChild(document.createElement("hr"));
		ul=document.createElement("ul");
		for(var i=0;i< ts.length;i++)
		{
			var li=document.createElement("li");
			li.textContent=ts[i];
			ul.appendChild(li);
		}
		d.appendChild(ul);
	}
		function ECActivities(eq) {
		var d= document.createElement("div");
		d.classList.add("co-Activities");
		ad.appendChild(d);
		var h= document.createElement("h3");
		h.textContent="Extra Circular Activities:";
		d.appendChild(h);
		h.appendChild(document.createElement("hr"));
		ul=document.createElement("ul");
		for(var i=0;i< eq.length;i++)
		{
			var li=document.createElement("li");
			li.textContent=eq[i];
			ul.appendChild(li);
		}
		d.appendChild(ul);
	}
parent.appendChild(ad);