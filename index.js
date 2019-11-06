document.addEventListener('DOMContentLoaded', function (event) {
  // Global Navigation
  document.querySelector('main').addEventListener('click', globalNavigationListener)

  // Initialize button
  const button = createButton()
  let startSection = document.querySelector('section')
  startSection.appendChild(button)
})

function createButton() {
  let button = document.createElement('button')
  button.innerText = 'Next'
  button.classList.add('next')

  return button
}

function createSubmission(section) {
  section.insertAdjacentHTML('beforeend',
    `<form class="interaction">
        <input type="text">
        <button type="submit">Submit</button>
   </form>`)
  let newForm = section.querySelector('form');
}

function createInteraction(section) {
  if (Array.from(section.classList).includes('interactive-text')) {
    createSubmission(section)
  } else {
    let newButton = createButton()
    section.appendChild(newButton)
  }
}

function globalNavigationListener(event) {
  // Navigating Forward
  event.preventDefault();

  if (event.target.innerText === 'Next') {
    const nextButton = event.target
    const currentSection = nextButton.parentNode
    if (currentSection.tagName === 'SECTION') {
      nextButton.remove()
      navigateNext(currentSection)
    }
  } else if (event.type === 'submit') {
    const form = document.querySelector('.interaction');
    const currentSection = form.parentNode
    if (currentSection.tagName === 'SECTION') {
      form.remove()
      navigateNext(currentSection)
    }
  }
}

function navigateNext(currentSection) {
  const nextSection = currentSection.nextElementSibling
  if (!!nextSection && nextSection.tagName === 'SECTION') {
    nextSection.classList.add('read')
    createInteraction(nextSection)
  }
}