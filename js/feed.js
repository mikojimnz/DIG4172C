$( document ).ready(function() {
  // Get article feed
  var page = articles.pages[$('#article-js').attr('data-page')];

  // Check if has latest feed and append
  if (page.hasLatest) {
    var feed = [];
    page.latest.forEach(item => {
      feed.push(
        `<li><a href="${item.link}" class="row article-item my-2">` +
        `<div class="col-lg-3"><img class="article-img" src="${item.img}"></div><div class="col-lg-9">` +
        `<p class="article-subtitle">${item.subtitle}<i>${item.date}</i></p>` +
        `<h5 class="article-latest-title">${item.title}</h5></div></a></li>`
      );
    });

    $('#latest-feed').append(feed);

  }

  // Check if has related feed and append
  if (page.hasRelated){
    var feed = [];
    page.related.forEach(item => {
      feed.push(
        '<div class="col-lg-4">' +
        `<a href="${item.link}" class="card">` +
        `<img class="article-img-wide" src="${item.img}"><div class="card-body">` +
        `<p class="article-subtitle">${item.subtitle}<i>${item.date}</i></p>` +
        `<h5 class="card-title">${item.title}</h5>` +
        `<p class="card-text">${item.desc}</p>` +
        '</div></a></div>'
      );
    });

    $('#related-feed').append(feed);
  }

});

// Pick random article
function getArticle() {
  var allPages = []
  
  // Skip page we're on
  Object.keys(articles.pages).forEach(item => {
    if(item != $('#article-js').attr('data-page')) allPages.push(item);
  });

  var page = articles.pages[allPages[Math.floor(Math.random() * allPages.length)]]; // Pick random page

  if (page.hasRelated){
    var item = page.related[Math.floor(Math.random() * page.related.length)]; //pick random article
    return '<div class="col-lg-4">' +
    `<a href="${item.link}" class="card">` +
    `<img class="article-img-wide" src="${item.img}"><div class="card-body">` +
    `<p class="article-subtitle">${item.subtitle}<i>${item.date}</i></p>` +
    `<h5 class="card-title">${item.title}</h5>` +
    `<p class="card-text">${item.desc}</p>` +
    '</div></a></div>';
  } else {
    return false;
  }
}

var scrollCount = 0;
var overalFeed = [];

window.onscroll = function(ev) {
  // Check if scrolled to bottom
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && scrollCount < 3) {
    var feed = [];

    // Get 6 new articles
    while(feed.length < 6 ) {
      article = getArticle();

      // Check that it is not a duplicate
      if (article && !feed.includes(article) && !overalFeed.includes(article)) {
        overalFeed.push(article);
        feed.push(article);
      };
    }

    $('#related-feed').append(feed);
    scrollCount++;
  }
};