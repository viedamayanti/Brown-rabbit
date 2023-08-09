const textElements = document.querySelectorAll('.post-text p');

const maxChar = 200;

textElements.forEach((textElement) => {
  const fullText = textElement.textContent;
  let truncateText = fullText.slice(0, maxChar);

  if (fullText.length > maxChar) {
    truncateText += '...';
  }

  textElement.textContent = truncateText;
});
