const light = document.getElementById('light')
const dark = document.getElementById('dark')
const btn = document.getElementById('btn')
light.addEventListener('click', () => {
  document.body.style.backdropFilter='brightness(1)'
  document.body.style.color='white'
  dark.style.display='flex'
  light.style.display='none'
  btn.style.border='solid white 1px'

})
  
dark.addEventListener('click', () => {
  document.body.style.backdropFilter='brightness(2)'
  document.body.style.color='black'
  light.style.display='flex'
  light.style.marginLeft='0px'
  dark.style.display='none'
  btn.style.border='solid black 1px'
})
