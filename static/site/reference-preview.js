(() => {
  'use strict';
  const searchIndex = [{"url":"/zhongyong-design-reference/content/achievement-demo/","title":"项目业绩档案（功能验收示例）","description":"本条验证项目业绩独立栏目与分类检索。正式业绩资料待企业审核。"},{"url":"/zhongyong-design-reference/content/business/","title":"业务组合","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/career-cooperation/","title":"事业合伙人","description":"欢迎就合作方向、区域需求与项目资源与我们沟通。具体合作政策与伙伴名录由企业审核后发布。"},{"url":"/zhongyong-design-reference/content/city-cooperation/","title":"城市合伙人","description":"欢迎就合作方向、区域需求与项目资源与我们沟通。具体合作政策与伙伴名录由企业审核后发布。"},{"url":"/zhongyong-design-reference/content/company-introduction/","title":"关于中用设计","description":"连接城市与自然，以咨询、设计、施工、运维服务项目全生命周期。"},{"url":"/zhongyong-design-reference/content/construction/","title":"项目施工","description":"围绕方案实施与工程质量，连接设计表达与建设过程。"},{"url":"/zhongyong-design-reference/content/consulting/","title":"项目咨询","description":"为项目规划、建设路径和技术方案提供咨询沟通入口。"},{"url":"/zhongyong-design-reference/content/contact-info/","title":"联系我们","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/design/","title":"项目设计","description":"从场地理解到方案表达，关注市政与风景园林项目的真实需求。"},{"url":"/zhongyong-design-reference/content/esg-center/","title":"ESG与可持续发展","description":"绿色生态、社会责任与可持续发展项目记录。正式报告待企业审核上传。"},{"url":"/zhongyong-design-reference/content/gallery-demo-1/","title":"城市与自然","description":"资源分享验收示例，图片来源于原官网视觉素材，发布前确认使用授权和项目归属。"},{"url":"/zhongyong-design-reference/content/gallery-demo-2/","title":"城市与自然","description":"资源分享验收示例，图片来源于原官网视觉素材，发布前确认使用授权和项目归属。"},{"url":"/zhongyong-design-reference/content/gallery-demo-3/","title":"城市与自然","description":"资源分享验收示例，图片来源于原官网视觉素材，发布前确认使用授权和项目归属。"},{"url":"/zhongyong-design-reference/content/history/","title":"发展历程","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/honors/","title":"资质荣誉","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/industry-demo-1/","title":"城市更新中的公共空间","description":"行业资讯验收示例。正式资讯需标明来源、作者与发布日期。"},{"url":"/zhongyong-design-reference/content/industry-demo-2/","title":"风景园林与日常生活","description":"行业资讯验收示例。正式资讯需标明来源、作者与发布日期。"},{"url":"/zhongyong-design-reference/content/industry-demo-3/","title":"市政服务与全生命周期管理","description":"行业资讯验收示例。正式资讯需标明来源、作者与发布日期。"},{"url":"/zhongyong-design-reference/content/investor-center/","title":"投资者关系","description":"企业公告与历年报告集中展示，正式文件由企业审核上传。"},{"url":"/zhongyong-design-reference/content/journal-demo/","title":"守望者","description":"期刊栏目验收示例。可在后台上传PDF，提供分页阅读、目录和下载。"},{"url":"/zhongyong-design-reference/content/mission/","title":"愿景使命","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/news-demo-1/","title":"中用动态：让每一次更新有据可查","description":"验收示例内容：用于验证资讯发布、详情、时间、搜索和移动端展示。"},{"url":"/zhongyong-design-reference/content/news-demo-2/","title":"公开信息与项目资料的规范管理","description":"验收示例内容：用于验证资讯发布、详情、时间、搜索和移动端展示。"},{"url":"/zhongyong-design-reference/content/news-demo-3/","title":"从项目展示到客户服务的持续连接","description":"验收示例内容：用于验证资讯发布、详情、时间、搜索和移动端展示。"},{"url":"/zhongyong-design-reference/content/operation/","title":"项目运维","description":"关注项目全生命周期的维护需求与持续使用体验。"},{"url":"/zhongyong-design-reference/content/organization/","title":"组织架构","description":"企业审核资料待补充，当前用于栏目及后台编辑验收。"},{"url":"/zhongyong-design-reference/content/project-1/","title":"北大路改造工程","description":"项目名称来源于原官网首页。详细项目资料、建设参数与图文对应关系待客户审核补齐。"},{"url":"/zhongyong-design-reference/content/project-2/","title":"天荒坪中路二期改造","description":"项目名称来源于原官网首页。详细项目资料、建设参数与图文对应关系待客户审核补齐。"},{"url":"/zhongyong-design-reference/content/project-3/","title":"逐昌县环城北路环境提升工程设计项目","description":"项目名称来源于原官网首页。详细项目资料、建设参数与图文对应关系待客户审核补齐。"},{"url":"/zhongyong-design-reference/content/project-4/","title":"湖州吴兴新城吾悦广场","description":"项目名称来源于原官网首页。详细项目资料、建设参数与图文对应关系待客户审核补齐。"},{"url":"/zhongyong-design-reference/content/reader-demo/","title":"PDF阅读器验收样本（非公司正式报告）","description":"本文件仅验证分页、目录、缩放、下载功能，不是企业财务或ESG披露文件。"},{"url":"/zhongyong-design-reference/content/responsibility/","title":"社会责任","description":"记录绿色实践与社会公益，共建可持续的城乡环境。"},{"url":"/zhongyong-design-reference/content/video-demo/","title":"观看中用","description":"视频栏目验收示例。请在后台上传审核后的MP4视频。"}];
  const knowledgeItems = [{"title":"报告在哪里","text":"投资者关系和ESG栏目集中展示经审核的公告与报告。当前为验收环境，正式报告须由企业上传。","keywords":"报告 年报 财报 ESG 投资者","source":{"title":"报告在哪里","url":"/zhongyong-design-reference/content/investor-center/"},"version":1,"updated_at":"2026-09-08"},{"title":"如何联系","text":"您可以通过官网联系表单留下姓名、电话和具体需求。工作人员会在工作时段跟进，具体响应时间以双方约定为准。","keywords":"联系 电话 合作 人工 留言","source":{"title":"如何联系","url":"/zhongyong-design-reference/content/contact-info/"},"version":1,"updated_at":"2026-09-08"},{"title":"业务领域","text":"中用设计官网设置项目设计、项目施工、项目运维、项目咨询及社会责任入口。具体项目合作请联系工作人员。","keywords":"业务 服务 设计 施工 运维 咨询","source":{"title":"业务领域","url":"/zhongyong-design-reference/content/design/"},"version":1,"updated_at":"2026-09-08"}];
  const basePath = "/zhongyong-design-reference";
  const relativePath = pathname => basePath && pathname.startsWith(basePath)
    ? (pathname.slice(basePath.length) || '/')
    : pathname;
  const originalFetch = window.fetch ? window.fetch.bind(window) : null;
  const jsonResponse = (payload, status = 200) => new Response(JSON.stringify(payload), {
    status,
    headers: {'Content-Type': 'application/json; charset=utf-8'}
  });
  const terms = value => {
    const parts = (String(value || '').toLocaleLowerCase('zh-CN').match(/[a-z0-9]{2,}|[一-鿿]+/g) || []);
    return new Set(parts.flatMap(part => /[一-鿿]/.test(part)
      ? Array.from({length: Math.max(0, part.length - 1)}, (_, index) => part.slice(index, index + 2))
      : [part]));
  };
  const overlap = (left, right) => [...left].filter(term => right.has(term)).length;
  function answerFromSnapshot(question) {
    const query = terms(question);
    const matches = knowledgeItems.map(doc => {
      const keys = terms(`${doc.title} ${doc.keywords}`);
      const body = terms(doc.text);
      const keyHits = overlap(query, keys);
      const bodyHits = overlap(query, body);
      return {doc, score: keyHits * 3 + bodyHits, keyHits, bodyHits};
    }).filter(hit => hit.keyHits >= 2 || (hit.keyHits >= 1 && hit.bodyHits >= 2) || hit.bodyHits >= 3 || (query.size === 1 && hit.keyHits))
      .sort((a, b) => b.score - a.score).slice(0, 3);
    if (!matches.length) return {
      reply: '目前已审核的公开资料不足以准确回答这个问题。请通过联系页面提出具体需求，由工作人员核实后回复。',
      mode: 'fallback', sources: [], handoff_url: ''
    };
    return {
      reply: matches[0].doc.text.slice(0, 1200),
      mode: 'preview-knowledge',
      sources: matches.map(hit => hit.doc.source),
      handoff_url: ''
    };
  }
  if (originalFetch) {
    window.fetch = (input, init = {}) => {
      const url = new URL(typeof input === 'string' ? input : input.url, location.href);
      const pathname = relativePath(url.pathname);
      if (url.origin === location.origin && pathname === '/api/chat/' && (!init.method || init.method === 'GET')) {
        return Promise.resolve(jsonResponse({messages: [], handoff_url: '', configured: false}));
      }
      if (url.origin === location.origin && pathname === '/api/chat/') {
        let payload;
        try { payload = JSON.parse(init.body || '{}'); } catch { payload = {}; }
        const question = typeof payload.message === 'string' ? payload.message.trim() : '';
        if (!question || question.length > 1000) return Promise.resolve(jsonResponse({error: '请输入1—1000字的问题。'}, 400));
        return Promise.resolve(jsonResponse(answerFromSnapshot(question)));
      }
      if (url.origin === location.origin && (pathname.startsWith('/api/chat/') || pathname.startsWith('/api/wechat/'))) {
        return Promise.resolve(jsonResponse({ok: false, error: '当前为甲方审阅环境，该提交功能将在正式环境启用。'}, 503));
      }
      return originalFetch(input, init);
    };
  }

  function showPreviewMessage(form) {
    let message = form.querySelector('.preview-submit-message');
    if (!message) {
      message = document.createElement('p');
      message.className = 'form-note preview-submit-message';
      message.setAttribute('role', 'status');
      form.append(message);
    }
    message.textContent = '当前为甲方官网效果审阅环境，信息未提交。正式环境接入数据库后将启用此功能。';
    message.scrollIntoView({behavior: 'smooth', block: 'nearest'});
  }

  function renderSearch() {
    const pathname = relativePath(location.pathname);
    if (pathname !== '/search/' && pathname !== '/search') return;
    const container = document.querySelector('.search-results');
    const input = document.querySelector('#search-q');
    if (!container || !input) return;
    const query = new URLSearchParams(location.search).get('q')?.trim() || '';
    input.value = query;
    if (!query) return;
    const normalized = query.toLocaleLowerCase('zh-CN');
    const matches = searchIndex.filter(item =>
      `${item.title} ${item.description}`.toLocaleLowerCase('zh-CN').includes(normalized)
    );
    container.replaceChildren();
    const count = document.createElement('p');
    count.className = 'results-count';
    count.textContent = `“${query}” 的搜索结果，共 ${matches.length} 项`;
    container.append(count);
    if (!matches.length) {
      const empty = document.createElement('div');
      empty.className = 'empty';
      empty.innerHTML = '<h2>没有找到匹配内容</h2><p>试试更简短的关键词，或联系我们获取帮助。</p>';
      container.append(empty);
      return;
    }
    matches.forEach(item => {
      const link = document.createElement('a');
      link.className = 'search-result';
      link.href = item.url;
      const eyebrow = document.createElement('span');
      eyebrow.className = 'eyebrow';
      eyebrow.textContent = '公开内容';
      const title = document.createElement('h2');
      title.textContent = item.title + ' ↗';
      const description = document.createElement('p');
      description.textContent = item.description;
      link.append(eyebrow, title, description);
      container.append(link);
    });
  }

  function renderNativePdf() {
    const reader = document.querySelector('#pdf-reader[data-url]');
    if (!reader) return;
    const url = reader.dataset.url;
    const toolbar = document.createElement('div');
    toolbar.className = 'reader-toolbar';
    const note = document.createElement('span');
    note.textContent = '浏览器原生 PDF 预览';
    const download = document.createElement('a');
    download.href = url;
    download.textContent = '打开 / 下载 PDF ↗';
    download.target = '_blank';
    download.rel = 'noopener';
    toolbar.append(note, download);
    const frame = document.createElement('iframe');
    frame.src = url;
    frame.title = 'PDF 在线预览';
    frame.style.width = '100%';
    frame.style.height = 'min(78vh, 900px)';
    frame.style.border = '0';
    frame.style.background = '#f3f3f1';
    reader.replaceChildren(toolbar, frame);
  }

  document.addEventListener('DOMContentLoaded', () => {
    const chatPrivacy = document.querySelector('.chat-privacy');
    if (chatPrivacy?.firstChild) chatPrivacy.firstChild.textContent = '当前为公开参考站：问答仅在本地检索知识快照，不调用在线模型，也不保存或提交您的问题。请勿发送敏感信息。';
    document.querySelectorAll('.contact-form').forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopImmediatePropagation();
        if (form.reportValidity()) showPreviewMessage(form);
      }, true);
    });
    renderSearch();
    renderNativePdf();
  });
})();
