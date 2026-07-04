// -----------------------------
// Kamiya's Blog
// article.js
// -----------------------------

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

const articleTitle = document.getElementById("articleTitle");
const articleDate = document.getElementById("articleDate");
const articleCategory = document.getElementById("articleCategory");
const articleImage = document.getElementById("articleImage");
const articleBody = document.getElementById("articleBody");
const articleTags = document.getElementById("articleTags");
const commentList = document.getElementById("commentList");
const prevPost = document.getElementById("prevPost");
const nextPost = document.getElementById("nextPost");
const latestPosts = document.getElementById("latestPosts");

const post = posts.find(item => item.id === postId);

if (!post) {
    articleTitle.textContent = "記事が見つかりません";
    articleBody.innerHTML = `<p>指定された記事は存在しません。</p>`;
} else {
    renderArticle(post);
    renderComments(post);
    renderPager(post);
}

renderLatest();

function renderArticle(post) {
    document.title = `${post.title} | Kamiya's Blog`;

    articleTitle.textContent = post.title;
    articleDate.textContent = post.date;
    articleCategory.textContent = `カテゴリー：${post.category}`;
    articleBody.innerHTML = post.body;

    if (post.image) {
        articleImage.innerHTML = `
            <img
                class="post-image"
                src="${post.image}"
                alt="${post.title}">
        `;
    } else {
        articleImage.innerHTML = "";
    }

    if (post.tags && post.tags.length > 0) {
        articleTags.innerHTML = `
            <div class="tag-list">
                ${post.tags.map(tag => `<span class="tag">#${tag}</span>`).join(" ")}
            </div>
        `;
    } else {
        articleTags.innerHTML = "";
    }
}

function renderComments(post) {
    commentList.innerHTML = "";

    if (!post.comments || post.comments.length === 0) {
        commentList.innerHTML = `<p class="no-comments">コメントはまだありません。</p>`;
        return;
    }

    post.comments.forEach(comment => {
        const div = document.createElement("div");
        div.className = "comment";

        div.innerHTML = `
            <div class="comment-name">${comment.name}</div>
            <div class="comment-date">${comment.date}</div>
            <p>${comment.text}</p>
        `;

        commentList.appendChild(div);
    });
}

function renderPager(currentPost) {
    const sorted = [...posts].sort((a, b) => a.id.localeCompare(b.id));
    const index = sorted.findIndex(item => item.id === currentPost.id);

    const prev = sorted[index - 1];
    const next = sorted[index + 1];

    prevPost.innerHTML = prev
        ? `<a href="article.html?id=${prev.id}">← ${prev.title}</a>`
        : "";

    nextPost.innerHTML = next
        ? `<a href="article.html?id=${next.id}">${next.title} →</a>`
        : "";
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