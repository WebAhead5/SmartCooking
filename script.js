var recipiesList = [];
var recByIngredient = [];

// Fetching from the main page

url = "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
fetch(url)

    .then(function (response) {
        return response.json();
    })

    .then(function set_data(data) {
        for (let i = 0; i < data.results.length; i++) {
            recipiesList.push({ href: data.results[i].href, ingredients: data.results[i].ingredients, thumbnail: data.results[i].thumbnail, title: data.results[i].title });

            var option = document.createElement("OPTION");
            var Recipe = document.createTextNode(recipiesList[i].title);
            option.appendChild(Recipe);
            document.getElementById("Recipes").appendChild(option);

        }
    });
    
    // Fetching from page with the Ingredient that the user entered

    function IngFetch() {
        var foodbyInger = document.getElementById("Ingerfood").value;
        clearBox("Ingerfood");
        url2 = url+"?i=" + foodbyInger;
    
        fetch(url2)
            .then(function (response1) {
                return response1.json();
            })
    
            .then(function set_data2(data) {
                clearBox("Recipes");
                for (let i = 0; i < data.results.length; i++) {
                    recByIngredient.push({ href: data.results[i].href, ingredients: data.results[i].ingredients, thumbnail: data.results[i].thumbnail, title: data.results[i].title });
    
                    var option1 = document.createElement("OPTION");
                    var Recipe2 = document.createTextNode(recByIngredient[i].title);
                    option1.appendChild(Recipe2);
                    document.getElementById("Recipes").appendChild(option1);
    
                }
    
            });
        recByIngredient = [];
    
    }
    

// Checking if the user has an input for the Ingredient and afterwards taking the data either from the main page
// or using the data from the page that user is searching for.

function getref() {
    var inputIngredient = document.getElementById("Ingerfood").value

    // Here we are taking all the recipes titles that we already put in the select section where the user can choose
    // one of them.Afterwards, we are checking the user selection with the list of recipies that we have and from
    // that we get the index of the recipe which is has href as on of it's keys and from that we can access to the 
    // link which stands for each single recipe.

    if (inputIngredient == "") {
        var e = document.getElementById("Recipes");
        var strUser = e.options[e.selectedIndex].value;
        var Index1 = recipiesList.findIndex(checkIndex)
        function checkIndex(recipiesList) {
            return recipiesList.title == strUser;
        }
        var href = (recipiesList[Index1].href);
        var win = window.open(href, '_blank');
    }

    // If the user type an ingredient , this will be executed

    if (inputIngredient != "") {

        var e2 = document.getElementById("Recipes");
        var strUser2 = e2.options[e2.selectedIndex].value;
        var Index2 = recByIngredient.findIndex(checkIndex2)
        function checkIndex2(recByIngredient) {
            return recByIngredient.title == strUser2;
        }
        var href2 = (recByIngredient[Index2].href);
        var win2 = window.open(href2, '_blank');
    }

}


// After deciding which link to fetch depending on the user typing an Ingredient or not.The next step will be showing
// the Ingredients of each recipe on the right side of the screen with updaing the picture in the middle which stands
// for each recipe


function get_ingredient() {
    var inputIngredient = document.getElementById("Ingerfood").value
    clearBox('ingredient');

    if (inputIngredient == "") {


        var my_list = document.createElement("ul");
        var elem = document.createElement("li");


        var e = document.getElementById("Recipes");
        var strUser = e.options[e.selectedIndex].value;
        var Index1 = recipiesList.findIndex(checkIndex)
        function checkIndex(recipiesList) {
            return recipiesList.title == strUser;
        }

        elem.textContent = recipiesList[Index1].ingredients;
        my_list.appendChild(elem);
        document.getElementById("ingredient").appendChild(my_list);

        document.getElementById("Picture").src = recipiesList[Index1].thumbnail;
        document.getElementById("Picture").style.cssText = "border: red dashed";

    }

    if (inputIngredient != "") {

        var my_list2 = document.createElement("ul");
        var elem2 = document.createElement("li");


        var e2 = document.getElementById("Recipes");
        var strUser2 = e2.options[e2.selectedIndex].value;
        var Index2 = recByIngredient.findIndex(checkIndex2)
        function checkIndex2(recByIngredient) {
            return recByIngredient.title == strUser2;
        }



        elem2.textContent = recByIngredient[Index2].ingredients;
        my_list2.appendChild(elem2);
        document.getElementById("ingredient").appendChild(my_list2);


        document.getElementById("Picture").src = recByIngredient[Index2].thumbnail;
        document.getElementById("Picture").style.cssText = "border: red dashed";


    }

}

function clearBox(elementID) {

    document.getElementById(elementID).innerHTML = "";
}