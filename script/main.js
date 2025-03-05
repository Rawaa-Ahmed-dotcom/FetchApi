
async function getApiCards() {
    const data = await fetch("https://dummyjson.com/products");
    const response = await data.json();
    console.log(response["products"]);
    addCards(response["products"]);
    
}
function addCards(data) {
    data.map((item) => {
        let temp = ``;
        temp += `<div class="product_card">
                    <div class="product_card_image">
                        <img src="${item["images"]}" alt="">
                    </div>
                    <div class="product_card_info">
                        <h2 class="product_card_info_title">${item.title}</h2>
                        <h3 class="product_card_info_category">${item.category}</h3>
                        <p class="product_card_info_description">${item.description}</p>
                        <div class= "product_card_info_rating"><span>Rating :</span> ${item.rating}</div>
                        <div class= "product_card_info_stock"><span>Stock :</span> ${item.stock}</div>
                        <h3 class="product_card_info_price"><span>Price : </span>$${item.price}</h3>
                        <div class="warrantyInformation"><span>Warranty Information : </span>${item.warrantyInformation}</div>
                        <div class="shippingInformation"><span>Shipping Information : </span>${item.shippingInformation}</div>
                        <div class="returnPolicy"><span>Return Policy : </span>${item.returnPolicy}</div>
                        <div class="minimumOrderQuantity"><span>Minimum Order Quantity : </span>${item.minimumOrderQuantity}</div>
                        <div class= "product_card_info_tags">
                        ${item["tags"].map((tag) => `<span class ="product_card_info_tag">#${tag}</span>`).join("")}
                        </div>
                        <div class="availabilityStatus">${item.availabilityStatus}</div>
                    </div>
                    <div class="swiper reviews">
                    <div class="swiper-wrapper">
                    ${item["reviews"].map((review) => {
                    `<div class="swiper-slide">
                        <div class="card">
                            <h3>${review.reviewerName}</h3>
                            <h4>${review.reviewerEmail}</h4>
                            <span class="rating">${review.rating}</span>
                            <p class="comment">${review.comment}</p>
                            <span class="date">${review.date}</span>
                        </div>
                    </div>`
                    }).join(" ")}
                    
                    </div>
                    </div>
                    <div class="product_card_add">
                        <button>Add To Cart</button>
                    </div>
            </div>`;
            document.querySelector(".container").innerHTML += temp;
    })
    
}


getApiCards();

