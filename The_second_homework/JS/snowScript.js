// Create snowflakes on the page
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.animationName = 'fall';
    snowflake.style.animationTimingFunction = 'linear';
    snowflake.style.animationDuration = '2s infinite';
    snowflake.innerText = '❄'; // 可以使用 Unicode 雪花符号

    // Randomly position the snowflake
    const xPosition = Math.random() * window.innerWidth;
    const animationDuration = Math.random() * 3 + 2; // 2 到 5 秒

    snowflake.style.left = xPosition + 'px';
    snowflake.style.animation = `fall ${animationDuration}s linear forwards`;

    // Add event listener to remove snowflake when it's finished animating
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });

    //  Append snowflake to container
    document.querySelector('.snow-container').appendChild(snowflake);
}

// Between random intervals, create a snowflake
setInterval(createSnowflake, 100);

// Append animation
const style = document.createElement('style');
style.innerHTML = `
    @keyframes fall {
        0% {
            top: -10px;
            transform: translateX(0);
        }
        30% {
            transform: translateX(${Math.random() * 500 - 25}px); /* Randomly move the snowflake horizontally */
        }
        100% {
            top: 100vh;
            transform: translateX(${Math.random() * 500 - 25}px);
        }
    }
`;
document.head.appendChild(style);


document.addEventListener('mousemove', (e) => {
    const star = document.createElement('div');
    star.textContent = '★';
    star.className = 'star';
    document.body.appendChild(star);
    
    star.style.left = `${e.pageX}px`;
    star.style.top = `${e.pageY}px`;

    const offsetX = Math.random() * 30 - 15; 
    const offsetY = Math.random() * 30 - 15; 
    star.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

    setTimeout(() => {
        star.remove();
    }, 1000); 
});