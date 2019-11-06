document.addEventListener('DOMContentLoaded', function (event) {
  // Global Navigation
  document.querySelector('main').addEventListener('click', globalNavigationListener)

  // Initialize button
  let startSection = document.querySelector('section')
  createInteraction(startSection)
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
        <button class="submit" type="submit">Submit</button>
   </form>`)
  let newInput = section.querySelector('input');
  newInput.focus()
}

function createInteraction(section) {
  if (Array.from(section.classList).includes('interactive-text')) {
    createSubmission(section)
  } else {
    let newButton = createButton()
    section.appendChild(newButton)
    newButton.focus()
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
  } else if (Array.from(event.target.classList).includes('submit')) {
    const form = document.querySelector('.interaction');
    const currentSection = form.parentNode
    let answer = currentSection.dataset['answer']
    let submission = form.children[0].value;
    if (submission === answer) {
      form.remove()
      navigateNext(currentSection)
    }
  }
}

function navigateNext(currentSection) {
  const nextSection = currentSection.nextElementSibling
  if (!!nextSection && nextSection.tagName === 'SECTION') {
    debugger
    nextSection.classList.add('read')
    createInteraction(nextSection)
  }
}