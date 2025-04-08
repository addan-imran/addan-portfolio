// document.addEventListener("DOMContentLoaded", (event) => {
//     // gsap.from('.illustration', { y: 50, duration: 2, ease: "back" })
//     gsap.registerPlugin(scrollTrigger);

//     const heroTL = gsap.timeline({
//         scrollTrigger: {
//             trigger: "#hero",
//             start: "top bottom",
//             toggleAction: "play none restart none"
//         }
//     })
// });

let mobile_nav = document.querySelector('.mobile-nav');
function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
    mobile_nav.classList.toggle('active')
    if (mobile_nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
        document.documentElement.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'auto'
        document.documentElement.style.overflow = 'auto'
    }
}

gsap.registerPlugin(ScrollTrigger)
const heroTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#hero",
        start: "top bottom",
        toggleActions: "play none restart none",
    }
})
heroTL.from(".gsap-nav-item", {
    y: -30,
    opacity: 0,
    ease: "back",
    stagger: 0.2
}).from(".gsap-content-item", {
    y: -30,
    opacity: 0,
    stagger: 0.2
}).from(".gsap-illustrate-wrapper", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
}).from(".gsap-illustrate", {
    rotate: 90,
    repeat: -1,
    yoyo: true,
    duration: 5,
    ease: "sine.inOut"
})

let sections = gsap.utils.toArray(".gsap-content");

gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".project-wrapper",
        pin: true,
        scrub: 1,
        end: () => "+=" + document.querySelector(".project-wrapper").offsetWidth,
    }
});


const profileTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#profile',
        start: 'top bottom',
        // end: 'top 25%',
        toggleActions: 'restart none restart none',
        // markers: "true"
    }
})

profileTL.from('.gsap-item', {
    y: -50,
    opacity: 0,
    stagger: 0.5,
})

const resumeTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#resume',
        start: 'top bottom',
        toggleActions: 'restart none restart none',
    }
});

resumeTL.from('.gsap-resume-heading', {
    y: 50,
    opacity: 0,
    stagger: 1,
}).from('.gsap-resume-item', {
    y: -50,
    opacity: 0,
    stagger: 0.7,
}).from('.gsap-resume-illustrate', {
    y: -50,
    opacity: 0,
})

const techTL = gsap.timeline({
    scrollTrigger: {
        trigger: '#tech',
        start: 'top bottom',
        toggleActions: 'restart none restart none',
    }
});
techTL.from('.gsap-tech-item', {
    scale: 1.2,
    opacity: 0,
    stagger: 0.1,
})

const contactTL = gsap.timeline({
    scrollTrigger: {
        trigger: "#contact",
        start: "top bottom",
        toggleActions: 'restart none restart none',
    }
})

contactTL.from('.gsap-contact-item', {
    y: 50,
    opacity: 0,
    stagger: 0.2,
}).from('.gsap-contact-nav', {
    y: -50,
    opacity: 0,
    stagger: 0.2,
})

UIkit.util.on('#jobsite', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/jobsite/1.png' },
            { source: 'assets/projects/jobsite/2.png' },
            { source: 'assets/projects/jobsite/3.png' },
            { source: 'assets/projects/jobsite/4.png' },
            { source: 'assets/projects/jobsite/5.png' },
            { source: 'assets/projects/jobsite/6.png' },
            { source: 'assets/projects/jobsite/7.png' },
            { source: 'assets/projects/jobsite/8.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#gc', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/gc/1.png' },
            { source: 'assets/projects/gc/2.png' },
            { source: 'assets/projects/gc/3.png' },
            { source: 'assets/projects/gc/4.png' },
            { source: 'assets/projects/gc/5.png' },
            { source: 'assets/projects/gc/6.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#thiscar', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/thiscar/1.png' },
            { source: 'assets/projects/thiscar/2.png' },
            { source: 'assets/projects/thiscar/3.png' },
            { source: 'assets/projects/thiscar/4.png' },
            { source: 'assets/projects/thiscar/5.png' },
            { source: 'assets/projects/thiscar/6.png' },
            { source: 'assets/projects/thiscar/7.png' },
            { source: 'assets/projects/thiscar/8.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#goldleash', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/goldleash/1.png' },
            { source: 'assets/projects/goldleash/2.png' },
            { source: 'assets/projects/goldleash/3.png' },
            { source: 'assets/projects/goldleash/4.png' },
            { source: 'assets/projects/goldleash/5.png' },
            { source: 'assets/projects/goldleash/6.png' },
            { source: 'assets/projects/goldleash/7.png' },
            { source: 'assets/projects/goldleash/8.png' },
            { source: 'assets/projects/goldleash/9.png' },
            { source: 'assets/projects/goldleash/10.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#tailwinds', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/tailwinds/1.png' },
            { source: 'assets/projects/tailwinds/2.png' },
            { source: 'assets/projects/tailwinds/3.png' },
            { source: 'assets/projects/tailwinds/4.png' },
            { source: 'assets/projects/tailwinds/5.png' },
            { source: 'assets/projects/tailwinds/6.png' },
            { source: 'assets/projects/tailwinds/7.png' },
            { source: 'assets/projects/tailwinds/8.png' },
            { source: 'assets/projects/tailwinds/9.png' },
            { source: 'assets/projects/tailwinds/10.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#WhatAPitch', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/whatapitch/1.png' },
            { source: 'assets/projects/whatapitch/2.png' },
            { source: 'assets/projects/whatapitch/3.png' },
            { source: 'assets/projects/whatapitch/4.png' },
            { source: 'assets/projects/whatapitch/5.png' },
            { source: 'assets/projects/whatapitch/6.png' },
            { source: 'assets/projects/whatapitch/7.png' },
            { source: 'assets/projects/whatapitch/8.png' },
            { source: 'assets/projects/whatapitch/9.png' },
            { source: 'assets/projects/whatapitch/10.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#taleemly', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/taleemly/1.png' },
            { source: 'assets/projects/taleemly/2.png' },
            { source: 'assets/projects/taleemly/3.png' },
            { source: 'assets/projects/taleemly/4.png' },
            { source: 'assets/projects/taleemly/5.png' },
            { source: 'assets/projects/taleemly/6.png' },
        ]
    }).show();
    e.preventDefault();
});
UIkit.util.on('#space', 'click', function (e) {
    UIkit.lightboxPanel({
        items: [
            { source: 'assets/projects/space/1.png' },
            { source: 'assets/projects/space/2.png' },
            { source: 'assets/projects/space/3.png' },
            { source: 'assets/projects/space/4.png' },
            { source: 'assets/projects/space/5.png' },
            { source: 'assets/projects/space/6.png' },
            { source: 'assets/projects/space/7.png' },
            { source: 'assets/projects/space/8.png' },
        ]
    }).show();
    e.preventDefault();
});

const handleDownload = () => {
    const filePath = "assets/resume.pdf"; // Relative path to the file

    // Create a link element
    const link = document.createElement("a");
    link.href = filePath;
    link.download = "addan-resume.pdf"; // Specify the downloaded file name
    link.target = "_blank";
    link.rel = "White paper";

    // Dispatch a click event on the link
    link.dispatchEvent(new MouseEvent("click"));
};
function openPDF() {
    const pdfUrl = 'assets/resume.pdf'; // Replace this with the actual URL of your PDF file
    window.open(pdfUrl, '_blank'); // '_blank' opens the file in a new tab
}