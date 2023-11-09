const next = document.getElementById("next")
const Previous = document.getElementById("Previous")
const slider = document.getElementById('slider')
const TxtSlider = document.getElementById("TextSlider")
var i = 0
next.addEventListener('click', () => {
     // this is the button controler
     if (i <= 2) {
          i++
          console.log(i)
     }
     if (i >= 2) {
          next.disabled = true
          next.style.opacity = '0.3'
     } else {
          next.disabled = false
          next.style.opacity = '1'
     }
     if (i <= 0) {
          Previous.disabled = true
          Previous.style.opacity = '0.3'
     } else {
          Previous.disabled = false
          Previous.style.opacity = '1'
     }
     var img1 = slider.getElementsByClassName(`pic-${i}`)[0]
     img1.classList.add('active')
     let v = i+1
     var z = i+2
     
   
     if(v<=2){
          var img2 = slider.getElementsByClassName(`pic-${v}`)[0]
          img2.classList.add('active-slide-1')
     }
     else{
          var img3 = slider.getElementsByClassName(`pic-${v}`)[0]
          console.log(img3)
          img3.classList.add('active-slide-3')
     }
     if(z<=3){
          var img3 = slider.getElementsByClassName(`pic-${z}`)[0]
           console.log(img3)
          img3.classList.add('active-slide-2')
     }
     
     TxtSlider.style.transform = `translateX(-${i}00%)`
    
   


})
Previous.addEventListener('click', () => {
     if (i <= 3) {
          i--
          console.log(i+1)
     }
     if (i <= 0) {
          Previous.disabled = true
          Previous.style.opacity = '0.3'
     }
     if (i >= 3) {
          next.disabled = true
          next.style.opacity = '0.3'
     } else {
          next.disabled = false
          next.style.opacity = '1'
     }
     let img1  = slider.getElementsByClassName(`pic-${i+1}`)[0]
     img1.classList.remove('active')
     let v = i+2
     var z = i+3
     
   
     if(v<=2){
          var img2 = slider.getElementsByClassName(`pic-${v}`)[0]
          console.log(img2)
          img2.classList.remove('active-slide-1')
     }
     else{
          var img3 = slider.getElementsByClassName(`pic-${v}`)[0]
          img3.classList.remove('active-slide-3')
     }
     if(z<=3){
          var img3 = slider.getElementsByClassName(`pic-${z}`)[0]
           console.log(img3)
          img3.classList.remove('active-slide-2')
     }
     TxtSlider.style.transform = `translateX(-${i}00%)`
})
if (i <= 0) {
     Previous.disabled = true
     Previous.style.opacity = '0.3'
}
if (i > 1) {
     Previous.disabled = false
     Previous.style.opacity = '1'
}

