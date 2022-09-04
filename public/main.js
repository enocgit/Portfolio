// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             // console.log("intersecting")
//             document.getElementById("about-content").style.opacity = 1
//         }
//     })
// })

// observer.observe(document.body)

const aboutContent = document.getElementById("about-content");
const portfolioContent = document.getElementById("portfolio-content");
const contactContent = document.getElementById("contact-content");

window.addEventListener('scroll', () => {
    if (scrollY >= 300){
        aboutContent.style.opacity = 1;
        aboutContent.style.transition = '1.5s all ease-in-out';
    }

    if (scrollY >= 1000) {
        portfolioContent.style.opacity = 1;
        portfolioContent.style.transition = '1.5s all ease-in-out';
    }

    if (scrollY >= 3000) {
        contactContent.style.opacity = 1;
        contactContent.style.transition = '1.5s all ease-in-out';
    }
})


const greeting = document.getElementById("greeting")

let date = new Date()

// console.log(date.getTime())
if(date.getHours() >= 0 && date.getHours() < 12){
    greeting.textContent = 'Good Morning'
}
else if (date.getHours() >= 12 && date.getHours() < 17){
    greeting.textContent = 'Good Afternoon'
}
else {
    greeting.textContent = 'Good Evening'
}


