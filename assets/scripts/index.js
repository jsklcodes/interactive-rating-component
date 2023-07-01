const ratingCard = document.querySelector('#rating-card');
const submitButton = document.querySelector('#submit-button');
const ratingButtons = document.querySelectorAll('[data-rating]');
const modalOverlay = document.querySelector('#modal-overlay');
const modalCloseButton = document.querySelector('#close-button');

let clickedRatingButton;
let selectedRating;

function toggleActiveRatingButton(ratingButton) {
  if (clickedRatingButton) {
    clickedRatingButton.classList.remove('button--active');
  }

  ratingButton.classList.add('button--active');
  clickedRatingButton = ratingButton;
  selectedRating = ratingButton.dataset.rating;
}

function changeRatingCardContent(selectedRating) {
  const thankYouCardContent = `
    <img src="assets/images/illustration-thank-you.svg" alt="" class="rating-card__image">

    <p class="rating-card__result">You selected ${selectedRating} out of 5</p>

    <h1 class="rating-card__title">Thank you!</h1>
    <p class="rating-card__info">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
    `;

  ratingCard.textContent = '';
  ratingCard.classList.add('rating-card--thank-you');
  ratingCard.insertAdjacentHTML('afterbegin', thankYouCardContent);
}

function openModal() {
  modalOverlay.classList.add('modal-overlay--active');
}

function closeModal() {
  modalOverlay.classList.remove('modal-overlay--active');
}

ratingButtons.forEach(ratingButton =>
  ratingButton.addEventListener('click', _ =>
    toggleActiveRatingButton(ratingButton)
  )
);

submitButton.addEventListener('click', _ =>
  selectedRating ? changeRatingCardContent(selectedRating) : openModal()
);

modalCloseButton.addEventListener('click', closeModal);
