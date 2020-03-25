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

    }


    });



     
    function getref()
    {
        var e = document.getElementById("Recipes");
        var strUser = e.options[e.selectedIndex].value;
        var Index1 = RecipeMang.findIndex(checkIndex) 
        function checkIndex(RecipeMang) {
        return RecipeMang.title == strUser;}
        var href=(RecipeMang[Index1].href);
        var win = window.open(href, '_blank');

    }

    

    function get_ingredient()
    {
        clearBox('ingredient');

        var my_list =document.createElement("ul");
        var elem = document.createElement("li");


        var e = document.getElementById("Recipes");
        var strUser = e.options[e.selectedIndex].value;
        var Index1 = RecipeMang.findIndex(checkIndex) 
        function checkIndex(RecipeMang) {
        return RecipeMang.title == strUser;}



        elem.textContent=RecipeMang[Index1].ingredients;
        my_list.appendChild(elem);
        document.getElementById("ingredient").appendChild(my_list);


        document.getElementById("Picture").src=RecipeMang[Index1].thumbnail;
} 

    function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}