

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
                    <div class ="reviews-content">
                    <div class="swiper-icons">
                    <i class="fa-solid fa-arrow-left pagination-left"></i>
                    <div class="swiper-pagination-bullets">
                    <span class= "swiper-pagination-bullet"></span>
                    <span class= "swiper-pagination-bullet"></span>
                    <span class= "swiper-pagination-bullet"></span>
                    </div>
                    <i class="fa-solid fa-arrow-right pagination-right"></i>
                    </div>
                    <div class="swiper reviews">
                    <div class="swiper-wrapper">
                    ${item["reviews"].map((review) => {
                    return `<div class="swiper-slide">
                        <div class="card">
                            <h3>${review.reviewerName}</h3>
                            <h4>${review.reviewerEmail}</h4>
                            <span class="rating"><span>Rating :</span> ${review.rating}</span>
                            <p class="comment"><span>Comment : </span>${review.comment}</p>
                            <span class="date"><span>Date : </span>${review.date}</span>
                        </div>
                    </div>`;
                    }).join(" ")}
                    
                    </div>
                    </div></div>
                    <div class="product_card_add">
                        <button>Add To Cart</button>
                    </div>
            </div>`;
            document.querySelector(".container").innerHTML += temp;
    })
    
}




function initializeSwiper() {
    document.querySelectorAll(".swiper").forEach((swiper) => {
        new Swiper(swiper, {
            speed: 800,
            spaceBetween: 50,
            slidesPerView: "auto",
            loop: true,
            // autoplay: {
            //     delay: 2500,
            // },
            pagination : {
                el: swiper.closest(".product_card").querySelector(".swiper-pagination-bullets"),
            },
            navigation : {
                nextEl : ".pagination-right",
                prevEl : ".pagination-left",
            },
            breakpoints: {
                0: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
                },
                600: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
                },
                1024: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
                },
                1440: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
                },
                1920: {
                    slidesPerView: "auto",
                    spaceBetween: 50,
                },
            },
        });
    })

}
async function main() {
    await getApiCards();
    initializeSwiper();
}
main();
