const openNameModal = document.getElementById('personalData__name');
const closeNameModal = document.getElementById('personalData__signup-close');
const modalName = document.querySelector('.popup__phone');


openNameModal.addEventListener('click', () => {
  modalName.classList.add('open');
  document.body.style.overflow = 'hidden';
});
closeNameModal.addEventListener('click', () => {
  modalName.classList.remove('open')
  document.body.style.overflow = 'visible';
});

const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    const isActive = this.classList.contains("active");
    const activeAccordions = document.querySelectorAll(".accordion.active");
    activeAccordions.forEach((activeAccordion) => {
      activeAccordion.classList.remove("active");
      const activePanel = activeAccordion.nextElementSibling;
      activePanel.style.maxHeight = null;
      activePanel.classList.remove('active');
    });


    if (!isActive) {
      this.classList.add("active");
      const panel = this.nextElementSibling;
      panel.classList.toggle('active')
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

const chooseServerBtn = document.querySelector('.choose__server');
const serverDropdown = document.querySelector('.server__dropdown');

chooseServerBtn.addEventListener('click', () => {
  serverDropdown.classList.toggle('active')
})
const serverItems = document.querySelectorAll('.server-dropdown__item');
serverItems.forEach((item) => {
  item.addEventListener('click', () => {
    const serverName = item.querySelector('.server-dropdown-title').textContent;
    chooseServerBtn.textContent = serverName;
    serverDropdown.classList.remove('active')
  });
});


const languageItems = document.querySelectorAll('.language__item');
languageItems.forEach(item => {
  item.addEventListener('click', () => {
    const languageText = item.querySelector('.language').textContent;
    
    const chooseLanguage = document.querySelector('.language__choose');
  
    chooseLanguage.textContent = languageText;
  });
});
const ru = document.querySelector("#ru");
const en = document.querySelector("#en");
const ruFlag = document.querySelector('#ru-flag');
const engFlag = document.querySelector('#en-flag');

ru.addEventListener('click', () => {
  ruFlag.classList.add('active');
  engFlag.classList.remove('active');
});
en.addEventListener('click', () => {
  engFlag.classList.add('active');
  ruFlag.classList.remove('active');
});



const imageElement = document.querySelector(".burger__wrapper");
const navBurgerWrapper = document.querySelector('.popup__burger')
const burgerItems = document.querySelectorAll('.burger__item');

burgerItems.forEach((burgerItem) => {
  burgerItem.addEventListener('click', () => {
    navBurgerWrapper.classList.remove('open');
  })
})


imageElement.addEventListener("click",  () => {
  navBurgerWrapper.classList.toggle('open');
});



document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.form__wrapper');
  const serverSelection = document.querySelector('.choose__server');
  const loginInput = document.querySelector('.input__login');
  const emailInput = document.querySelector('.input__email');
  const passwordInput = document.querySelector('.input__password');
  const repeatPasswordInput = document.querySelector('.input__repeat-password');
  const checkbox = document.querySelector('.input__checkbox');

  form.addEventListener('submit', function (e) {
    resetErrors();
    const selectedServer = serverSelection.textContent.trim();
    const allowedServers = ['Neonville', 'Cyberlith', 'Aetheria', 'Technopolis', 'NeoTokyo'];
    const loginValue = loginInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const repeatPasswordValue = repeatPasswordInput.value.trim();



    if (loginValue === '' || selectedServer === 'Выберите сервер' || !allowedServers.includes(selectedServer) || emailValue === '' || passwordValue === '' || repeatPasswordValue === '' || !checkbox.checked) {
      if (selectedServer === 'Выберите сервер' || !allowedServers.includes(selectedServer)) {
        e.preventDefault();
        setError(serverSelection, 'Выберите сервер из списка.');
      }
      if (loginValue === '') {
        e.preventDefault();
        setError(loginInput, 'Введите логин.');
      }
  
      
      if (emailValue === '') {
        e.preventDefault();
        setError(emailInput, 'Введите почту.');
      }
  
      
      if (passwordValue === '') {
        e.preventDefault();
        setError(passwordInput, 'Введите пароль.');
      }
  
      
      if (repeatPasswordValue === '') {
        e.preventDefault();
        setError(repeatPasswordInput, 'Повторите пароль.');
      } else if (repeatPasswordValue !== passwordValue) {
        e.preventDefault();
        setError(repeatPasswordInput, 'Пароли не совпадают.');
      }

      if (!checkbox.checked) {
        e.preventDefault();
        setError(checkbox, 'Согласитесь с условиями пользования.');
      } 
    } else {
      modalName.classList.remove('open');
      form.reset();
      serverSelection.textContent = 'Выберите сервер';
    }
   
  });


  function resetErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(function (errorMessage) {
      errorMessage.style.display = 'none';
    });
  }
});
