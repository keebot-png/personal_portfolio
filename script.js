const menuIcon = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-list-menu');
const menuBar = document.querySelector('.nav-menu');
const navMain = document.getElementsByClassName('nav-link');

menuIcon.addEventListener('click', () => {
  menuBar.classList.toggle('active');
  navBar.classList.toggle('change');
  menuIcon.classList.toggle('modify');
});

function close() {
  menuBar.classList.remove('active');
  menuIcon.classList.remove('modify');
  navBar.classList.remove('change');
}

function closeScreen() {
  for (let i = 0; i < navMain.length; i += 1) {
    navMain[i].addEventListener('click', close);
  }
}

menuIcon.addEventListener('click', closeScreen);

// Card array
const popData = [
  {
    classNO: 'n1',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
  {
    classNO: 'n2',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
  {
    classNO: 'n3',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
  {
    classNO: 'n4',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
  {
    classNO: 'n5',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
  {
    classNO: 'n6',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['Ruby on Rails', 'CSS', 'Javascript', 'HTML'],
    Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    githubIcon: './images/github-log.svg',
    liveIcon: './images/live-icon.svg',
    ProjectLink: 'https://keebot-png.github.io/personal_portfolio/',
    GitHubLink: 'https://github.com/keebot-png/personal_portfolio',
  },
];

// Adding Modal dynamically
const modal = document.querySelector('.modal');

// eslint-disable-next-line no-unused-vars
function modalSection(data) {
  modal.style.display = 'flex';
  modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-top">
                <h2>&times</h2>
            </div>
            <div class="modal-middle-1"></div>
            <div class="modal-heading">
                <div class="modal-contain">
                    <h2>${popData[data].Subtitle}</h2>
                    <ul class="modal-list">
                    ${popData[data].Technologies.map((id) => `<li>${id}</>`)}
                    </ul>
                </div>
                <div class="buttons">
                    <button class="modal-11" onclick="window.location.href='${popData[data].ProjectLink}'">See live <img src="${popData[data].liveIcon}" alt="live logo icon"></button>
                    <button class="modal-12" onclick="window.location.href='${popData[data].GitHubLink}'">See Source <img src="${popData[data].githubIcon}" alt="github logo"></button>
                </div>
            </div>
            
            <div class="modal-bottom">
                <p>${popData[data].Description}</p>
            </div>
            <div class="buttons-1">
                <button class="modal-11" onclick="window.location.href='${popData[data].ProjectLink}'">See live <img src="${popData[data].liveIcon}" alt="live logo icon"></button>
                <button class="modal-12" onclick="window.location.href='${popData[data].GitHubLink}'">See Source <img src="${popData[data].githubIcon}" alt="github logo"></button>
            </div>
        </div>
    </div>
  `;
  // Adding event listeners to respective buttons

  const modalCloseButton = document.querySelector('.modal-top');
  function toggleModal() {
    if (getComputedStyle(modal).display === 'flex') {
      modal.classList.add('modal-hide');
      setTimeout(() => {
        modal.style.display = 'none';
        modal.classList.remove('modal-show', 'modal-hide');
      }, 200);
    } else {
      modal.style.display = 'flex';
      modal.classList.add('modal-show');
    }
  }

  modalCloseButton.addEventListener('click', () => toggleModal());

  modal.addEventListener('click', (event) => {
    if (event.currentTarget === event.target) toggleModal();
  });
}

// Adding work cards dynamically
const workProfile = document.querySelector('.work-profiles-10');

for (let i = 0; i < 3; i += 1) {
  workProfile.innerHTML += `
  <div class="work-profile-1 ${popData[i].classNO}">
  <div class="works-text">
      <div class="works-title">
          <h3>
          Multi-Post Stories<br>
          Gain+Glory
          </h3>
      </div>
      <div class="works-tags">
          <ul class="tags">
              <li class="tech-tag">Ruby on Rails</li>
              <li class="tech-tag">CSS</li>
              <li class="tech-tag">Javascript</li>
              <li class="tech-tag">HTML</li>
          </ul>
      </div>
      <div class="works-cta">
          <button type="submit" class="project-button" onclick="modalSection(${i})">
              See Project
          </button>
      </div>
  </div>
</div>
  `;
}

const workProfile2 = document.querySelector('.work-profiles-20');

for (let i = 3; i < popData.length; i += 1) {
  workProfile2.innerHTML += `
  <div class="work-profile-1 ${popData[i].classNO}">
  <div class="works-text">
      <div class="works-title">
          <h3>
          Multi-Post Stories<br>
          Gain+Glory
          </h3>
      </div>
      <div class="works-tags">
          <ul class="tags">
              <li class="tech-tag">Ruby on Rails</li>
              <li class="tech-tag">CSS</li>
              <li class="tech-tag">Javascript</li>
              <li class="tech-tag">HTML</li>
          </ul>
      </div>
      <div class="works-cta">
          <button type="submit" class="project-button" onclick="modalSection(${i})">
              See Project
          </button>
      </div>
  </div>
</div>
  `;
}

const formSubmit = document.querySelector('.button-submit-1');

// Checking if the email is valid

const isEmailValid = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};

// Form validation

formSubmit.addEventListener('click', (event) => {
  const emailValid = document.getElementById('email').value;
  if (!isEmailValid(emailValid)) {
    document.querySelector('.label').innerHTML = 'Kindly enter the email in lowercase';
    event.preventDefault();
  } else {
    document.querySelector('.label').innerHTML = '';
  }
});

//local storage project

const form = document.querySelector('form');
const body = document.querySelector('body');
const nameValue = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('#message');

const recievingData = localStorage.getItem('myUserInfo');

body.onload = () => {
  if (recievingData) {
    const objectToString = JSON.parse(recievingData);
    nameValue.value = objectToString.name;
    emailInput.value = objectToString.email;
    msg.value = objectToString.message;
  }
};

document.querySelectorAll('input').forEach((input) => {
  input.addEventListener('input', (event) => {
    event.preventDefault();
    //Calling input values
const nameInfo = document.querySelector('#name').value;
const emailInfo = document.querySelector('#email').value;
const msgInfo = document.querySelector('#message').value;

// Store values in object;
const userInfo = {
  name: nameInfo,
  email: emailInfo,
  message: msgInfo,
};
