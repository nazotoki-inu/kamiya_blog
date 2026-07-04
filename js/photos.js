// -----------------------------
// Kamiya's Blog
// photos.js
// -----------------------------

const photoGrid = document.getElementById("photoGrid");
const photoCount = document.getElementById("photoCount");
const latestPosts = document.getElementById("latestPosts");

const photoPosts = posts.filter(post => post.image);

renderPhotos();
renderLatest();

function renderPhotos() {
    photoGrid.innerHTML = "";

    photoCount.textContent = `${photoPosts.length}枚`;

    photoPosts.forEach(post => {
        const div = document.createElement("div");
        div.className = "photo-item";

        div.innerHTML = `
            <a href="article.html?id=${post.id}">
                <img src="${post.image}" alt="${post.title}">
                <p>${post.title}</p>
                <span>${post.date}</span>
            </a>
        `;

        photoGrid.appendChild(div);
    });
}

function renderLatest() {
    latestPosts.innerHTML = "";

    const latest = [...posts]
        .sort((a, b) => b.id.localeCompare(a.id))
        .slice(0, 5);

    latest.forEach(post => {
        const li = document.createElement("li");

        li.innerHTML = `
            <a href="article.html?id=${post.id}">
                ${post.title}
            </a>
        `;

        latestPosts.appendChild(li);
    });
}