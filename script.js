const urls = [
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com",
  "https://wikipedia.com"
];

const grid = document.getElementById("grid");

urls.forEach(url => {
  const iframe = document.createElement("iframe");
  iframe.src = url;
  grid.appendChild(iframe);
});
