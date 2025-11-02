const mainImage= document.querySelector('.main-image');
const preview= document.querySelectorAll('.preview img');
const previewBox= document.querySelector('.preview');
const productName= document.querySelector('.productName');
// lightbox
const lightbox= document.querySelector('.lightbox');
const lightboxImage= document.querySelector('.lightboxImage');
const closeBtn= document.querySelector('#close');
const nextBtn= document.querySelector('#next');
const previousBtn= document.querySelector('#previous');
// quantity 
const minusIcon= document.querySelector('#minusIcon');
const plusIcon= document.querySelector('#plusIcon');
const resualt= document.querySelector('#resualt');
// cart shop
const iconCart= document.querySelector('.icon-cart');
const cartEmpty= document.querySelector('.cart');
const cartEmptyText= document.querySelector('.des');
const cartFill= document.querySelector('.cartFill');
const checkoutBtn= document.querySelector('.checkout-btn');
const notif= document.querySelector('.notif'); 
const cartFillContain= document.querySelector('.cartFillContain');

// add to cart button 
const addBtn= document.querySelector('.add');
// pricing 
const price= document.querySelector('.prix');
// navBar for mobile 
const navMobile= document.querySelector('.mobile');
const overly= document.querySelector('.overly');
const openMenuBtn= document.querySelector('.openMenu');
const closeMenuBtn= document.querySelector('.close');


// lightbox fonction 
mainImage.addEventListener('click', ()=>{
  lightbox.style.display='block';
})
closeBtn.addEventListener('click', ()=>{
  lightbox.style.display='none';
})

let currentIndex = 0;
preview.forEach((img, index) => {
  img.onclick = () => {
    currentIndex = index; 
    showImage();
  };
});

function showImage() {
  const selectedImg = preview[currentIndex];
  const src = selectedImg.getAttribute('src');

  mainImage.src = src;
  lightboxImage.src = src;

  preview.forEach(del => del.classList.remove('selected'));
  selectedImg.classList.add('selected');
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex >= preview.length) currentIndex = 0;
  showImage();
};

previousBtn.onclick = () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = preview.length - 1;
  showImage();
};

// // quantity  function 
let count = 1;
plusIcon.addEventListener('click', ()=>{
  if(count < 100){
    count++;
    resualt.innerHTML= count;
  }
})  
minusIcon.addEventListener('click', ()=>{
  if(count > 1){
    count--;
      resualt.innerHTML= count;
  }
})  

// Cart shop function 
iconCart.addEventListener('click', ()=>{
  cartEmpty.classList.toggle('active');
  cartEmptyText.innerHTML='Your cart is empty.';
})
notif.addEventListener('click', ()=>{
  cartEmpty.classList.toggle('active');
})

// add to cart function 
addBtn.addEventListener('click', ()=>{
  cartEmptyText.style.display='none';
  notif.style.display='block';
  notif.innerHTML=`${resualt.innerHTML}`;
  cartFill.style.display='block';
  checkoutBtn.style.display='block';
  cartFillContain.innerHTML=`<img src="${this.src = mainImage.src}" alt="" class="imgCartFill">
  <div class="cart-content">
    <p>${productName.innerHTML}</p>
    <p class="prix">${price.innerHTML} x <span class="quantity">${resualt.innerHTML}</span> x <span class="total">$${resualt.innerHTML * 125.00}</span></p>
  </div>
  <i class="fa-solid fa-trash" id="delete"></i>  `;
  let remove = document.querySelector('#delete');
  remove.onclick= ()=>{
    cartFillContain.innerHTML='';
    cartEmptyText.style.display='block';
    checkoutBtn.style.display='none';
    notif.style.display='none';
  }


})

// navbar function 
openMenuBtn.addEventListener('click', ()=>{
  navMobile.classList.toggle('active');
  overly.style.display='block';  
})
closeMenuBtn.addEventListener('click', ()=>{
  overly.style.display='none';
  navMobile.classList.toggle('active')
})
