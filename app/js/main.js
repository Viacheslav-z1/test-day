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

/**tabs product*/


let tabsProduct = document.querySelectorAll(".products__tab-btn");
let tabsContentProduct = document.querySelectorAll(".products__list");

let tabsTrends = document.querySelectorAll(".trends__tab-btn");
let tabsContentTrends = document.querySelectorAll(".tabs-content-js");

tabsProduct.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    hideTabsContent(tabsContentProduct);
    showTab(tabsContentProduct, i, tabsProduct);
  });
});


hideTabsContent(tabsContentProduct); 
removeActiveTabs(tabsProduct);
showTab(tabsContentProduct, 0, tabsProduct);




/**Tab trends */

tabsTrends.forEach((tab, i) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    hideTabsContent(tabsContentTrends);
     removeActiveTabs(tabsTrends);
    showTab(tabsContentTrends, i, tabsTrends);
  });
});


hideTabsContent(tabsContentTrends);
removeActiveTabs(tabsTrends);
showTab(tabsContentTrends, 0, tabsTrends);





function hideTabsContent(arr) {
  arr.forEach((tab) => {
    tab.classList.add("none");
  });
}

function showTab(arr,index, tabs) {
  arr[index].classList.remove("none");
  removeActiveTabs(tabs);
  tabs[index].classList.add('active')
}

function removeActiveTabs(tabs) {
  tabs.forEach(tab => {
    tab.classList.remove('active')
  });
}