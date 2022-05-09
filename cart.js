var obj = JSON.parse(localStorage.getItem("signupData"))
document.querySelector("#SignUpName").innerText="Hi,"+obj.fname+obj.lname || 'Sign Up'

if(document.querySelector("#SignUpName").innerText=="Hi,"+obj.fname+obj.lname){
    document.querySelector("#SignUpName").href="#"
  
}

var arr = JSON.parse(localStorage.getItem("card"))



console.log(arr)
show(arr)

function show(arr) {
var bag=0
var count=0

arr.forEach(function(elem,index) {
    count++
    addPrice=elem.price
    addPrice=addPrice.replace('$','')
    addPrice=+addPrice
    bag+=addPrice
    // console.log(addPrice)
    var mDiv = document.createElement("div")
    var img=document.createElement("img")
    img.setAttribute("src", elem.img);
    var infoDiv = document.createElement("div")
    var brand = document.createElement("p")
    brand.innerText=elem.brand
    var name = document.createElement("p")
    name.innerText=elem.name
    var size = document.createElement("p")
    size.innerText="Size:"+elem.size
    var color = document.createElement("p")
    color.innerText="Color: Lava Rock"
    var itemId = document.createElement("p")
    itemId.innerText="Item: 6459659"
    var delevery=document.createElement("img")
    delevery.setAttribute("src", '/img/CartP4.PNG');
    var deleteDiv=document.createElement("div")
    var remove=document.createElement("button")
    remove.innerText="Remove"
    remove.addEventListener("click", function () {
        deleteFunc(elem, index);
      });
var saveForLater = document.createElement("button")
saveForLater.innerText="Save for later"

    // .src=
    // console.log(img,infoDiv)
    // ProductViewCart
    deleteDiv.append(remove,saveForLater)
    infoDiv.append(brand,name,size,color,itemId,delevery,deleteDiv)
    var qtyDiv =document.createElement("div")
    var qty=document.createElement("h3")
    qty.innerText="Qty"
    var qty=document.createElement("h3")
    qty.innerText="Qty"
    var downQty = document.createElement("i")
    downQty.setAttribute("class","fa-solid fa-chevron-down") 
    qtyDiv.append(qty,downQty)
    var prcieDiv=document.createElement("div")
    var mainPrice = document.createElement("p")
    mainPrice.innerText=elem.price
    var price = document.createElement("p")
    price.innerText="Now:"+" "+elem.price
    var strikePrice = document.createElement("p")
    strikePrice.innerText="*"+elem.strike
    prcieDiv.append(mainPrice,price,strikePrice)
    var line = document.createElement("hr")
    mDiv.append(img,infoDiv,qtyDiv,prcieDiv)
    document.querySelector(".ProductViewCart").append(mDiv,line)
});
console.log(bag)
document.querySelector('#subTotal').innerText="$"+bag
document.querySelector('#estimetedTotal').innerText="$"+bag
var kist = bag/4
document.querySelector('.kisht').innerText="$"+kist
localStorage.setItem('cartCount',JSON.stringify(count))
}


  function deleteFunc(elem, index) {
    arr.splice(index, 1);
    console.log(arr);
    localStorage.setItem("card", JSON.stringify(arr));
    var newArr = JSON.parse(localStorage.getItem("card"));
    document.querySelector(".ProductViewCart").innerHTML = "";
    show(newArr);
    window.location.reload();
  }

  document.querySelector("#checkout").addEventListener("click",hohoho)

  function hohoho() {
      window.location.href="transaction.html"
  }


  var a=JSON.parse(localStorage.getItem("cartCount"))
console.log(a)
document.querySelector("#cartValue").innerText= a||0
document.querySelector("#ShoppingBagNumber").innerText= a||0