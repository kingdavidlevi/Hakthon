let section = document.getElementById('section') 
let section1 = document.getElementById('section1')
let hideArrow = document.getElementById('arrow1')
let arrow = document.getElementById('arrow')
let cancel = document.getElementById('Extend-cancel')
let cancelContainer = document.getElementById('Extend-container')
let dot1 = document.getElementById('dot1')
let dot2 = document.getElementById('dot2')
let dot3 = document.getElementById('dot3')
let dot4 = document.getElementById('dot4')
let dot5 = document.getElementById('dot5')
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

hideArrow.addEventListener('click', () => {
  let sectionStyle = window.getComputedStyle(section1)

    if (sectionStyle.display === 'block'){
        section1.style.display = 'none'
    }

    if(sectionStyle.display === 'none'){
      section.style.display = 'block'
     }

})


 arrow.addEventListener('click', () => {
    let sectionStyle = window.getComputedStyle(section)


    if (sectionStyle.display === 'block'){
        section.style.display = 'none'
    }

   if(sectionStyle.display === 'none'){
    section1.style.display = 'block'
  
   }

 })
 

 cancel.addEventListener('click', () => {
  let container = window.getComputedStyle(cancelContainer)

if (container.display === 'block' ){
  
  cancelContainer.style.display = 'none'
}

})




 dot1.addEventListener('click', () => {
  let Stylecmp1 = window.getComputedStyle(cmp1)
  let Stylevmp1 = window.getComputedStyle(vmp1)

  if(Stylecmp1.display === 'block'){
    cmp1.style.display = 'none'

  }

  if(Stylecmp1.display === 'none'){
    vmp1.style.display = 'flex'
    vmp2.style.display = 'none'
    vmp3.style.display = 'none'
    vmp4.style.display = 'none'
    vmp5.style.display = 'none'

    cmp2.style.display = 'block'
    cmp3.style.display = 'block'
    cmp4.style.display = 'block'
    cmp5.style.display = 'block'



  }

 




 })




 dot2.addEventListener('click', () => {
  let Stylecmp2 = window.getComputedStyle(cmp2)
  let Stylevmp2 = window.getComputedStyle(vmp2)
  
  if(Stylecmp2.display === 'block'){
    cmp2.style.display = 'none'

  }

  if(Stylecmp2.display === 'none'){
    vmp2.style.display = 'flex'
    vmp3.style.display = 'none'
    vmp4.style.display = 'none'
    vmp5.style.display = 'none'
    vmp1.style.display = 'none'


    cmp1.style.display = 'block'
    cmp3.style.display = 'block'
    cmp4.style.display = 'block'
    cmp5.style.display = 'block'

  }

 


 })



 dot3.addEventListener('click', () => {
  let Stylecmp3 = window.getComputedStyle(cmp3)
  let Stylevmp3 = window.getComputedStyle(vmp3)
  
  if(Stylecmp3.display === 'block'){
    cmp3.style.display = 'none'

  }

  if(Stylecmp3.display === 'none'){
    vmp3.style.display = 'flex'
    vmp4.style.display = 'none'
    vmp5.style.display = 'none'
    vmp1.style.display = 'none'
    vmp2.style.display = 'none'


   
    cmp1.style.display = 'block'
    cmp2.style.display = 'block'
    cmp4.style.display = 'block'
    cmp5.style.display = 'block'
  }


  


 })




 dot4.addEventListener('click', () => {
  let Stylecmp4 = window.getComputedStyle(cmp4)
  let Stylevmp4 = window.getComputedStyle(vmp4)
  
  if(Stylecmp4.display === 'block'){
    cmp4.style.display = 'none'

  }

  if(Stylecmp4.display === 'none'){
    vmp4.style.display = 'flex'
    vmp3.style.display = 'none'
    vmp2.style.display = 'none'
    vmp5.style.display = 'none'
    vmp1.style.display = 'none'


      
    cmp1.style.display = 'block'
    cmp2.style.display = 'block'
    cmp3.style.display = 'block'
    cmp5.style.display = 'block'

  }


 

 })





 dot5.addEventListener('click', () => {
  let Stylecmp5 = window.getComputedStyle(cmp5)
  let Stylevmp5 = window.getComputedStyle(vmp5)
  
  if(Stylecmp5.display === 'block'){
    cmp5.style.display = 'none'

  }

  if(Stylecmp5.display === 'none'){
    vmp5.style.display = 'flex'
    vmp3.style.display = 'none'
    vmp2.style.display = 'none'
    vmp4.style.display = 'none'
    vmp1.style.display = 'none'


    cmp1.style.display = 'block'
    cmp2.style.display = 'block'
    cmp3.style.display = 'block'
    cmp4.style.display = 'block'

  }


  


 })



 

