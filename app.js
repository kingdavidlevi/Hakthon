let section = document.getElementById('bigDiv') 
let section1 = document.getElementById('bigDiv1')
let hideArrow = document.getElementById('arrow1')
let arrow = document.getElementById('arrow')
let cancel = document.getElementById('div-cancel')
let cancel1 = document.getElementById('div-cancel1')
let div = document.getElementById('ExtendContainer') 
let div1 = document.getElementById('ExtendContainer1') 
let dotsmall1 = document.getElementById('dotsmall1')
let dotsmall2 = document.getElementById('dotsmall2')
let dotsmall3 = document.getElementById('dotsmall3')
let dotsmall4 = document.getElementById('dotsmall4')
let dotsmall5 = document.getElementById('dotsmall5')
let cmp1 = document.getElementById('cmp1')
let cmp2 = document.getElementById('cmp2')
let cmp3 = document.getElementById('cmp3')
let cmp4 = document.getElementById('cmp4')
let cmp5 = document.getElementById('cmp5')
let vmp1 = document.getElementById('vmp1')
let vmp2 = document.getElementById('vmp2')
let vmp3 = document.getElementById('vmp3')
let vmp4 = document.getElementById('vmp4')
let vmp5 = document.getElementById('vmp5')
let smallDiv1 = document.getElementById('section1')
let smallDiv = document.getElementById('section')



hideArrow.addEventListener('click', () => {
  let sectionStyle = window.getComputedStyle(bigDiv1)

    if (sectionStyle.display === 'block'){
        bigDiv1.style.display = 'none'
    }

    if(sectionStyle.display === 'none'){
      bigDiv.style.display = 'block'
     }

})

 


 arrow.addEventListener('click', () => {
    let sectionStyle = window.getComputedStyle(bigDiv)


    if (sectionStyle.display === 'block'){
        bigDiv.style.display = 'none'
    }

   if(sectionStyle.display === 'none'){
    bigDiv1.style.display = 'block'
     
   }

 })
 

 cancel.addEventListener('click',() => {
  let ddd = window.getComputedStyle(ExtendContainer)
  let ddd1 = window.getComputedStyle(ExtendContainer1)

  if (ddd.display === 'block'){
    div.style.display = 'none'
   

  }

  if (ddd1.display === 'block'){
    div1.style.display = 'none'
  }

 })
 

 cancel1.addEventListener('click',() => {
  let ddd = window.getComputedStyle(ExtendContainer)
  let ddd1 = window.getComputedStyle(ExtendContainer1)

  if (ddd1.display === 'block'){
    div1.style.display = 'none'
   

  }

  if (ddd.display === 'block'){
    div.style.display = 'none'
  }

 })
 



 dotsmall1.addEventListener('click', () => {
  let Stylecmp1 = window.getComputedStyle(cmp1)
  let Stylevmp1 = window.getComputedStyle(vmp1)
  let stylesection1 = window.getComputedStyle(section1)

  if(Stylecmp1.display === 'block'){
    cmp1.style.display = 'none'

  }

  if(Stylecmp1.display === 'none'){
    vmp1.style.display = 'block';
    smallDiv1.style.height = '449px'
    vmp2.style.display = 'none';
    vmp3.style.display = 'none';

    vmp4.style.display = 'none';
    vmp5.style.display = 'none';

    cmp2.style.display = 'block';
    cmp3.style.display = 'block';
    cmp4.style.display = 'block';
    cmp5.style.display = 'block';


  }
 




 })








 dotsmall2.addEventListener('click', () => {
  let Stylecmp2 = window.getComputedStyle(cmp2)
  let Stylevmp2 = window.getComputedStyle(vmp2)
  
  if(Stylecmp2.display === 'block'){
    cmp2.style.display = 'none'

  }

  if(Stylecmp2.display === 'none'){
    vmp2.style.display = 'block';
    smallDiv1.style.height = '449px'
    vmp3.style.display = 'none';
    vmp4.style.display = 'none';
    vmp5.style.display = 'none';
    vmp1.style.display = 'none';


    cmp1.style.display = 'block';
    cmp3.style.display = 'block';
    cmp4.style.display = 'block';
    cmp5.style.display = 'block';

  }

 


 })



 dotsmall3.addEventListener('click', () => {
  let Stylecmp3 = window.getComputedStyle(cmp3)
  let Stylevmp3 = window.getComputedStyle(vmp3)
  
  if(Stylecmp3.display === 'block'){
    cmp3.style.display = 'none'

  }

  if(Stylecmp3.display === 'none'){
    vmp3.style.display = 'block';
    smallDiv1.style.height = '467px'
    vmp4.style.display = 'none';
    vmp5.style.display = 'none';
    vmp1.style.display = 'none';
    vmp2.style.display = 'none';


   
    cmp1.style.display = 'block';
    cmp2.style.display = 'block';
    cmp4.style.display = 'block';
    cmp5.style.display = 'block';
  }


  


 })




 dotsmall4.addEventListener('click', () => {
  let Stylecmp4 = window.getComputedStyle(cmp4)
  let Stylevmp4 = window.getComputedStyle(vmp4)
  
  if(Stylecmp4.display === 'block'){
    cmp4.style.display = 'none'

  }

  if(Stylecmp4.display === 'none'){
    vmp4.style.display = 'block';
    smallDiv1.style.height = '467px'
    vmp3.style.display = 'none';
    vmp2.style.display = 'none';
    vmp5.style.display = 'none';
    vmp1.style.display = 'none';


      
    cmp1.style.display = 'block';
    cmp2.style.display = 'block';
    cmp3.style.display = 'block';
    cmp5.style.display = 'block';

  }


 

 })





 dotsmall5.addEventListener('click', () => {
  let Stylecmp5 = window.getComputedStyle(cmp5)
  let Stylevmp5 = window.getComputedStyle(vmp5)
  
  if(Stylecmp5.display === 'block'){
    cmp5.style.display = 'none'

  }

  if(Stylecmp5.display === 'none'){
    vmp5.style.display = 'block';
    smallDiv1.style.height = '485px'
    vmp3.style.display = 'none';
    vmp2.style.display = 'none';
    vmp4.style.display = 'none';
    vmp1.style.display = 'none';


    cmp1.style.display = 'block';
    cmp2.style.display = 'block';
    cmp3.style.display = 'block';
    cmp4.style.display = 'block';



  }


  


 })



 

