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
    Project_name: 'Meals API',
    Subtitle: 'JavaScript meals API project',
    Technologies: ['CSS', 'Javascript', 'HTML'],
    Description: 'This project is built around the MealDB API using HTML5, CSS, and JavaScript. You can view various types of dishes and meals, and moreover, you can interact with the meal list by giving them a like or adding some comments about them.',
    thumbnail: './Images/card_images/restuarant-meal.png',
    ProjectLink: 'https://graceabike.github.io/JavaScript-Capstone-Project/dist/index.html',
    GitHubLink: 'https://github.com/keebot-png/JavaScript-Capstone-Project',
  },
  {
    Project_name: 'React calculator',
    Subtitle: 'Math calculator build with React',
    Technologies: ['CSS', 'Javascript', 'React', 'Redux'],
    Description: "This web app lets users make simple calculations and also allows the user to see random quotes right from the application. It's built with React following a Single Page Application (SPA) approach.",
    thumbnail: './Images/card_images/react-calculator.png',
    ProjectLink: 'https://maths-calculator-quote.netlify.app/',
    GitHubLink: 'https://github.com/keebot-png/math-magicians-1',
  },
  {
    Project_name: 'Tech conference website',
    Subtitle: 'Conference website to promote a tech event',
    Technologies: ['Bootstrap', 'CSS', 'Javascript', 'HTML'],
    Description: 'This is the first capstone project of the Microverse course, which involves promoting an online tech event showcasing the latest technologies. This website encompasses everything that we learned in the first module and was built using Bootstrap.',
    thumbnail: './Images/card_images/tech-conference.png',
    ProjectLink: 'https://keebot-png.github.io/Capstone-project-1/',
    GitHubLink: 'https://github.com/keebot-png/Capstone-project-1',
  },
  {
    Project_name: 'Space travel project',
    Subtitle: 'Space Travel project with React and Redux',
    Technologies: ['React', 'Redux', 'Javascript', 'Bootstrap'],
    Description: 'This website uses a real-life API from SpaceX and displays it. You are able to reserve a rocket and join missions which are displayed on your profile page.',
    thumbnail: './Images/card_images/falcon-app.png',
    ProjectLink: 'https://space-travel-site-react.netlify.app/',
    GitHubLink: 'https://github.com/keebot-png/Space-Travel-Project',
  },
  {
    Project_name: 'Ecommerce style React and Redux',
    Subtitle: 'Keeping track of \nhundreds of components',
    Technologies: ['React', 'CSS', 'Bootstrap', 'Redux'],
    Description: "This is a mobile app built using React and Redux as a state management system. It's an ecommerce store that displays product categories and the details of those specific products (e.g., size, brand, color, etc.). IMPORTANT: This app has only been designed for MOBILE use ONLY. I am currently modifying it to suit desktop as well.",
    thumbnail: './Images/card_images/shopping-site.png',
    ProjectLink: 'https://simple-shopping-app-react-redux.netlify.app/',
    GitHubLink: 'https://github.com/keebot-png/Shopping-Website',
  },
  {
    Project_name: 'Awesome Books JavaScript',
    Subtitle: 'Awesome Books JavaScript',
    Technologies: ['CSS', 'Javascript', 'HTML', 'Bootstrap'],
    Description: 'This is a basic website that allows you to add and remove books. Styling has been added to match the provided template using Bootstrap. Classes and methods were used in this project instead of objects and arrays. A functional Navbar, footer, and contact page were created. Each nav-item contains an onclick event listener containing a function that enables the user to switch to the corresponding page. Lastly, the timestamp below the navbar was added dynamically using JavaScript, showing the correct date and time.',
    thumbnail: './Images/card_images/awesome-books.png',
    ProjectLink: 'https://keebot-png.github.io/Awesome-Books-1/',
    GitHubLink: 'https://github.com/keebot-png/Awesome-Books-1',
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
            <div class="modal-middle-1"><img class='modal-img' src=${popData[data].thumbnail} /></div>
            <div class="modal-heading">
                <div class="modal-contain">
                    <h2>${popData[data].Subtitle}</h2>
                    <ul class="modal-list">
                    ${popData[data].Technologies.map((id) => `<li>${id}</>`)}
                    </ul>
                </div>
                <div class="buttons">
                <a href='${popData[data].ProjectLink}' target="_blank"
                rel="noopener" class="modal-11" target="_blank">See live</a>
                <a href='${popData[data].GitHubLink}' target="_blank"
                rel="noopener" class="modal-12 target="_blank">See Source</a>
                </div>
            </div>
            
            <div class="modal-bottom">
                <p>${popData[data].Description}</p>
            </div>
            <div class="buttons-1">
                <a href='${popData[data].ProjectLink}' target="_blank"
                rel="noopener" class="modal-11" target="_blank">See live</a>
                <a href='${popData[data].GitHubLink}' target="_blank"
                rel="noopener" class="modal-12 target="_blank">See Source</a>
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
  <div class="work-profile-1">
  <img class="work-img" style="${i === 2 ? 'width: ' : ''}" src=${popData[i].thumbnail} />
  <div class="works-text">
      <div class="works-title">
          <h3>
          ${popData[i].Project_name}
          </h3>
      </div>
      <div class="works-tags">
          <ul class="tags">
          ${popData[i].Technologies.map((id) => `<li class="tech-tag">${id}</>`)}
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
  <div class="work-profile-1">
  <img class="work-img" style="${i === 4 ? 'width: ' : ''}" src=${popData[i].thumbnail} />
  <div class="works-text">
      <div class="works-title">
          <h3>
          ${popData[i].Project_name}
          </h3>
      </div>
      <div class="works-tags">
          <ul class="tags">
          ${popData[i].Technologies.map((id) => `<li class="tech-tag">${id}</>`)}
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