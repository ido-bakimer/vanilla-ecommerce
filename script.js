import { getRandomNumber, generateDummyText } from './util.js';


//feature list builder arr+func
//feature list arr-
const features = [
    {
        imgSrc: "resources/features/1freeShipping.png",
        text: "Free Shipping",
        color: "#E6F7F9"
    },
    {
        imgSrc: "resources/features/2onlineOrder.png",
        text: "Online Order",
        color: "#F9EBF3"
    },
    {
        imgSrc: "resources/features/3SaveMoney.png",
        text: "Save Money",
        color: "#F0F8E4"
    },
    {
        imgSrc: "resources/features/4promotion.png",
        text: "Promotions",
        color: "#E6F2F9"
    },
    {
        imgSrc: "resources/features/5happySell.png",
        text: "Happy Sale",
        color: "#E7E2F6"
    },
    {
        imgSrc: "resources/features/6support.png",
        text: "24/7 Support",
        color: "#F9EDE6"
    }
];

//feature builder func
const featureSection = document.getElementById('feature');

features.forEach(feature => {
    // Create a div element with the class 'feature-box'
    const featureBox = document.createElement('div');
    featureBox.className = 'feature-box';

    // Create an img element and set its src attribute
    const img = document.createElement('img');
    img.src = feature.imgSrc;
    img.alt = feature.text;

    // Create a span element and set its text content and background color
    const span = document.createElement('span');
    span.textContent = feature.text;
    span.style.backgroundColor = feature.color;

    // Append the img and span to the featureBox div
    featureBox.appendChild(img);
    featureBox.appendChild(span);

    // Append the featureBox div to the feature section
    featureSection.appendChild(featureBox);
});

//product api gen
const productSection = document.getElementById('product');
function constructProduct(i){
    const productBox = document.createElement('div');
    const img = document.createElement('img');
    const productName = document.createElement('h3');
    const productDesc = document.createElement('p');
    const productPrice = document.createElement('p');
    const baseImgLink = 'https://via.assets.so/shoe.png?id=1&q=95&w=360&h=360&fit=fill';

    productBox.className = 'product-box';
    let newId = getRandomNumber(1,100);
    const newImgLink = baseImgLink.replace(/id=\d+/, `id=${newId}`); 
    img.src= newImgLink;
    productName.textContent = generateDummyText(2);
    productDesc.textContent = generateDummyText(8);
    productPrice.textContent = getRandomNumber(150,350) + '$';
    

    productBox.appendChild(img);
    productBox.appendChild(productName);
    productBox.appendChild(productDesc);
    productBox.appendChild(productPrice);
    productSection.appendChild(productBox);
}

// function constructProductlIST{
 
// }

constructProduct();

//hero hue change func
const hero = document.getElementById('hero');
let hue = 0;

function rotateHue() {
    hue = (hue + 0.2) % 360; // Increment hue and keep it within 0-359 degrees
    hero.style.filter = `hue-rotate(${hue}deg)`;
    requestAnimationFrame(rotateHue); // Recursively call rotateHue
}

// Start the hue rotation
rotateHue();