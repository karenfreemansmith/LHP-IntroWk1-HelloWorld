//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//load data into page from api
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState===4) {
    var languages = JSON.parse(xhr.responseText);
    var linkHTML = "<ul>";
    languages.forEach(function(language) {
      linkHTML += "<li><strong>"+language.language+":</strong> "+language.hello_world+"</li>";
    });
    linkHTML += "</ul>";
    document.getElementById("languages").innerHTML=linkHTML;
  }
};
xhr.open('GET', 'api/languages.json');
xhr.send();
