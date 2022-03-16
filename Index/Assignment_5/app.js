let foodContainer = document.querySelector('.food-container');
const fooditem=[
        {
        FoodName: "Chocolate Lava Cake",
        foodimg: './Images/Image12.jpg',
        price: 'RS 125/-',
        type: "Deserts",
        des: "Chocolate Lava Crunch Cakes are baked in our ovens to give them a slightly crunchy, chocolatey crust."
    },
    {
        FoodName: "Milk Shake",
        foodimg: './Images/Image9.jpg',
        price: 'RS 155/-',
        type: "Shakes",
        des: "A cold drink made of milk, a sweet flavouring such as fruit or chocolate, and typically ice cream, whisked until it is frothy."
    },
    {
        FoodName: "Chicken Biryani",
        foodimg: './Images/Image6.jpg',
        price: 'RS 380/-',
        type: "Lunch",
        des: "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together."
    },
    {
        FoodName: "Dosa",
        foodimg: './Images/Image2.jpg',
        price: 'RS 45/-',
        type: "breakFast",
        des: "A dosa is a thin flat bread originating from South India, made from a fermented batter predominantly consisting of lentils and rice"
    },
    {
        FoodName: "Idly",
        foodimg: './Images/Image1.jpg',
        price: 'RS 35/-',
        type: "breakFast",
        des: "A type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Southern India and in Sri Lanka."
        },
    {
        FoodName: "Poha",
        foodimg: './Images/Image4.jpg',
        price: 'RS 35/-',
        type: "breakFast",
        des: "Poha is flattened rice that is steam cooked with onions, spices and herbs."
    },
    {
        FoodName: "Veg Biryani",
        foodimg: './Images/Image5.jpg',
        price: 'RS 220/-',
        type: "Lunch",
        des: "Vegetable biryani is an aromatic rice dish made with basmati rice, mix veggies, herbs & biryani spices."
    },
    {
        FoodName: "Lemon Rice",
        foodimg: './Images/Image7.jpg',
        price: 'RS 190/-',
        type: "Lunch",
        des: "This is an easy to make dish and the benefits of ingredients like asafoetida and turmeric are immense."
    },
    {
        FoodName: "Apricot Delight",
        foodimg: './Images/Image11.jpg',
        price: 'RS 155/-',
        type: "Deserts",
        des: "A rectangular soft fruit chew made from Apricots & sugar."
    },
    {
        FoodName: "Vada",
        foodimg: './Images/Image3.jpg',
        price: 'RS 40/-',
        type: "breakFast",
        des: "Vadas are really delicious when the outer casings are crispy crackling and soft spongy inside with hardly any traces of oil smell or greasy taste."
    },
    {
        FoodName: "Tomato Rice",
        foodimg: './Images/Image8.jpg',
        price: 'RS 195/-',
        type: "Lunch",
        des: "Tomato rice is made using tomatoes alone and no vegetables are used except onion."
    },
    {
        FoodName: "Thick Shake",
        foodimg: './Images/Image10.jpg',
        price: 'RS 185/-',
        type: "Shakes",
        des: "Thickshake is a heart-stealer. Nutella joins the club in the choco category."
    }
]
console.log(fooditem);
const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <div class="content b my-2">
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <span class="title">${item.FoodName}</span>
                <span class="price">${item.price}</span>
            </div>
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
console.log(food);
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');
menu.forEach(m => {
    m.addEventListener('click', e =>{
        console.log(e.target.innerHTML);
        foodbox.forEach(box =>{

            box.style.display = "none";
            if(e.target.innerHTML==='All'){
                box.style.display = "block";
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Shakes'){
                if(box.classList.contains('Shakes'))
                {
                    box.style.display = "block";
                }
                
            }
            else if(e.target.innerHTML==='Deserts'){
                if(box.classList.contains('Deserts'))
                {
                    box.style.display = "block";
                } 
            }
            else{
                box.style.display = "block";
            }
        })
    })
})
const ele1 = document.querySelector(".l1");
const ele2 = document.querySelector(".l2");
const ele3 = document.querySelector(".l3");
const ele4 = document.querySelector(".l4");
const ele5 = document.querySelector(".l5");
ele1.addEventListener("click",function(){
    ele1.style.borderColor="brown";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
})
ele1.style.borderColor="brown";
ele2.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="brown";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
})
ele3.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="brown";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="burlywood";
})
ele4.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="brown";
    ele5.style.borderColor="burlywood";
})
ele5.addEventListener("click",function(){
    ele1.style.borderColor="burlywood";
    ele2.style.borderColor="burlywood";
    ele3.style.borderColor="burlywood";
    ele4.style.borderColor="burlywood";
    ele5.style.borderColor="brown";
})