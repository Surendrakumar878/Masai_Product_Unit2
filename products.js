var prodes = JSON.parse(localStorage.getItem("prodes"));
console.log(prodes)
displayData2(prodes)

function displayData2(data1) {
    data1.forEach(function(elem, index) {
        var imgbox = document.createElement("div");
        var imgbox1 = document.createElement("div")
        var textbox = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.img;

        var bName = document.createElement("h2")
        bName.innerText = "Prema Braided Sandal"

        var Name = document.createElement("p")
        Name.innerText = elem.name
        var price1 = document.createElement("p");
        price1.innerText = elem.price1;

        var off = document.createElement("p");
        off.innerText = elem.off;
        var price2 = document.createElement("p");
        price2.innerText = elem.price2;

        var line1 = document.createElement("p");
        line1.innerText = "FREE SHIPPING ON ORDERS $89+"
        var line2 = document.createElement("p");
        line2.innerText = "For 4 interest-free payments of $14.99 with afterpay ⓘ"

        var line3 = document.createElement("p");
        line3.innerText = "Get a $40 Bonus Note when you use a new Nordstrom credit card. Apply now"

        var line4 = document.createElement("p");
        line4.innerText = "Keep it extra chic with a trend-right sandal fitted with dual braided vamp straps and a slender heel."
        var Select1 = document.createElement("select");
        Select1.setAttribute("class", "Size")
        var option1 = document.createElement("option")
        option1.innerText = "Choose a size"
        var option2 = document.createElement("option")
        option2.innerText = "5"
        var option3 = document.createElement("option")
        option3.innerText = "5.5"
        var option4 = document.createElement("option")
        option4.innerText = "6"
        var option5 = document.createElement("option")
        option5.innerText = "7"
        Select1.append(option1, option2, option3, option4, option5)



        var Select2 = document.createElement("select");
        Select2.setAttribute("class", "Size")
        var option1 = document.createElement("option")
        option1.innerText = "Choose a width"
        var option2 = document.createElement("option")
        option2.innerText = "M(Medium)"

        Select2.append(option1, option2)

        var Select3 = document.createElement("select");
        Select3.setAttribute("class", "Size")
        var option1 = document.createElement("option")
        option1.innerText = "Choose a color"
        var option2 = document.createElement("option")
        option2.innerText = "Black"
        var option3 = document.createElement("option")
        option3.innerText = "Tan"
        var option4 = document.createElement("option")
        option4.innerText = "Slate"
        var option5 = document.createElement("option")
        option5.innerText = "Citron"
        var option6 = document.createElement("option")
        option6.innerText = "white"

        var p1 = document.createElement("p")
        p1.innerText = "Delivery"
        var addto = document.createElement("button");
        addto.setAttribute("class", "Size")

        addto.innerText = "Add to Bag"
        var p2 = document.createElement("p")
        p2.innerText = "+ Add to Wish List"
        p2.style.color = "#00819d"
        p2.style.cursor = "pointer"



        Select3.append(option1, option2, option3, option4, option5, option6)








        // box.append(bName,Name,price1,off,price2,line1,line2,line3,line4,Select1,Select2,Select3)

        // document.querySelector("#top").append(box);

        textbox.append(bName, Name, price1, off, price2, line1, line2, line3, line4, Select1, Select2, Select3, p1, addto, p2);
        imgbox1.append(img)
            // textbox.append(name, price1, off, price2)

        imgbox.append(imgbox1, );
        document.querySelector("#text").append(textbox);
        // document.querySelector("#text").append(bName,Name,price1,off,price2,line1,line2,line3,line4,Select1,Select2,Select3,p1,addto,p2);
        document.querySelector("#img").append(imgbox);
        // localStorage.setItem("gift_data", JSON.stringify(tr))
    });
}