const ratingCard = document.querySelector('#rating-card');
const submitButton = document.querySelector('#submit-button');
const ratingButtons = document.querySelectorAll('[data-rating]');

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

ratingButtons.forEach(ratingButton =>
  ratingButton.addEventListener('click', _ =>
    toggleActiveRatingButton(ratingButton)
  )
);
