var RecipeMang =[]; 
	
const url ="https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/ ";

fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        for(let i=0 ;i <data.results.length;i++){
    RecipeMang.push({href:data.results[i].href,ingredients:data.results[i].ingredients,thumbnail:data.results[i].thumbnail,title:data.results[i].title});
    var option =document.createElement("OPTION");
    var Recipe = document.createTextNode(RecipeMang[i].title);
    option.appendChild(Recipe);
    document.getElementById("Recipes").appendChild(option);
    //
        }
    });

    console.log(RecipeMang);





