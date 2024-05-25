document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
    document.querySelector('#load-iframe-map').innerHTML = `
        <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidht="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade"src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10360.658893556953!2d-0.37730834128124124!3d39.46385411272037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1687190211540!5m2!1ses!2ses"></iframe>
    `;        
    }, 500);

});