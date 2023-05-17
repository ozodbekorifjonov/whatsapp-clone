const postsContent = document.getElementById("posts-content");

function fetchData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => {
      data.map((item) => {
        postsContent.innerHTML += `<li>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </li>`;
      });
    });
}

fetchData();
