var languages;

//load data into page from api
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState===4) {
    languages = JSON.parse(xhr.responseText);
    uiDisplayPhrases(languages, "hello_world");
  }
};
xhr.open('GET', 'api/languages.json');
xhr.send();

$("li").click(function() {
  var key = $(this).attr('id');
  $("li").removeClass("active");
  $(this).addClass("active");
  uiDisplayPhrases(languages, key);
});

//display requested phrases on page
function uiDisplayPhrases(languages, key) {
  var linkHTML = "<ul>";
  languages.forEach(function(language) {
    linkHTML += "<li><strong>"+language.language+":</strong> "+language[key]+"</li>";
  });
  linkHTML += "</ul>";
  document.getElementById("languages").innerHTML=linkHTML;
}
