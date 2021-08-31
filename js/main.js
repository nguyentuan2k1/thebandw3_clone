
var overlay = document.querySelector('#overlay'); 
const ticket_order = document.querySelectorAll('.ticket-order');
ticket_order.forEach(element => {
    element.addEventListener('click',()=>{
        overlay.checked = true;
    })
});

$('#modal-btn-cancel-footer').on('click',()=>{
    if(overlay.checked){
        overlay.checked = false;
    }
})

var allspan = document.querySelectorAll('.blog-user div span');
let data =  document.querySelectorAll('.data');
allspan[0].classList.add('active');
data.forEach((e)=>{
    e.style.display = "none";   
})
data[0].style.display = "block"
allspan.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        allspan.forEach((element2)=>{
            element2.classList.remove('active');
        })
        element.classList.add('active');
      
        data.forEach((e)=>{
            e.style.display = "none";   
        })
        data[index].style.display = "block"
    })
})

var hd_list_control = document.querySelector('.header-control-list');
var a = hd_list_control.querySelectorAll('a');
a.forEach((e)=>{
    e.addEventListener('click',()=>{
        a.forEach((ex)=>{
            ex.classList.remove('active-control');
        })
        e.classList.add('active-control');
    })
   
   

})