let totalElements = 0;
let currentElement = 0;
let nextElement = 0;
let mobileItems;

function updateElements() {
    mobileItems = document.querySelectorAll('.mobile-item');
    if (mobileItems.length >= 2) {
        totalElements = mobileItems.length;
        currentElement = getRandomElementIndex(totalElements);
        nextElement = getRandomElementIndex(totalElements);
        while (nextElement === currentElement) {
            nextElement = getRandomElementIndex(totalElements);
        }
        if (mobileElementInRange(currentElement)) {
            mobileItems[currentElement].querySelector('.item').click();
        }
        if (mobileItems) {
            mobileItems[nextElement].querySelector('.item').click();
        }
    }
    document.title = `${currentElement}+${nextElement}|${totalElements}`;
}

function mobileElementInRange(index) {
    return index >= 0 && index < totalElements;
}

function getRandomElementIndex(max) {
    return Math.floor(Math.random() * max);
}

function animate() {
    updateElements();
    setTimeout(animate, 200); // Change this to 200 for not rate limited
}

animate();
