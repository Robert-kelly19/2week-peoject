const light = document.getElementById('light')
const dark = document.getElementById('dark')
const btn = document.getElementById('btn')
light.addEventListener('click', () => {
  document.body.style.backgroundColor='black'
  document.body.style.color='white'
  dark.style.display='flex'
  light.style.display='none'
  btn.style.border='solid white 1px'

})

dark.addEventListener('click', () => {
  document.body.style.backgroundColor='white'
  document.body.style.color='black'
  light.style.display='flex'
  light.style.marginLeft='0px'
  btn.style.border='solid black 1px'
})