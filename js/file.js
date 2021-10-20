// window.addEventListener("DOMContentloaded",()=>{

    let tabs=document.querySelectorAll(".tabheader__item")
   let  tabsContent=document.querySelectorAll('.tabcontent')
let tabsParent= document.querySelector(".tabheader__items");

  function hideTabContent(){
    tabsContent.forEach(item=>{
        item.style.display='none';
    })

    tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    });
   }


function showTabContent(i){
    tabsContent[i].style.display='block';
    tabs[i].classList.add('tabheader__item_active')
}



tabsParent.addEventListener('click', (event)=>{
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item , i )=>{
            if  (target==item){
                hideTabContent();
                showTabContent(i)
            }
        })
    }
})


hideTabContent();
showTabContent(0);










// TIME ?????????????????

let deadline='2021-1-11';

function getTimeRemaining(endtime){
    let t = Date.parse(endtime)-Date.parse(new Date());

    let days=Math.floor(t/(1000*60*60*24))
    let hours= Math.floor((t/(1000*60*60) % 24))
    let min = Math.floor((t/1000/60)%60)
    let sec = Math.floor((t/1000)%60)
 
    return {
        'total': t,
        'd': days,
        'h':hours,
        'm':min,
        's':sec
    }
}

function setClock(selector, endTime){
let timer= document.querySelector(selector)

  let days=timer.querySelector("#days")
  let hours=timer.querySelector("#hours")
  let min=timer.querySelector("#minutes")
  let sec=timer.querySelector("#seconds")
  
  let timeInterval= setInterval(updateClock,1000);


   function updateClock(){
    let  t = getTimeRemaining(endTime);

   days.innerHTML=t.d;
    hours.innerHTML=t.h;
    min.innerHTML=t.m;
    sec.innerHTML=t.s;
    
     if(t.total<=0){
         clearInterval(timeInterval)
     }
   }


}

setClock('.timer' , deadline);




























// modal window----------------------------------

let modaltriger= document.querySelectorAll('[data-modal]')
let modal = document.querySelector('.modal')
let modalCloseBtn= document.querySelector('[data-close]');

function openModal(){
    modal.classList.add('show')
    modal.classList.remove('hide');
    
    document.body.style.overflow='hidden';
    // clearInterval(modalTimerId)
}

function closeModal(){
     modal.classList.add('hide');
    modal.classList.remove('show');
 document.body.style.overflow=''
}
 
modaltriger.forEach(btn=>{
    btn.addEventListener('click', openModal)

})

modalCloseBtn.addEventListener('click', closeModal)


modal.addEventListener('click', (e)=>{
    if(e.target===modal){
      
     closeModal();
    }
});


    document.addEventListener('keydown', (e)=>{
   if(e.code==="Esc"){
    closeModal();
    }

    });

// let modalTimerId=setTimeout(openModal,3000);

window.addEventListener('scroll',()=>{
    if (window.pageYOffset+document.documentElement.clientHeight
        >=document.documentElement.scrollHeight){
            openModal();
        }
})


























































