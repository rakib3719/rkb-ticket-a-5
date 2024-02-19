const sits = document.getElementsByClassName('item');


let price = 0;
let sitClickCount = 0;

for (const sit of sits) {
  sit.addEventListener('click', function sitClick(event) {
    if (sitClickCount  < 4) {
      const sitName = event.target.innerText;
 ;
      sit.classList.add('common-color');
      sitClickCount  = sitClickCount + 1;
      event.target.removeEventListener('click', sitClick);
      price = price + 550;

      const totaPrice = document.getElementById('total-price');
      totaPrice.innerText = price;

      const granTotal = document.getElementById('grand-total');
      granTotal.innerText = price;


      let sitCount = document.getElementById('sitCount');
      sitCount.innerText =   sitClickCount;

     let avaivaleSit = document.getElementById('avl-sit');

     

  
     avaivaleSit.innerText = parseInt(avaivaleSit.innerText) - 1;



     let list = document.createElement('div');
     list.innerHTML = `
     
     <div class="flex justify-between">
     <p>${sitName}</p>
     <p>Economy</p>
     <p>550</p>
     </div>
     
     `;







  let nextBtn = document.getElementById('next-btn');
  nextBtn.removeAttribute('disabled')

const econmy = document.getElementById('economy-container');
econmy.appendChild(list)

document.getElementById('apply-cupon').addEventListener('click', function(){

    const cuponValue = document.getElementById('cupon').value;

  

    if(cuponValue === 'NEW15'){

 


  




      let discountCupon1 = ( price  * 15 )  / 100;

   
      let discountArea = document.getElementById('discount-part');
      
       
   
   
   let discountTotal  = price - discountCupon1; 
         granTotal.innerText = discountTotal;
   
   
   const applySectonHide = document.getElementById('coupon-add-section');
   let discountAmount = document.getElementById('discount');
   discountAmount.innerText = discountCupon1;
   applySectonHide.style.display = 'none'
   discountArea.classList.remove('hidden')
   discountArea.classList.add('flex')
  }
  if(cuponValue === 'Couple 20'){

 
 
      let discountCupon1 = ( price  * 20 )  / 100;

   
   let discountArea = document.getElementById('discount-part');
   
    


let discountTotal  = price - discountCupon1; 
      granTotal.innerText = discountTotal;


const applySectonHide = document.getElementById('coupon-add-section');
let discountAmount = document.getElementById('discount');
discountAmount.innerText = discountCupon1;
applySectonHide.style.display = 'none'
discountArea.classList.remove('hidden')
discountArea.classList.add('flex')
  }






})




    }

    else{

     


      alert('Sorry. You can buy a maximum of 4 tickets')
    }
  });



  
}







document.getElementById('apply-cupon').addEventListener('click',function(){


 const cupon = document.getElementById('cupon').value;

 if(cupon !== "NEW15" && cupon !== "Couple 20" ){

  alert("Sorry! Please input a valid cupon code");


document.getElementById('cupon').value = '';


 }




})


document.getElementById('continue').addEventListener('click' , function(){




}
)