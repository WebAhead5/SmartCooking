var RecipeMang =[]; 
var tempRec=[];

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
    var foodbyvalue=document.getElementById("Ingerfood").value

    // Enter Here if the user doesn't have an input for the Ingredients

        if (foodbyvalue=="") {
        var e = document.getElementById("Recipes");
        var strUser = e.options[e.selectedIndex].value;
        var Index1 = RecipeMang.findIndex(checkIndex) 
        function checkIndex(RecipeMang) {
        return RecipeMang.title == strUser;}
        var href=(RecipeMang[Index1].href);
        var win = window.open(href, '_blank');
    }

    // If the user type an ingredient , this will be executed

    if (foodbyvalue!="") {

        var e2 = document.getElementById("Recipes");
        var strUser2 = e2.options[e2.selectedIndex].value;
        var Index2 = tempRec.findIndex(checkIndex2) 
        function checkIndex2(tempRec) {
        return tempRec.title == strUser2;}
        var href2=(tempRec[Index2].href);
        var win2 = window.open(href2, '_blank');
    }

    }

    
    function get_ingredient()
    {
    var foodbyvalue=document.getElementById("Ingerfood").value
    clearBox('ingredient');

    if (foodbyvalue=="") {
        

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
        document.getElementById("Picture").style.cssText="border: red dashed";
        
} 

if (foodbyvalue!="") {

    var my_list2 =document.createElement("ul");
        var elem2 = document.createElement("li");


        var e2 = document.getElementById("Recipes");
        var strUser2 = e2.options[e2.selectedIndex].value;
        var Index2 = tempRec.findIndex(checkIndex2) 
        function checkIndex2(tempRec) {
        return tempRec.title == strUser2;}



        elem2.textContent=tempRec[Index2].ingredients;
        my_list2.appendChild(elem2);
        document.getElementById("ingredient").appendChild(my_list2);


        document.getElementById("Picture").src=tempRec[Index2].thumbnail;
        document.getElementById("Picture").style.cssText="border: red dashed";


    }

}


    function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
    document.getElementById(elementID).value = "";
}


function IngFunction()
{

    var url2="https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=";
    var foodbyInger=document.getElementById("Ingerfood").value;
    url2+=foodbyInger;


    fetch(url2)
    .then(function (response) {
        return response.json();
    })

    .then(function (data2) {
        for(let i=0 ;i <data2.results.length;i++){
            tempRec.push({href:data2.results[i].href,ingredients:data2.results[i].ingredients,thumbnail:data2.results[i].thumbnail,title:data2.results[i].title});   
            var option =document.createElement("OPTION");
            var Recipe = document.createTextNode(tempRec[i].title);
            option.appendChild(Recipe);
            document.getElementById("Recipes").appendChild(option);
    }

}); 
}