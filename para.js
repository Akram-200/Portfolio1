// Get all the <h2> and <h3> elements
const headings = document.querySelectorAll('h2, h3');

// Add click event listeners to toggle visibility
headings.forEach((heading) => {
  heading.addEventListener('click', function () {
    // Find the next sibling element, which is the <p> element, to toggle
    const nextElement = heading.nextElementSibling;

    if (nextElement.style.display === 'none' || nextElement.style.display === '') {
      nextElement.style.display = 'block';
    } else {
      nextElement.style.display = 'none';
    }
  });
});
