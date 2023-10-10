const addPepperoni = document.querySelector(".addPepperoni")
const addVeggie = document.querySelector(".addVeggie")
const addMargherita = document.querySelector(".addMargherita")
const addSupreme = document.querySelector(".addSupreme")

const pepperoniOrder = document.querySelectorAll(".Pepperoni");
const margheritaOrder = document.querySelectorAll(".Margherita")
const veggieOrder = document.querySelectorAll(".Veggie")
const supremeOrder = document.querySelectorAll(".Supreme")

const inputPepperoni = document.querySelector(".nombrePepperoni");
const inputMargherita = document.querySelector(".nombreMargherita")
const inputVeggie = document.querySelector(".nombreVeggie")
const inputSupreme = document.querySelector(".nombreSupreme")

const removePepperoni = document.querySelector(".removePepperoni");
const removeMargherita = document.querySelector(".removeMargherita")
const removeVeggie = document.querySelector(".removeVeggie")
const removeSupreme = document.querySelector(".removeSupreme")


removePepperoni.onclick = function(){
    for (x of pepperoniOrder){
        x.style.display = "none"
    }
    inputPepperoni.value = "0"
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
}

removeMargherita.onclick = function(){
    for (x of margheritaOrder){
        x.style.display = "none"
    }
    inputMargherita.value = "0"
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
}

removeVeggie.onclick = function(){
    for (x of veggieOrder){
        x.style.display = "none"
    }
    inputVeggie.value = "0"
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
}

removeSupreme.onclick = function(){
    for (x of supremeOrder){
        x.style.display = "none"
    }
    inputSupreme.value = "0"
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
}


addVeggie.onclick = function(){
    for (x of veggieOrder){
        if (x.style.display == "inline-block"){
            alert("You already added this item your cart")
            break;
        }
        else{
            x.style.display = "inline-block"
            inputVeggie.value = "1"
        }
    }
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`

}

addMargherita.onclick = function(){
    for (x of margheritaOrder){
        if (x.style.display == "inline-block"){
            alert("You have already added this item to your cart")
            break;
        }
        else {
            x.style.display = "inline-block"
            inputMargherita.value = "1"
        }
    }
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`

}

addPepperoni.onclick = function(){
    
    for (x of pepperoniOrder){
        if (x.style.display == "inline-block"){
            alert("You have already added this item to your cart")
            break;
        }
        else {
            x.style.display = "inline-block"
            inputPepperoni.value = "1"
        }
    }
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`

}

addSupreme.onclick = function(){
    for (x of supremeOrder){
        if (x.style.display == "inline-block"){
            alert("You have already added this item to your cart")
            break;
        }
        else {
            x.style.display = "inline-block"
            inputSupreme.value = "1"
        }
    }
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value*13.99 + inputSupreme.value * 14.99}`
}


inputPepperoni.addEventListener("input", function(){
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
})

inputMargherita.addEventListener("input", function(){
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
})

inputVeggie.addEventListener("input", function(){
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
})

inputSupreme.addEventListener("input", function(){
    document.querySelector(".total").innerHTML = `${inputPepperoni.value * 12.99 + inputMargherita.value * 8.39 + inputVeggie.value * 13.99 + inputSupreme.value * 14.99}`
})


