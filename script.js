function showMore() {
    const show = document.querySelector('.js-more');
    const moreDiv = document.querySelector('.more');
  
    show.addEventListener('click', () => {
      if (moreDiv.style.display === "block") {
        moreDiv.style.display = "none";
        button.innerHTML = 'More +';
      } else {
        moreDiv.style.display = "block";
        button.innerHTML = 'More -';
      }
    });
  }
  
  showMore();