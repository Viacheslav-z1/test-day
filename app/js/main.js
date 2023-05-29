// $("#rateYo").rateYo({
//   rating: 3.6,
// });

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

/**tabs */


let tabs = document.querySelectorAll(".products__tab-btn");
let tabsContent = document.querySelectorAll(".products__list");

hideTabsContent(); 
removeActiveTabs();
showTab(0);

tabs.forEach((tab, i) => {
  tab.addEventListener('click',(e)=>{
    e.preventDefault();
    hideTabsContent();
    showTab(i); 
  })
});

function hideTabsContent() {
  tabsContent.forEach(tab => {
    tab.classList.add('none')
  });
}

function showTab(index) {
  tabsContent[index].classList.remove('none');
  removeActiveTabs();
  tabs[index].classList.add('active')
}

function removeActiveTabs() {
  tabs.forEach(tab => {
    tab.classList.remove('active')
  });
}