const refs = {
  priceBackdrop: document.querySelector(".backdrop.price"),
  catalogBackdrop: document.querySelector(".backdrop.catalog"),
  cooperationBackdrop: document.querySelector(".backdrop.cooperation"),
  closePriceModalButton: document.querySelector(".price-modal__close-button"),
  closeCatalogModalButton: document.querySelector(
    ".catalog-modal__close-button"
  ),
  closeCooperationModalButton: document.querySelector(
    ".cooperation-modal__close-button"
  ),
  showPriceButton: document.querySelectorAll("#price-button"),
  showCatalogButtons: document.querySelectorAll(".catalog-list__button"),
  showCooperationButton: document.querySelector(".cooperation__button"),
  bodyEl: document.querySelector("body"),
};

refs.showPriceButton.forEach((button) =>
  button.addEventListener("click", showPriceModal)
);
refs.showCatalogButtons.forEach((button) =>
  button.addEventListener("click", showCataloModal)
);
refs.showCooperationButton.addEventListener("click", showCooperationModal);

refs.closePriceModalButton.addEventListener("click", hidePriceModal);
refs.closeCatalogModalButton.addEventListener("click", hideCatalogModal);
refs.closeCooperationModalButton.addEventListener(
  "click",
  hideCooperationModal
);

refs.priceBackdrop.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    hidePriceModal();
  }
});

refs.catalogBackdrop.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    hideCatalogModal();
  }
});

refs.cooperationBackdrop.addEventListener("click", (e) => {
  if (e.target === e.currentTarget) {
    hideCooperationModal();
  }
});

function showPriceModal() {
  hideCatalogModal();
  refs.priceBackdrop.classList.remove("is-hidden");
  disableWindowScroll();

  window.addEventListener("keydown", closePriceModalByEsc);
}

function hidePriceModal() {
  refs.priceBackdrop.classList.add("is-hidden");
  enableWindowScroll();

  window.removeEventListener("keydown", closePriceModalByEsc);
}

function closePriceModalByEsc(e) {
  if (e.code === "Escape") {
    hidePriceModal();
  }
}

function showCataloModal() {
  refs.catalogBackdrop.classList.remove("is-hidden");
  disableWindowScroll();

  window.addEventListener("keydown", closeCatalogModalByEsc);
}

function hideCatalogModal() {
  refs.catalogBackdrop.classList.add("is-hidden");
  enableWindowScroll();

  window.removeEventListener("keydown", closeCatalogModalByEsc);
}

function closeCatalogModalByEsc(e) {
  if (e.code === "Escape") {
    hideCatalogModal();
  }
}

function showCooperationModal() {
  refs.cooperationBackdrop.classList.remove("is-hidden");
  disableWindowScroll();

  window.addEventListener("keydown", closeCooperationModalByEsc);
}

function hideCooperationModal() {
  refs.cooperationBackdrop.classList.add("is-hidden");
  enableWindowScroll();

  window.removeEventListener("keydown", closeCooperationModalByEsc);
}

function closeCooperationModalByEsc(e) {
  if (e.code === "Escape") {
    hideCooperationModal();
  }
}

function disableWindowScroll() {
  refs.bodyEl.style.overflow = "hidden";
}

function enableWindowScroll() {
  refs.bodyEl.style.overflow = "scroll";
}
