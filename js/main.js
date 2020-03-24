let button = document.querySelector('button')
let greeting = document.getElementById('greeting')
let punch = document.getElementById('punch')
let smile = document.getElementById('smile')


button.addEventListener("click",()=> {
  greeting.style.opacity = "1"
  greeting.style.transition = "all 1s"
  setTimeout(()=>{
    punch.style.opacity = "1"
    punch.style.transition = "all 1s"
  }, 1000)
  setTimeout(()=>{
    smile.style.opacity = "1"
    smile.style.transition = "all 1s"
  }, 2300)
})

