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
  button.classList.add('next')

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
    nextSection.classList.add('read')

    let newButton = createButton()
    nextSection.appendChild(newButton)
  }
}