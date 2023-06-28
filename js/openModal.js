const refs = {
  priceBackdrop: document.querySelector(".backdrop.price"),
  catalogBackdrop: document.querySelector(".backdrop.catalog"),
  cooperationBackdrop: document.querySelector(".backdrop.cooperation"),
  showPriceButton: document.querySelector("#price-button"),
  showCatalogButton: document.querySelector(".catalog-list__button"),
  showCooperationButton: document.querySelector(".cooperation__button"),
};

refs.showPriceButton.addEventListener("click", showPriceModal);
refs.showCatalogButton.addEventListener("click", showCataloModal);
refs.showCooperationButton.addEventListener("click", showCooperationModal);

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
  refs.priceBackdrop.classList.remove("is-hidden");

  window.addEventListener("keydown", closePriceModalByEsc);
}

function hidePriceModal() {
  refs.priceBackdrop.classList.add("is-hidden");

  window.removeEventListener("keydown", closePriceModalByEsc);
}

function closePriceModalByEsc(e) {
  if (e.code === "Escape") {
    hidePriceModal();
  }
}

function showCataloModal() {
  refs.catalogBackdrop.classList.remove("is-hidden");

  window.addEventListener("keydown", closeCatalogModalByEsc);
}

function hideCatalogModal() {
  refs.catalogBackdrop.classList.add("is-hidden");

  window.removeEventListener("keydown", closeCatalogModalByEsc);
}

function closeCatalogModalByEsc(e) {
  if (e.code === "Escape") {
    hideCatalogModal();
  }
}

function showCooperationModal() {
  refs.cooperationBackdrop.classList.remove("is-hidden");

  window.addEventListener("click", closeCooperationModalByEsc);
}

function hideCooperationModal() {
  refs.cooperationBackdrop.add("is-hidden");

  window.removeEventListener("keydown", closeCooperationModalByEsc);
}

function closeCooperationModalByEsc(e) {
  if (e.code === "Escape") {
    hideCooperationModal();
  }
}
