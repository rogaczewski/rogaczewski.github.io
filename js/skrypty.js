var h1 = 'Curriculum vitae';
var fota = "img/mr.jpg";

var fb1src = "https://facebook.com/kczapki";
var fb2src = "https://www.facebook.com/groups/wynajmebialystok/about/";
var fb3src = "https://www.facebook.com/groups/wynajemwarszawa/";

var interere = "Rower, fotografia, gitara elektryczna, motoryzacja, majsterkowanie, psychologia, nowe technologie, urbanistyka i komunikacja.";

var systemy = ["Sitecore", "RedDot", "RedLink", "Drupal", "Wordpress", "Joomla"];

function tresc() {
	var h2 = 'Podstawowe informacje';
	var h31 = 'Dane osobowe';
	var h32 = 'Doświadczenie';
	var h33 = 'Wykształcenie';
	var h34 = 'Języki obce';
	var h35 = 'Zainteresowania';
	
	document.getElementById("h1").innerHTML = h1;
	document.getElementById("ih2").innerHTML = h2;
	document.getElementById("ih3dane").innerHTML = h31;
	document.getElementById("ih3dosw").innerHTML = h32;
	document.getElementById("ih3wyksz").innerHTML = h33;
	document.getElementById("ih3jezyki").innerHTML = h34;
	document.getElementById("ih3zaint").innerHTML = h35;
	
	document.getElementById("interere").innerHTML = interere;
	
	
	var fb1 = document.getElementById("fb1");
	var fb2 = document.getElementById("fb2");
	var fb3 = document.getElementById("fb3");
	
	fb1.setAttribute("href", fb1src);
	fb2.setAttribute("href", fb2src);
	fb3.setAttribute("href", fb3src);

	

}

function zdjecie() {
	var kaban = document.getElementById("kabanos");
	
	kaban.setAttribute("src", fota);
	kaban.setAttribute("class", "photo");
	kaban.setAttribute("alt", "kabanos");
	
}



/* function cmsy() {
		
	var lista = ["Sitecore", "RedDot", "RedLink", "Drupal", "Wordpress", "Joomla"];
	licznik = lista[0].lenght;

	var dzie = document.getElementById("cms");
	var ol = document.createElement("ol");
	ol.appendChild(li);
		
	for (var i = 0; i < licznik; i++) {
		var li = document.createElement("li");
		li.textContent = lista[0];
		li.appendChild(ol);
	}

}
 */
function cmsy() {

	systemy = ["Sitecore", "RedDot", "RedLink", "Drupal", "Wordpress", "Joomla"];
	systemyLen = systemy.length;
	text = "CMS'y <ol>";
	for (i = 0; i < systemyLen; i++) {
		text += "<li>" + systemy[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("cms").innerHTML = text;
}


function sortuj() {
	
    systemy.sort();
	
	systemyLen = systemy.length;
	text = "CMS'y <ol>";
	for (i = 0; i < systemyLen; i++) {
		text += "<li>" + systemy[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("cms").innerHTML = text;
}
function sortuj2() {
	
    systemy.reverse();
	
	systemyLen = systemy.length;
	text = "CMS'y <ol>";
	for (i = 0; i < systemyLen; i++) {
		text += "<li>" + systemy[i] + "</li>";
	}
	text += "</ol>";
	document.getElementById("cms").innerHTML = text;
}