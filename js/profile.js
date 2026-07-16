const latestPosts = document.getElementById("latestPosts");

renderLatest();

function renderLatest() {
    latestPosts.innerHTML = "";

    const latest = [...posts]
        .sort((a, b) => b.id.localeCompare(a.id))
        .slice(0, 5);

    latest.forEach(post => {
        const li = document.createElement("li");

        const postUrl = post.link || `article.html?id=${post.id}`;
        const titlePrefix = post.locked ? "🔒 " : "";

        li.innerHTML = `
            <a href="${postUrl}">
                ${titlePrefix}${post.title}
            </a>
        `;

        latestPosts.appendChild(li);
    });
}