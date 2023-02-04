
// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
const cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
const cart = [];

const total = 0;

// Exercise 1

function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    for (let i = 0; i < products.length; i++) {

        if (products[i].id === id) {
            console.log(products[i])
            return cartList.push(products[i]);

        }
    }
}



// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cartClone.length=0;

}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalPrice = 0;
    for (let i = 0; i < cartList.length; i++) {
        totalPrice += cartList[i].price;
    }
    return totalPrice;

}


const cartClone =[]
// Exercise 4
function generateCart(cartList) {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    
    for (let i = 0; i < cartList.length; i++) {
        /* create clone objects from cartList to avoid mutation when adding products to same object */
        let cloneObject=0;
        if (cart.includes(cartList[i])) {
            const indexOfcloneObject = cart.indexOf(cartList[i])
            cartClone[indexOfcloneObject].quantity +=1;
            console.log('found',cartClone)
        } else {
            console.log('not found, pushed');
            cartList[i].quantity = 1;
            cart.push(cartList[i])
            cloneObject = { ...cartList[i]}
            cartClone.push(cloneObject)
        }
    }
}


/*
  const object = (object) => object.id === cartList[i].id;

        if (cart.some(object)) {
            // f
            cartList[i].quantity += 1;

            console.log(cartList[i].id)


        } else {
            console.log('push');
            cartList[i].quantity = 1;
            cart.push(cartList[i])

        }


*/

// Exercise 5
function applyPromotionsCart(cartClone) {
    // Apply promotions to each item in the array "cartClone"
    for (let i = 0; i < cartClone.length; i++) {
        if (cartClone[i].name === 'cooking oil' && cartClone[i].quantity >= cartClone[i].offer.number) {
            cartClone[i].subtotalWithDiscountcartClone = (cartClone[i].price * cartClone[i].quantity - 10) - (((cartClone[i].price * cartClone[i].quantity - 10) * cartClone[i].offer.percent / 100))
            console.log('oil');
        } else if (cartClone[i].name === 'Instant cupcake mixture' && cartClone[i].quantity >= cartClone[i].offer.number) {
            cartClone[i].subtotalWithDiscountcartClone = ((cartClone[i].price * cartClone[i].quantity) - (cartClone[i].price * cartClone[i].quantity * 2 / 3)) - (((cartClone[i].price * cartClone[i].quantity) - (cartClone[i].price * cartClone[i].quantity * 2 / 3)) * cartClone[i].offer.percent / 100)
            console.log(cartClone[i].subtotalWithDiscountcart);
        }
    }
}

    const cartListModal=document.getElementById("cart_list")
    const modalCartProducts= cartListModal.getElementsByTagName("tr")

    // Exercise 6
    cleanCart(cartClone)
   function printCart(cartClone) {
        // Fill the shopping cart modal manipulating the shopping cart dom
        applyPromotionsCart(cartClone)
        for(let i = 0; i<cartClone.length; i++){
            if (cartClone.length !==0){
                console.log( modalCartProducts[i].children[0])
                modalCartProducts[i].classList.remove('d-none');
                modalCartProducts[i].children[0].textContent=cartClone[i].name
                modalCartProducts[i].children[1].textContent=cartClone[i].price
                modalCartProducts[i].children[2].textContent=cartClone[i].quantity
                    if(cartClone[i].hasOwnProperty('subtotalWithDiscountcartClone'))
                    modalCartProducts[i].children[3].textContent=cartClone[i].subtotalWithDiscountcartClone 
                    else{
                        modalCartProducts[i].children[3].textContent=cartClone[i].price*cartClone[i].quantity
                    }               
            }else{
                modalCartProducts[i].classList.add('d-none');
            }
        }
   
       


    } 


    // ** Nivell II **

    // Exercise 7
    function addToCart(id) {
        // Refactor previous code in order to simplify it 
        // 1. Loop for to the array products to get the item to add to cart
        // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    }

    // Exercise 8
    function removeFromCart(id) {
        // 1. Loop for to the array products to get the item to add to cart
        // 2. Add found product to the cartList array
    }

    function open_modal() {
        console.log("Open Modal");
        generateCart(cartList)
        printCart(cartClone);
    }