let section = document.getElementById('section') 
let section1 = document.getElementById('section1')
let hideArrow = document.getElementById('arrow1')
let arrow = document.getElementById('arrow')

 
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
 