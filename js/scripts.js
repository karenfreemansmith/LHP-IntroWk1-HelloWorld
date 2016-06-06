var languages;

//load data into page from api
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if(xhr.readyState===4) {
    languages = JSON.parse(xhr.responseText);
    uiDisplayCards(languages, "hello_world");
  }
};
xhr.open('GET', 'api/languages.json');
xhr.send();

$("li").click(function() {
  var key = $(this).attr('id');
  $("li").removeClass("active");
  $(this).addClass("active");
  uiDisplayCards(languages, key);
});

$("div").click(function() {
  $(".sidea").toggle();
  $(".sideb").toggle();
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

function uiDisplayCards(languages, key) {
  var linkHTML = "";
  languages.forEach(function(language) {
    linkHTML += "<div class='card' id='"+language.language[1]+"'><span class='sidea'><strong>"+language.language[0]+"</strong></span><span class='sideb'>"+language[key][0]+"</span></div>";
  });
  document.getElementById("languages").innerHTML=linkHTML;
}
