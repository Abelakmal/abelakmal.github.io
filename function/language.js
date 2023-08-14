const buttonEn = document.getElementById("en")
const buttonIn = document.getElementById("in")
const a = document.querySelector("header p");

buttonEn.addEventListener("click", () => {
  a.innerHTML = "Hello, I'm a beginner who loves the world of coding and constantly strives to maximizes my skil."
})

buttonIn.addEventListener("click", () =>{
  a.innerHTML = "Halo, saya seorang pemula yang menyukai dunia coding dan selalu berusaha untuk memaksimalkan kemampuan saya."
})
