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