// Scroll animation for elements
const scrollElements = document.querySelectorAll('.scroll-element');

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        }
    });
};

window.addEventListener('scroll', handleScrollAnimation);

// Social icon hover effect
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Typewriter effect for skills
const skills = ["HTML", "CSS", "JavaScript", "Python", "Django", "React"];
let skillIndex = 0;
let charIndex = 0;
let currentSkill = "";
let isDeleting = false;
const typeSpeed = 150;
const deleteSpeed = 100;
const pauseBetweenSkills = 1500;

const typeWriter = () => {
    if (charIndex < skills[skillIndex].length) {
        if (!isDeleting) {
            currentSkill += skills[skillIndex].charAt(charIndex);
            charIndex++;
            document.getElementById('typewriter').textContent = currentSkill;
            setTimeout(typeWriter, typeSpeed);
        }
    } else if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeWriter, pauseBetweenSkills);
    } else if (isDeleting) {
        currentSkill = currentSkill.slice(0, -1);
        document.getElementById('typewriter').textContent = currentSkill;
        if (currentSkill.length === 0) {
            isDeleting = false;
            charIndex = 0;
            skillIndex = (skillIndex + 1) % skills.length;
            setTimeout(typeWriter, typeSpeed);
        } else {
            setTimeout(typeWriter, deleteSpeed);
        }
    }
};

document.addEventListener("DOMContentLoaded", typeWriter);


