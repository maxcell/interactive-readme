document.addEventListener('DOMContentLoaded', function(event){
  // Global Navigation
  document.querySelector('main').addEventListener('click', globalNavigationListener)
  
  // Initialize button
  const button = createButton()
  let startSection = document.querySelector('section')
  startSection.appendChild(button)
})

function createButton(){ 
  let button = document.createElement('button')
  button.innerText = 'Next'
  button.style.width = '75px'
  button.style.height = '25px'
  button.style.backgroundColor = 'green'
  button.style.color = 'white'

  return button
}

function globalNavigationListener(event) {
  // Navigating Forward

  if(event.target.innerText === 'Next') {
    const nextButton = event.target
    const currentSection = nextButton.parentNode
    if(currentSection.tagName === 'SECTION'){
      nextButton.remove()
      navigateNext(currentSection)
    }
  }
}

function navigateNext(currentSection) {
  const nextSection = currentSection.nextElementSibling
  if(!!nextSection && nextSection.tagName === 'SECTION') {
    nextSection.id = 'active'
    currentSection.id = ''

    let newButton = createButton()
    nextSection.appendChild(newButton)
  }
}