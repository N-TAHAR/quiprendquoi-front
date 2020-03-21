if(navigator.share){
  navigator
    .share({
      title: $shareEl.getAttribute('data-share-title'),
      text: $shareEl.getAttribute('data-share-text'),
      url: $shareEl.getAttribute('data-share-url'),
    })
}