const countdownDate = new Date("2024-12-21T00:00:00").getTime();

    // Update the countdown every second
    const countdownFunction = setInterval(function () {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the difference between now and the countdown date
        const distance = countdownDate - now;

        // Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the timer element
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        // If the countdown is over, stop the timer and display a message
        if (distance < 0) {
            clearInterval(countdownFunction);
            document.getElementById("timer").textContent = "The big day is here!";
        }
    }, 1000);

    
    window.addEventListener('scroll', () => {
        document.querySelectorAll('section').forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.style.opacity = 1;
            }
        });
    });

