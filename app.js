


document.addEventListener('DOMContentLoaded', () => {


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
  let cmp1Good = document.getElementById('cmp1Good')
  let cmp2Good = document.getElementById('cmp2Good')
  let cmp3Good = document.getElementById('cmp3Good')
  let cmp4Good = document.getElementById('cmp4Good')
  let cmp5Good = document.getElementById('cmp5Good')
  let vmp1 = document.getElementById('vmp1')
  let vmp2 = document.getElementById('vmp2')
  let vmp3 = document.getElementById('vmp3')
  let vmp4 = document.getElementById('vmp4')
  let vmp5 = document.getElementById('vmp5')
  let smallDiv1 = document.getElementById('section1')
  let smallDiv = document.getElementById('section')
  let rotateCon1 = document.getElementById('rotate-con1')
  let rotateCon2 = document.getElementById('rotate-con2')
  let rotateCon3 = document.getElementById('rotate-con3')
  let rotateCon4 = document.getElementById('rotate-con4')
  let rotateCon5 = document.getElementById('rotate-con5')
  let vmpDot1 = document.getElementById('vmpDot1')
  let vmpDot2 = document.getElementById('vmpDot2')
  let vmpDot3 = document.getElementById('vmpDot3')
  let vmpDot4 = document.getElementById('vmpDot4')
  let vmpDot5 = document.getElementById('vmpDot5')
  let goodDiv1 = document.getElementById('goodDiv1')
  let goodDiv2 = document.getElementById('goodDiv2')
  let goodDiv3 = document.getElementById('goodDiv3')
  let goodDiv4 = document.getElementById('goodDiv4')
  let goodDiv5 = document.getElementById('goodDiv5')
 let cmp1Customize = document.getElementById('cmp1Customize')
 let cmp2Customize = document.getElementById('cmp2Customize')
 let cmp3Customize = document.getElementById('cmp3Customize')
 let cmp4Customize = document.getElementById('cmp4Customize')
 let cmp5Customize = document.getElementById('cmp5Customize')
 let dot1 = document.getElementById('dot1')
 let dot2 = document.getElementById('dot2')
 let dot3 = document.getElementById('dot3')
 let dot4 = document.getElementById('dot4')
 let dot5 = document.getElementById('dot5')
let smallLoader = document.getElementById('small-loader')
let smallLoader1 = document.getElementById('small-loader1')



 const checkloading = {
  isloading:0,

  calculatewidth: function (num){
    this.isloading = this.isloading + num
  }
 }

 const checkloadingminus = {
  isloadingminus:0,

  calculatewidth: function (num){
    this.isloading = this.isloading - num
  }
 }




 cmp1Good.addEventListener('click' , () => {
let stylcmp1Good = window.getComputedStyle(cmp1Good)
 
   if(stylcmp1Good.display === 'block'){
    cmp1Good.style.display = 'none'
   }


   if(stylcmp1Good.display === 'none'){
    dot1.style.display = 'block'
    goodDiv1.style.display = 'none'
    vmpDot1.style.display = 'block'
   }


   checkloadingminus.calculatewidth(18)
   smallLoader.style.width = checkloading.isloading   + 'px'
   smallLoader1.style.width = checkloading.isloading   + 'px'
 })



 cmp2Good.addEventListener('click' , () => {
let stylcmp2Good = window.getComputedStyle(cmp2Good)
 
   if(stylcmp2Good.display === 'block'){
    cmp2Good.style.display = 'none'
   }


   if(stylcmp2Good.display === 'none'){
    dot2.style.display = 'block'
    goodDiv2.style.display = 'none'
    vmpDot2.style.display = 'block'
   }
   checkloadingminus.calculatewidth(18)
   smallLoader.style.width = checkloading.isloading   + 'px'
   smallLoader1.style.width = checkloading.isloading   + 'px'
 })


 cmp3Good.addEventListener('click' , () => {
let stylcmp3Good = window.getComputedStyle(cmp3Good)
 
   if(stylcmp3Good.display === 'block'){
    cmp3Good.style.display = 'none'
   }


   if(stylcmp3Good.display === 'none'){
    dot3.style.display = 'block'
    goodDiv3.style.display = 'none'
    vmpDot3.style.display = 'block'
   }
   checkloadingminus.calculatewidth(18)
   smallLoader.style.width = checkloading.isloading   + 'px'
   smallLoader1.style.width = checkloading.isloading   + 'px'

 })

 cmp4Good.addEventListener('click' , () => {
let stylcmp4Good = window.getComputedStyle(cmp4Good)
 
   if(stylcmp4Good.display === 'block'){
    cmp4Good.style.display = 'none'
   }


   if(stylcmp4Good.display === 'none'){
    dot4.style.display = 'block'
    goodDiv4.style.display = 'none'
    vmpDot4.style.display = 'block'
   }

   checkloadingminus.calculatewidth(18)
   smallLoader.style.width = checkloading.isloading   + 'px'
   smallLoader1.style.width = checkloading.isloading   + 'px'

 })
 cmp5Good.addEventListener('click' , () => {
let stylcmp5Good = window.getComputedStyle(cmp5Good)
 
   if(stylcmp5Good.display === 'block'){
    cmp5Good.style.display = 'none'
   }


   if(stylcmp5Good.display === 'none'){
    dot5.style.display = 'block'
    goodDiv5.style.display = 'none'
    vmpDot5.style.display = 'block'
   }

   checkloadingminus.calculatewidth(18)
   smallLoader.style.width = checkloading.isloading   + 'px'
   smallLoader1.style.width = checkloading.isloading   + 'px'

 })







goodDiv1.addEventListener('click' , () => {
  let stylegoodDiv1 = window.getComputedStyle(goodDiv1)
 
   
  
  if(stylegoodDiv1.display === 'block'){
    goodDiv1.style.display = 'none'
  }

  if(stylegoodDiv1.display === 'none'){
     vmpDot1.style.display = 'block'
     cmp1Good.style.display = 'none'
     dot1.style.display = 'block'
     }

 
     checkloading.calculatewidth(18)
     smallLoader.style.width = checkloading.isloading -18 + 'px'
     smallLoader1.style.width = checkloading.isloading -18 + 'px'

})

goodDiv2.addEventListener('click' , () => {
  let stylegoodDiv2 = window.getComputedStyle(goodDiv2)
  stylevmpDot2 = window.getComputedStyle(vmpDot2)
   
  
  if(stylegoodDiv2.display === 'block'){
    goodDiv2.style.display = 'none'
  }

  if(stylegoodDiv2.display === 'none'){
     vmpDot2.style.display = 'block'
     cmp2Good.style.display = 'none'
     dot2.style.display = 'block'
     }

     checkloading.calculatewidth(18)
     smallLoader.style.width = checkloading.isloading -18 + 'px'
     smallLoader1.style.width = checkloading.isloading -18 + 'px'


})

goodDiv3.addEventListener('click' , () => {
  let stylegoodDiv3 = window.getComputedStyle(goodDiv3)
  stylevmpDot3 = window.getComputedStyle(vmpDot3)
   
  
  if(stylegoodDiv3.display === 'block'){
    goodDiv3.style.display = 'none'
  }

  if(stylegoodDiv3.display === 'none'){
     vmpDot3.style.display = 'block'
     cmp3Good.style.display = 'none'
     dot3.style.display = 'block'
     }


     checkloading.calculatewidth(18)
     smallLoader.style.width = checkloading.isloading -18 + 'px'
     smallLoader1.style.width = checkloading.isloading -18 + 'px'
 


})

goodDiv4.addEventListener('click' , () => {
  let stylegoodDiv4 = window.getComputedStyle(goodDiv4)
  stylevmpDot4 = window.getComputedStyle(vmpDot4)
   
  
  if(stylegoodDiv4.display === 'block'){
    goodDiv4.style.display = 'none'
  }

  if(stylegoodDiv4.display === 'none'){
     vmpDot4.style.display = 'block'
     cmp4Good.style.display = 'none'
     dot4.style.display = 'block'
     }

     checkloading.calculatewidth(18)
     smallLoader.style.width = checkloading.isloading -18 + 'px'
     smallLoader1.style.width = checkloading.isloading -18 + 'px'


})
goodDiv5.addEventListener('click' , () => {
  let stylegoodDiv5 = window.getComputedStyle(goodDiv5)
  stylevmpDot5 = window.getComputedStyle(vmpDot5)
   
  
  if(stylegoodDiv5.display === 'block'){
    goodDiv5.style.display = 'none'
  }

  if(stylegoodDiv5.display === 'none'){
     vmpDot5.style.display = 'block'
     cmp5Good.style.display = 'none'
     dot5.style.display = 'block'
     }

 
     checkloading.calculatewidth(18)
     smallLoader.style.width = checkloading.isloading -18 - 'px'
     smallLoader1.style.width = checkloading.isloading -18 - 'px'

})






 




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
 

 vmpDot1.addEventListener('click', () => {
 let stylevmpDot1 = window.getComputedStyle(vmpDot1)
let stylerotate1 = window.getComputedStyle(rotateCon1)
let Stylevmp1 = window.getComputedStyle(vmp1)


   if(stylevmpDot1.display === 'block'){
    vmpDot1.style.display = 'none'
   }

   if(stylevmpDot1.display === 'none'){
    rotateCon1.style.display = 'block'
    goodDiv1.style.display = 'none'
    cmp1Good.style.display = 'block'
    dot1.style.display = 'none'
   }

 

   setTimeout(() => {
    if (stylerotate1.display === 'block'){
     rotateCon1.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp1.display === 'block') {  
   goodDiv1.style.display = 'block'
  }
 
 }, 300);


 checkloading.calculatewidth(18)
 smallLoader.style.width = checkloading.isloading + 'px'
 smallLoader1.style.width = checkloading.isloading + 'px'

 })



 vmpDot2.addEventListener('click', () => {
 let stylevmpDot2 = window.getComputedStyle(vmpDot2)
let stylerotate2 = window.getComputedStyle(rotateCon2)
let Stylevmp2 = window.getComputedStyle(vmp2)


   if(stylevmpDot2.display === 'block'){
    vmpDot2.style.display = 'none'
   }

   if(stylevmpDot2.display === 'none'){
    rotateCon2.style.display = 'block'
    goodDiv2.style.display = 'none'
    dot2.style.display = 'none'
    cmp2Good.style.display = 'block'
   }


   setTimeout(() => {
    if (stylerotate2.display === 'block'){
     rotateCon2.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp2.display === 'block') {  
   goodDiv2.style.display = 'block'
  }
 
 }, 300);



 checkloading.calculatewidth(18)
 smallLoader.style.width = checkloading.isloading + 'px'
 smallLoader1.style.width = checkloading.isloading + 'px'
 })




 vmpDot3.addEventListener('click', () => {
 let stylevmpDot3 = window.getComputedStyle(vmpDot3)
let stylerotate3 = window.getComputedStyle(rotateCon3)
let Stylevmp3 = window.getComputedStyle(vmp3)


   if(stylevmpDot3.display === 'block'){
    vmpDot3.style.display = 'none'
   }

   if(stylevmpDot3.display === 'none'){
    rotateCon3.style.display = 'block'
    goodDiv3.style.display = 'none'
    dot3.style.display = 'none'
    cmp3Good.style.display = 'block'
   }


   setTimeout(() => {
    if (stylerotate3.display === 'block'){
     rotateCon3.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp3.display === 'block') {  
   goodDiv3.style.display = 'block'
  }
 
 }, 300);


 checkloading.calculatewidth(18)
 smallLoader.style.width = checkloading.isloading + 'px'
 smallLoader1.style.width = checkloading.isloading + 'px'

 })



 vmpDot4.addEventListener('click', () => {
 let stylevmpDot4 = window.getComputedStyle(vmpDot4)
let stylerotate4 = window.getComputedStyle(rotateCon4)
let Stylevmp4 = window.getComputedStyle(vmp4)


   if(stylevmpDot4.display === 'block'){
    vmpDot4.style.display = 'none'
   }

   if(stylevmpDot4.display === 'none'){
    rotateCon4.style.display = 'block'
   
    goodDiv4.style.display = 'none'
    dot4.style.display = 'none'
    cmp4Good.style.display = 'block'
   }


   setTimeout(() => {
    if (stylerotate4.display === 'block'){
     rotateCon4.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp4.display === 'block') {  
   goodDiv4.style.display = 'block'
  }
 
 }, 300);



 checkloading.calculatewidth(18)
 smallLoader.style.width = checkloading.isloading + 'px'
 smallLoader1.style.width = checkloading.isloading + 'px'
 })


 vmpDot5.addEventListener('click', () => {
 let stylevmpDot5 = window.getComputedStyle(vmpDot5)
let stylerotate5 = window.getComputedStyle(rotateCon5)
let Stylevmp5 = window.getComputedStyle(vmp5)


   if(stylevmpDot5.display === 'block'){
    vmpDot5.style.display = 'none'
   }

   if(stylevmpDot5.display === 'none'){
    rotateCon5.style.display = 'block'
    goodDiv5.style.display = 'none'
    dot5.style.display = 'none'
    cmp5Good.style.display = 'block'
   }


   setTimeout(() => {
    if (stylerotate5.display === 'block'){
     rotateCon5.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp5.display === 'block') {  
   goodDiv5.style.display = 'block'
  }
 
 }, 300);



 checkloading.calculatewidth(18)
 smallLoader.style.width = checkloading.isloading + 'px'
 smallLoader1.style.width = checkloading.isloading + 'px'
 })

 
  
 cmp1Customize.addEventListener('click', () => {
     
   let stylegood1 = window.getComputedStyle(cmp1Good)
   let Stylecmp1 = window.getComputedStyle(cmp1)
   let Stylevmp1 = window.getComputedStyle(vmp1)
   let styleDot1 = window.getComputedStyle(dot1)
 
 
   if(Stylecmp1.display === 'block'){
     cmp1.style.display = 'none'
 
   }
 
   if(Stylecmp1.display === 'none'){
     vmp1.style.display = 'block';
     rotateCon1.style.display = 'none'
    
     vmpDot1.style.display = 'none'
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

   if (stylegood1.display === 'block'){
    goodDiv1.style.display = 'block'
  }

  if (styleDot1.display === 'block'){
    vmpDot1.style.display = 'block'
  }

 })



 cmp2Customize.addEventListener('click', () => {
     
   let stylegood2 = window.getComputedStyle(cmp2Good)
   let Stylecmp2 = window.getComputedStyle(cmp2)
   let Stylevmp2 = window.getComputedStyle(vmp2)
   let styleDot2 = window.getComputedStyle(dot2)
 
 
   if(Stylecmp2.display === 'block'){
     cmp2.style.display = 'none'
 
   }
 
   if(Stylecmp2.display === 'none'){
     vmp2.style.display = 'block';
     rotateCon2.style.display = 'none'
    
     vmpDot2.style.display = 'none'
     smallDiv1.style.height = '449px'
     vmp1.style.display = 'none';
     vmp3.style.display = 'none';
 
     vmp4.style.display = 'none';
     vmp5.style.display = 'none';
 
     cmp1.style.display = 'block';
     cmp3.style.display = 'block';
     cmp4.style.display = 'block';
     cmp5.style.display = 'block';
   }

   if (stylegood2.display === 'block'){
    goodDiv2.style.display = 'block'
  }

  if (styleDot2.display === 'block'){
    vmpDot2.style.display = 'block'
  }

 })



 cmp3Customize.addEventListener('click', () => {
     
   let stylegood3 = window.getComputedStyle(cmp3Good)
   let Stylecmp3 = window.getComputedStyle(cmp3)
   let Stylevmp3 = window.getComputedStyle(vmp3)
   let styleDot3 = window.getComputedStyle(dot3)
 
 
   if(Stylecmp3.display === 'block'){
     cmp3.style.display = 'none'
 
   }
 
   if(Stylecmp3.display === 'none'){
     vmp3.style.display = 'block';
     rotateCon3.style.display = 'none'
    
     vmpDot3.style.display = 'none'
     smallDiv1.style.height = '467px'
     vmp1.style.display = 'none';
     vmp2.style.display = 'none';
 
     vmp4.style.display = 'none';
     vmp5.style.display = 'none';
 
     cmp1.style.display = 'block';
     cmp2.style.display = 'block';
     cmp4.style.display = 'block';
     cmp5.style.display = 'block';
   }

   if (stylegood3.display === 'block'){
    goodDiv3.style.display = 'block'
  }

  if (styleDot3.display === 'block'){
    vmpDot3.style.display = 'block'
  }

 })


 cmp4Customize.addEventListener('click', () => {
     
   let stylegood4 = window.getComputedStyle(cmp4Good)
   let Stylecmp4 = window.getComputedStyle(cmp4)
   let Stylevmp4 = window.getComputedStyle(vmp4)
   let styleDot4 = window.getComputedStyle(dot4)
 
 
   if(Stylecmp4.display === 'block'){
     cmp4.style.display = 'none'
 
   }
 
   if(Stylecmp4.display === 'none'){
     vmp4.style.display = 'block';
     rotateCon4.style.display = 'none'
    
     vmpDot4.style.display = 'none'
     smallDiv1.style.height = '467px'
     vmp1.style.display = 'none';
     vmp2.style.display = 'none';
 
     vmp3.style.display = 'none';
     vmp5.style.display = 'none';
 
     cmp1.style.display = 'block';
     cmp2.style.display = 'block';
     cmp3.style.display = 'block';
     cmp5.style.display = 'block';
   }

   if (stylegood4.display === 'block'){
    goodDiv4.style.display = 'block'
  }

  if (styleDot4.display === 'block'){
    vmpDot4.style.display = 'block'
  }

 })
 cmp4Customize.addEventListener('click', () => {
     
   let stylegood4 = window.getComputedStyle(cmp4Good)
   let Stylecmp4 = window.getComputedStyle(cmp4)
   let Stylevmp4 = window.getComputedStyle(vmp4)
   let styleDot4 = window.getComputedStyle(dot4)
 
 
   if(Stylecmp4.display === 'block'){
     cmp4.style.display = 'none'
 
   }
 
   if(Stylecmp4.display === 'none'){
     vmp4.style.display = 'block';
     rotateCon4.style.display = 'none'
    
     vmpDot4.style.display = 'none'
     smallDiv1.style.height = '467px'
     vmp1.style.display = 'none';
     vmp2.style.display = 'none';
 
     vmp3.style.display = 'none';
     vmp5.style.display = 'none';
 
     cmp1.style.display = 'block';
     cmp2.style.display = 'block';
     cmp3.style.display = 'block';
     cmp5.style.display = 'block';
   }

   if (stylegood4.display === 'block'){
    goodDiv4.style.display = 'block'
  }

  if (styleDot4.display === 'block'){
    vmpDot4.style.display = 'block'
  }

 })

 cmp5Customize.addEventListener('click', () => {
     
   let stylegood5 = window.getComputedStyle(cmp5Good)
   let Stylecmp5 = window.getComputedStyle(cmp5)
   let Stylevmp5 = window.getComputedStyle(vmp5)
   let styleDot5 = window.getComputedStyle(dot5)
 
 
   if(Stylecmp5.display === 'block'){
     cmp5.style.display = 'none'
 
   }
 
   if(Stylecmp5.display === 'none'){
     vmp5.style.display = 'block';
     rotateCon5.style.display = 'none'
    
     vmpDot5.style.display = 'none'
     smallDiv1.style.height = '467px'
     vmp1.style.display = 'none';
     vmp2.style.display = 'none';
 
     vmp3.style.display = 'none';
     vmp4.style.display = 'none';
 
     cmp1.style.display = 'block';
     cmp2.style.display = 'block';
     cmp3.style.display = 'block';
     cmp4.style.display = 'block';
   }

   if (stylegood5.display === 'block'){
    goodDiv5.style.display = 'block'
  }

  if (styleDot5.display === 'block'){
    vmpDot5.style.display = 'block'
  }

 })

 
 

 


 dotsmall1.addEventListener('click', () => {
 
   let stylegood1 = window.getComputedStyle(cmp1Good)
  let Stylecmp1 = window.getComputedStyle(cmp1)
  let Stylevmp1 = window.getComputedStyle(vmp1)
  let stylesection1 = window.getComputedStyle(section1)
  let stylerotate1 = window.getComputedStyle(rotateCon1)


  if(Stylecmp1.display === 'block'){
    cmp1.style.display = 'none'

  }

  if(Stylecmp1.display === 'none'){
    vmp1.style.display = 'block';
     
    cmp1Good.style.display = 'block'
    goodDiv1.style.display = 'none'
    dot1.style.display = 'none'
    rotateCon1.style.display = 'block'
   
    vmpDot1.style.display = 'none'
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


  setTimeout(() => {
    if (stylerotate1.display === 'block'){
     rotateCon1.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp1.display === 'block') {  
   goodDiv1.style.display = 'block'
  }
 
 }, 300);


})



  


  


 dotsmall2.addEventListener('click', () => {
  let Stylecmp2 = window.getComputedStyle(cmp2)
  let Stylevmp2 = window.getComputedStyle(vmp2)
  let stylerotate2 = window.getComputedStyle(rotateCon2)
  let stylegood2 = window.getComputedStyle(cmp2Good)


  if(Stylecmp2.display === 'block'){
    cmp2.style.display = 'none'

  }

  if(Stylecmp2.display === 'none'){
    vmp2.style.display = 'block';
    rotateCon2.style.display = 'block'
    cmp2Good.style.display = 'block'
    dot2.style.display = 'none'
    vmpDot2.style.display = 'none'
    smallDiv1.style.height = '485px'
    vmp3.style.display = 'none';
    vmp4.style.display = 'none';
    vmp4.style.display = 'none';
    vmp1.style.display = 'none';
  

    cmp1.style.display = 'block';
    cmp3.style.display = 'block';
    cmp4.style.display = 'block';
    cmp4.style.display = 'block';

  }

setTimeout(() => {
    if (stylerotate2.display === 'block'){
     rotateCon2.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp2.display === 'block')   {
   goodDiv2.style.display = 'block'
  }

 },300);


 })



  /*if(stylegood2.display === 'block'){
    vmpDot2.style.display = 'none'
    goodDiv2.style.display = 'block'
    
  }
*/
 








 dotsmall3.addEventListener('click', () => {
  let Stylecmp3 = window.getComputedStyle(cmp3)
  let Stylevmp3 = window.getComputedStyle(vmp3)
  let stylerotate3 = window.getComputedStyle(rotateCon3)
  
  if(Stylecmp3.display === 'block'){
    cmp3.style.display = 'none'

  }

  if(Stylecmp3.display === 'none'){
    vmp3.style.display = 'block';
    cmp3Good.style.display = 'block'
    dot3.style.display = 'none'
    rotateCon3.style.display = 'block'
    vmpDot3.style.display = 'none'
    goodDiv3.style.display = 'none'
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


  

 
  setTimeout(() => {
    if (stylerotate3.display === 'block'){
     rotateCon3.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp3.display === 'block')   {
   goodDiv3.style.display = 'block'
  }

 },300);
 


 })




 dotsmall4.addEventListener('click', () => {
  let Stylecmp4 = window.getComputedStyle(cmp4)
  let Stylevmp4 = window.getComputedStyle(vmp4)
  let stylerotate4 = window.getComputedStyle(rotateCon4)
  
  if(Stylecmp4.display === 'block'){
    cmp4.style.display = 'none'

  }

  if(Stylecmp4.display === 'none'){
    vmp4.style.display = 'block';
    cmp4Good.style.display = 'block'
    dot4.style.display = 'none'
    vmpDot4.style.display = 'none'
    rotateCon4.style.display = 'block'
    goodDiv4.style.display = 'none'
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


  setTimeout(() => {
    if (stylerotate4.display === 'block'){
     rotateCon4.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp4.display === 'block')   {
   goodDiv4.style.display = 'block'
  }

 },300);
 
 

 })





 dotsmall5.addEventListener('click', () => {
  let Stylecmp5 = window.getComputedStyle(cmp5)
  let Stylevmp5 = window.getComputedStyle(vmp5)
  let stylerotate5 = window.getComputedStyle(rotateCon5)
  
  if(Stylecmp5.display === 'block'){
    cmp5.style.display = 'none'

  }

  if(Stylecmp5.display === 'none'){
    vmp5.style.display = 'block';
    rotateCon5.style.display = 'block'
    cmp5Good.style.display = 'block'
    dot5.style.display = 'none'
    goodDiv5.style.display = 'none'
    vmpDot5.style.display = 'none'
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


  
  setTimeout(() => {
    if (stylerotate5.display === 'block'){
     rotateCon5.style.display = 'none'
   }
 },300);
   
 
 setTimeout(() => {
  if(Stylevmp5.display === 'block')   {
   goodDiv5.style.display = 'block'
  }

 },300);
 


 })



 






})
