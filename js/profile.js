const latestPosts = document.getElementById("latestPosts");

renderLatest();

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