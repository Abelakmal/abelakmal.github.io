const buttonEn = document.getElementById("en")
const buttonIn = document.getElementById("in")
const a = document.querySelector("header p");
const contentAboutP1 = document.querySelector('#content #about .p1')
const contentAboutP2 = document.querySelector('#content #about .p2')
const contentProjectFgt = document.querySelector("#content #project .figting p")
const contentProjectIgC = document.querySelector("#content #project .instagram-clone p")
const contentProjectAPI = document.querySelector("#content #project .Api p")


//P navbar
buttonEn.addEventListener("click", () => {
  a.innerHTML = "Hello, I am a Web Developer who explains the Web with Javascript."
})

buttonIn.addEventListener("click", () =>{
  a.innerHTML = "Halo, saya seorang Web Develover yang Mengembangkan Web Dengan Javascript."
})

//p about
buttonEn.addEventListener("click", () =>{
  contentAboutP1.innerHTML = "I have been learning coding since the 1st year of high school. My interest in the coding world arose because I was curious about how programs are created. Since the emergence of my desire to understand how programs work, I started learning programming. Initially, I was interested in creating IoT programs because I was very curious about how an object could be controlled remotely. It turns out that this involves low-level programming languages like Java. After I began to understand Java, I realized that this language is not only used for IoT but also for various types of programs, including website development."
  contentAboutP2.innerHTML = "From my knowledge of the web world with Java, I started becoming more interested in the web domain. I found out that there is a simpler and more powerful language for web development, which is Javascript. After getting to know Javascript, I realized that it is simpler than Java. When I learned about this, I became even more interested in Javascript, and now I use Javascript more often for my latest projects."
})

buttonIn.addEventListener("click", () =>{
  contentAboutP1.innerHTML = "Saya telah belajar coding sejak kelas 1 SMA. Ketertarikan saya terhadap dunia coding muncul karena saya penasaran bagaimana program-program dibuat. Sejak munculnya keinginan untuk memahami cara kerja program, saya mulai mempelajari pemrograman. Awalnya, saya tertarik untuk menciptakan program IOT karena saya sangat penasaran tentang bagaimana sebuah benda dapat dikendalikan melalui remote. Ternyata, hal ini melibatkan bahasa pemrograman tingkat rendah, seperti Java. Setelah saya mulai memahami Java, saya menyadari bahwa bahasa ini tidak hanya digunakan untuk IOT, tetapi juga untuk berbagai jenis program, termasuk pembuatan situs web."
  contentAboutP2.innerHTML = "Dari pengetahuan saya tentang dunia web dengan Java, saya mulai tertarik lebih dalam pada dunia web. Saya mengetahui bahwa ada bahasa yang lebih sederhana dan powerful untuk pengembangan web, yaitu Javascript. Setelah saya mengenal Javascript, saya menyadari bahwa bahasa ini lebih sederhana daripada Java. Ketika saya mengetahui hal ini, saya semakin tertarik pada Javascript, dan sekarang saya lebih sering menggunakan Javascript untuk proyek-proyek terbaru saya."
})

//project figting deskripsi
buttonEn.addEventListener("click", () =>{
  contentProjectFgt.innerHTML = "Developing a web figting game by applying canvas and javascript classes with smooth game character movement"
})

buttonIn.addEventListener("click", () =>{
  contentProjectFgt.innerHTML = "Mengembangkan game figting web dengan menerapakan canvas dan class javascript dengan pergerakan Caracter game yang Smooth"
})

//project ig clone deskripsi
buttonEn.addEventListener("click", () =>{
  contentProjectIgC.innerHTML = "Create an Instagram web clone with React js by cloning the home section of Instagram"
})

buttonIn.addEventListener("click", () =>{
  contentProjectIgC.innerHTML = "Membuat clone web instagram dengan React js dengan clone bagian home dari Instagram"
})

//project Api deskripsi

buttonEn.addEventListener("click", () => {
  contentProjectAPI.innerHTML = "Create a simple E-commerce API with various features for user and admin interaction"
})

buttonIn.addEventListener("click", () =>{
  contentProjectAPI.innerHTML = "Membuat API E-commerce sederhana dengan berbagai fitur untuk interaksi user dan admin"
})

