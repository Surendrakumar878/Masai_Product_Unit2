var data= JSON.parse(localStorage.getItem("view"));

var dataCart=[];
// console.log(data)

dispaly(data);
function dispaly(data){
    data.forEach(function(el){

        var img=document.querySelector("img");
        img.setAttribute("src",el.img);
        var divID=document.getElementById("imgID").append(img);

        var name1=document.getElementById("name");
        name1.innerText=el.name;

        var brand1=document.getElementById("brand");
        brand1.innerText=el.brand;

        var price1=document.getElementById("price");
        price1.innerText=el.price;

        var discount1=document.getElementById("discount");
        discount1.innerText=(el.discount);

        var strike1=document.getElementById("strike");
        strike1.innerText=el.strike;

        var delvery1=document.getElementById("delvery");
        delvery1.innerText="FREE SHIPPING ON ORDERS $89+";


        var about1=document.getElementById("about");
        about1.innerText="or 4 interest-free payments of $7.49 with Afterpay ";

        var btn=document.getElementById("addCart").addEventListener("click",function(){
            myCart(el);
        })

    })
    var arrCard=JSON.parse(localStorage.getItem("card"))||[];
        var count=0;
        function myCart(el){
            count++;
            if(count==1){
                arrCard.push(el);
                localStorage.setItem("card",JSON.stringify(arrCard));
                
            }else{
                count=0;
            }
        }
}