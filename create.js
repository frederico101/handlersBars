
$(document).ready(function(){


 
    $.ajax({
        url: "https://learnwebcode.github.io/json-example/pets-data.json",
       // headers: {'Access-Control-Allow-Origin': 'http://127.0.0.1:8000/api/users'},
       //  url: "http://127.0.0.1:8000/api/users/",
         method:"GET",
         dataType : "json",
       //  jsonpCallback: 'pets',
        success: function(response){
            
             console.log(response);
             createHTML(response);
             }
        }),
        function createHTML(petsData){
          var rawTemplate = Document.getElementById("petsTemplate").innerHTML;
          var compiledTemplate = Handlebars.compile(rawTemplate);
          var ourGenaretedHTML = compiledTamplete(petsData);


            var petsContainer = documentGetElementById("pets-container");
        }

    
    });