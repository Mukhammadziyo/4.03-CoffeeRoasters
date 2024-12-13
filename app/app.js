const headerToggleBtn = document.querySelector(".header-toggle-btn");
const headerInnerWrapper = document.querySelector(".header-inner-wrapper");
const headerInnerWrapperBtn = document.querySelector(
  ".header-inner-wrapper-btn"
);

headerToggleBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.add("show-nav");
});

headerInnerWrapperBtn.addEventListener("click", () => {
  headerInnerWrapper.classList.remove("show-nav");
});
