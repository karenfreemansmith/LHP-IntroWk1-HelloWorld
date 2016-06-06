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
    linkHTML += "<div class='card' id='";
    linkHTML += language.language[1]+"'><span class='sideb'><strong>";
    linkHTML += language.language[0]+"</strong></span><span class='sidea'>";
    linkHTML += language[key][0];
    if(language[key][1]!=="") {
      linkHTML += "<br>("+language[key][1]+")";
    }
    linkHTML += "</span></div>";
  });
  document.getElementById("languages").innerHTML=linkHTML;

  $(".card").click(function() {
    $(this).find(".sidea").toggle();
    $(this).find(".sideb").toggle();
  });
}
