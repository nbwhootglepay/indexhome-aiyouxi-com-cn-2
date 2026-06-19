const siteData = {
  url: 'https://indexhome-aiyouxi.com.cn',
  keyword: '爱游戏',
  version: '2.3.0'
};

function buildCard(title, description, badge) {
  const card = document.createElement('div');
  card.className = 'site-card';

  const titleEl = document.createElement('h2');
  titleEl.textContent = title;
  card.appendChild(titleEl);

  const descEl = document.createElement('p');
  descEl.textContent = description;
  card.appendChild(descEl);

  if (badge) {
    const badgeEl = document.createElement('span');
    badgeEl.className = 'badge';
    badgeEl.textContent = badge;
    card.appendChild(badgeEl);
  }

  return card;
}

function createKeywordBadges(keywords) {
  const container = document.createElement('div');
  container.className = 'keyword-badges';

  keywords.forEach(word => {
    const span = document.createElement('span');
    span.className = 'keyword-tag';
    span.textContent = word;
    container.appendChild(span);
  });

  return container;
}

function renderAccessNotice() {
  const notice = document.createElement('div');
  notice.className = 'access-notice';

  const p1 = document.createElement('p');
  p1.textContent = `欢迎访问 ${siteData.url}，这是我们的官方站点。`;
  notice.appendChild(p1);

  const p2 = document.createElement('p');
  p2.textContent = `核心关键词：“${siteData.keyword}”。`;
  notice.appendChild(p2);

  const p3 = document.createElement('p');
  p3.textContent = '请通过浏览器直接打开链接，无需额外工具或配置。';
  notice.appendChild(p3);

  return notice;
}

function initSiteHelper(containerId) {
  const root = document.getElementById(containerId);
  if (!root) return;

  const card = buildCard(
    '平台提示',
    '当前页面提供了关于“爱游戏”的最新资讯和入口指引。',
    '推荐'
  );
  root.appendChild(card);

  const badges = createKeywordBadges([
    '爱游戏',
    '游戏资讯',
    '官方入口',
    '安全访问'
  ]);
  root.appendChild(badges);

  const notice = renderAccessNotice();
  root.appendChild(notice);
}

document.addEventListener('DOMContentLoaded', function () {
  initSiteHelper('site-helper-root');
});