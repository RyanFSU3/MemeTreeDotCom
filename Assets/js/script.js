document.addEventListener('DOMContentLoaded', () => {
    const digitalArt = document.getElementById('digital-art');
    const handCraftedJewelry = document.getElementById('hand-crafted-jewelry');
    const customPrints = document.getElementById('custom-prints');

    // Hide Digital Art initially
    digitalArt.style.opacity = '0';

    // Show Digital Art after 500ms (half a second)
    setTimeout(() => {
        digitalArt.style.opacity = '1';
        digitalArt.style.transform = 'translateX(0)';

        // After another second, show Hand-Crafted Jewelry
        setTimeout(() => {
            handCraftedJewelry.style.display = 'inline-block';
            handCraftedJewelry.style.opacity = '0';
            handCraftedJewelry.style.transform = 'translateX(20px)';
            setTimeout(() => {
                handCraftedJewelry.style.opacity = '1';
                handCraftedJewelry.style.transform = 'translateX(0)';
                
                // Show Custom Prints after Hand-Crafted Jewelry has appeared
                setTimeout(() => {
                    customPrints.style.display = 'inline-block';
                    customPrints.style.opacity = '0';
                    customPrints.style.transform = 'translateX(20px)';
                    setTimeout(() => {
                        customPrints.style.opacity = '1';
                        customPrints.style.transform = 'translateX(0)';
                    }, 10);
                }, 1000);
            }, 10);
        }, 1000);
    }, 500);
});

// Array of background images
const backgrounds = [
    '/assets/images/background1.jpg',
    '/assets/images/background2.jpg',
    '/assets/images/background3.jpg',
    '/assets/images/background4.jpg'
];

// Function to change the background image
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    document.body.style.backgroundImage = `url(${backgrounds[randomIndex]})`;
}

// Change the background image every 5 seconds
setInterval(changeBackground, 5000);

// Initial call to set the first background image
changeBackground();
