$(function(){
   
   // var mixer = mixitup('.products__inner-box');
   // mixitup.mixStart();

   $(".rate-star").rateYo({
      starWidth: "12px",
      rating: 4.6,
      readOnly: true
   });
   
   $('.product-slider__inner').slick({
      dots: true,
      arrows: false,
      slidesToShow: 4,
      slidesToScroll: 4
   })

});

const productsBtn = document.querySelectorAll('button[name="products"]');
const productsItem = document.querySelectorAll('.product__item');
const productsInnerBox = document.querySelector('.products__inner-box');

document.querySelector('.products').addEventListener('click', (e) => {
   e.preventDefault();
   const target = e.target;

   // productsBtn.forEach(btn => {
   //    btn.classList.remove('active');
   // })

   productsInnerBox.style.justifyContent = 'start';
   // console.log(productsBtn);
   if (target.dataset.btn == 'products') {

      productsBtn.forEach(btn => {
         btn.classList.remove('active');
      })
      console.log(target);
      console.log(target);
      target.classList.add('active');
      
      // target.classList.add('animate__bounceInDown');
      const dataFilter = target.dataset.filter;
      // console.log(dataFilter);
      f1(dataFilter);
   }
   
})

function f1(data) {
   console.log(data);
   displayNone();
   productsItem.forEach(item => {
      
      if (data == 'all') {
         item.style.marginLeft = 0;
         // item.style.display = 'block';
         productsInnerBox.style.justifyContent = 'space-between';
         item.classList.add('block');
         item.classList.add('animate__animated','animate__bounceInDown');
         // item.style.transition = 'all 5s linear';
         // item.style.height = 410 + 'px';
      }
      if (item.classList.contains(data)) {
         item.style.marginLeft = 30 + 'px';
         console.log(item);
         // item.style.display = 'block';
         item.classList.add('block');
         item.classList.add('animate__animated','animate__bounceInDown');
         // item.style.height = 410 + 'px';
      }
      
   })
}

function displayNone() {
   productsItem.forEach(item => {
      // item.style.height = 0;
      // item.style.display = 'none';
      item.classList.remove('block');
      item.classList.add('none-block');
      // item.classList.remove('block');
      // item.style.transition = 'all 5s linear';
   })
}