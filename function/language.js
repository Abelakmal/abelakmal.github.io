const buttonEn = document.getElementById("en")
const buttonIn = document.getElementById("in")
const a = document.querySelector("header p");
const contentP1 = document.querySelector('#content #about .p1')
const contentP2 = document.querySelector('#content #about .p2')

buttonEn.addEventListener("click", () => {
  a.innerHTML = "Hello, I am a Web Developer who explains the Web with Javascript."
})

buttonIn.addEventListener("click", () =>{
  a.innerHTML = "Halo, saya seorang Web Develover yang Mengembangkan Web Dengan Javascript."
})


buttonEn.addEventListener("click", () =>{
  contentP1.innerHTML = "I have been learning coding since the 1st year of high school. My interest in the coding world arose because I was curious about how programs are created. Since the emergence of my desire to understand how programs work, I started learning programming. Initially, I was interested in creating IoT programs because I was very curious about how an object could be controlled remotely. It turns out that this involves low-level programming languages like Java. After I began to understand Java, I realized that this language is not only used for IoT but also for various types of programs, including website development."
  contentP2.innerHTML = "From my knowledge of the web world with Java, I started becoming more interested in the web domain. I found out that there is a simpler and more powerful language for web development, which is Javascript. After getting to know Javascript, I realized that it is simpler than Java. When I learned about this, I became even more interested in Javascript, and now I use Javascript more often for my latest projects."
})

buttonIn.addEventListener("click", () =>{
  contentP1.innerHTML = "Saya telah belajar coding sejak kelas 1 SMA. Ketertarikan saya terhadap dunia coding muncul karena saya penasaran bagaimana program-program dibuat. Sejak munculnya keinginan untuk memahami cara kerja program, saya mulai mempelajari pemrograman. Awalnya, saya tertarik untuk menciptakan program IOT karena saya sangat penasaran tentang bagaimana sebuah benda dapat dikendalikan melalui remote. Ternyata, hal ini melibatkan bahasa pemrograman tingkat rendah, seperti Java. Setelah saya mulai memahami Java, saya menyadari bahwa bahasa ini tidak hanya digunakan untuk IOT, tetapi juga untuk berbagai jenis program, termasuk pembuatan situs web."
  contentP2.innerHTML = "Dari pengetahuan saya tentang dunia web dengan Java, saya mulai tertarik lebih dalam pada dunia web. Saya mengetahui bahwa ada bahasa yang lebih sederhana dan powerful untuk pengembangan web, yaitu Javascript. Setelah saya mengenal Javascript, saya menyadari bahwa bahasa ini lebih sederhana daripada Java. Ketika saya mengetahui hal ini, saya semakin tertarik pada Javascript, dan sekarang saya lebih sering menggunakan Javascript untuk proyek-proyek terbaru saya."
})