document.addEventListener('DOMContentLoaded', () => {
    const digitalArt = document.getElementById('digital-art');
    const handCraftedJewelry = document.getElementById('hand-crafted-jewelry');
    const customPrints = document.getElementById('custom-prints');
    
    // Hide Digital Art initially
    digitalArt.style.opacity = '0';

    // Show Digital Art after 500ms (half a second)
    setTimeout(() => {
        digitalArt.style.opacity = '1';
        digitalArt.style.transform = 'translateX(0)'; // Ensure it's not moved if there was a transform

        // After another second, show Hand-Crafted Jewelry
        setTimeout(() => {
            handCraftedJewelry.style.display = 'inline-block';
            handCraftedJewelry.style.opacity = '0';
            handCraftedJewelry.style.transform = 'translateX(20px)'; // Start slightly to the right and fade in
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
    }, 500); // 500ms delay for Digital Art
});