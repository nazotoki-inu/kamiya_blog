// -----------------------------
// Kamiya's Blog
// main.js
// -----------------------------

let filteredPosts = [...posts];

const postList = document.getElementById("postList");
const latestPosts = document.getElementById("latestPosts");

const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const photoOnly = document.getElementById("photoOnly");



// 初期表示
renderPosts(filteredPosts);
renderLatest();



// -----------------------------
// 記事一覧表示
// -----------------------------

function renderPosts(list){

    postList.innerHTML = "";

    list.forEach(post=>{

        const article = document.createElement("article");

        article.className="post-card";

        article.innerHTML=`

            <div class="post-date">
                ${post.date}
            </div>

            <h2 class="post-title">

                <a href="article.html?id=${post.id}">
                    ${post.title}
                </a>

            </h2>

            ${
                post.image
                ?
                `<img
                    class="post-image"
                    src="${post.image}"
                    alt="${post.title}">`
                :
                ""
            }

            <p class="post-excerpt">

                ${post.excerpt}

            </p>

            <a
                class="read-more"
                href="article.html?id=${post.id}">

                続きを読む

            </a>

            <div class="post-meta">

                カテゴリー：
                ${post.category}

               　

                コメント：
                ${post.comments.length}

            </div>

        `;

        postList.appendChild(article);

    });

}



// -----------------------------
// 最新記事
// -----------------------------

function renderLatest(){

    latestPosts.innerHTML="";

    const latest=[...posts]
        .sort((a,b)=>b.id.localeCompare(a.id))
        .slice(0,5);

    latest.forEach(post=>{

        const li=document.createElement("li");

        li.innerHTML=`

        <a href="article.html?id=${post.id}">

            ${post.title}

        </a>

        `;

        latestPosts.appendChild(li);

    });

}



// -----------------------------
// 絞り込み
// -----------------------------

function filterPosts(){

    let result=[...posts];



    // 検索

    const keyword=searchInput.value.toLowerCase();

    if(keyword){

        result=result.filter(post=>

            post.title.toLowerCase().includes(keyword)

            ||

            post.body.toLowerCase().includes(keyword)

            ||

            post.excerpt.toLowerCase().includes(keyword)

        );

    }



    // 写真付きのみ

    if(photoOnly.checked){

        result=result.filter(post=>post.image!="");

    }



    // 並べ替え

    if(sortSelect.value=="new"){

        result.sort((a,b)=>b.id.localeCompare(a.id));

    }

    else{

        result.sort((a,b)=>a.id.localeCompare(b.id));

    }



    renderPosts(result);

}



// -----------------------------
// イベント
// -----------------------------

searchInput.addEventListener(

    "input",

    filterPosts

);

sortSelect.addEventListener(

    "change",

    filterPosts

);

photoOnly.addEventListener(

    "change",

    filterPosts

);