
let add = document.getElementById("counter");
let count = 0;
let btns =document.querySelectorAll('button'); 

btns.forEach(function(i) {
    if (i.className =="btn btn-danger")
    {
        i.addEventListener('click', function()
        {
            count ++;
            add.innerHTML = count;
        })
    }
});


//load JSON from the disk
let request = new XMLHttpRequest();
request.open("GET","../products.json",false);
request.send(null);
var my_JSON_object = JSON.parse(request.responseText);


//Variable from the html
let productName = document.getElementsByClassName("card-title");
let productPrice = document.getElementsByClassName("card-header");
let productDesc = document.getElementsByClassName("card-text");
let productStock = document.getElementsByClassName("text-success");
let productImage = document.getElementsByClassName("card-img-top");

for (i=1;my_JSON_object.length+1;i++)
{
    productName[i].innerHTML = my_JSON_object[i].name;
    productPrice[i].innerHTML = my_JSON_object[i].price;
    productDesc[i].innerHTML = my_JSON_object[i].description;
    productStock[i].innerHTML = my_JSON_object[i].stock;
    //productImage[i].setAttribute("src", my_JSON_object[i].picpath);
}


    