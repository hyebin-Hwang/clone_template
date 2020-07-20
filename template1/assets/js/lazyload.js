const option = {
    root: null,
    threshold: 0.7
}
  
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.src = entry.target.dataset.src;
        observer.unobserve(entry.target);
      }
    })
  }, option)
  
  const images = document.querySelectorAll(`.lazy`);
  images.forEach((el) => {
    io.observe(el);
  })


  //장점 : 페이지이미지다운속도가 줄어든다 
  // 현재 error => 페이지 리플로우 웹의 크기를 줄이고 밑에서부터 위로 스크롤시 버벅거림 
  // animation 을 어떻게 주는지 모르겟음 사진이 뚝뚝 끈켜서 나옴
  