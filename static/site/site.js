(() => {
'use strict';
const $ = (s, root = document) => root.querySelector(s);
document.body.classList.toggle('contact-page',location.pathname==='/contact/');
const menu = $('.menu-toggle'), nav = $('#navigation');
menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? '收起导航' : '展开导航'); nav.classList.toggle('open', open); });
nav?.querySelectorAll('a').forEach(a => { if (new URL(a.href).pathname === location.pathname) a.setAttribute('aria-current','page'); });
document.querySelectorAll('[data-slide]').forEach(b => b.addEventListener('click', () => { const track = $('#resource-track'); track?.scrollBy({left: Number(b.dataset.slide) * track.clientWidth * .82, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'}); }));
const resourceTrack = $('#resource-track'), pauseControl = $('#slider-pause');
if(resourceTrack && pauseControl){
 const reduced = matchMedia('(prefers-reduced-motion: reduce)'); let paused = reduced.matches, hover = false, focus = false;
 const showState = () => { pauseControl.textContent=paused?'▶':'Ⅱ';pauseControl.setAttribute('aria-label',paused?'播放资源自动轮播':'暂停资源自动轮播');pauseControl.setAttribute('aria-pressed',String(paused));};
 pauseControl.addEventListener('click',()=>{paused=!paused;showState();});
 resourceTrack.addEventListener('mouseenter',()=>hover=true);resourceTrack.addEventListener('mouseleave',()=>hover=false);
 resourceTrack.addEventListener('focusin',()=>focus=true);resourceTrack.addEventListener('focusout',()=>focus=resourceTrack.contains(document.activeElement));
 reduced.addEventListener('change',()=>{if(reduced.matches){paused=true;showState();}});
 document.querySelectorAll('[data-slide]').forEach(button=>button.addEventListener('click',()=>{paused=true;showState();}));
 resourceTrack.addEventListener('touchstart',()=>{paused=true;showState();},{passive:true});
 setInterval(()=>{if(paused||hover||focus||document.hidden||[...resourceTrack.querySelectorAll('video')].some(v=>!v.paused))return;const max=resourceTrack.scrollWidth-resourceTrack.clientWidth;if(max<5)return;const next=resourceTrack.scrollLeft>=max-5?0:Math.min(max,resourceTrack.scrollLeft+resourceTrack.clientWidth*.82);resourceTrack.scrollTo({left:next,behavior:reduced.matches?'instant':'smooth'});},6500);
 showState();
}
const safeURL = raw => { if(typeof raw!=='string'||!raw.trim())return null;try {const u = new URL(raw, location.origin); return ['http:', 'https:'].includes(u.protocol) ? u.href : null;} catch {return null;} };
const csrf = () => { const token = document.cookie.split('; ').find(c => c.startsWith('csrftoken=')); return token ? decodeURIComponent(token.split('=').slice(1).join('=')) : ''; };
async function request(url, body, multipart = false) {const headers = {}; if (body) {headers['X-CSRFToken'] = csrf(); if (!multipart) headers['Content-Type'] = 'application/json';} const response = await fetch(url,{method:body?'POST':'GET',credentials:'same-origin',headers,body:body ? multipart ? body : JSON.stringify(body) : undefined}); let data;try{data=await response.json();}catch{throw new Error('服务暂时不可用，请稍后重试。');}if(!response.ok || data.ok === false) throw new Error(data.error || '请求未成功，请稍后重试。');return data;}
const panel=$('#chat-panel'),launch=$('.chat-launch'),backdrop=$('#chat-backdrop'),messages=$('#chat-messages'),status=$('#chat-status'),input=$('#chat-input');let loaded=false,loading=false,activeBefore=null;const modalBackground=[...document.body.children].filter(node=>node!==panel&&node!==backdrop&&node.tagName!=='SCRIPT');
function note(text,retry){status.replaceChildren(document.createTextNode(text));if(retry){const b=document.createElement('button');b.type='button';b.textContent='重试';b.addEventListener('click',retry,{once:true});status.append(b);}}
function bubble(text,role='assistant',sources=[],mode=''){const node=document.createElement('div');node.className='chat-bubble '+(role==='user'?'user':'assistant');node.textContent=text;if(role==='assistant'&&mode){const labels={knowledge:'已审核知识库',model:'模型辅助整理 · 请核对来源','preview-knowledge':'公开知识快照 · 本地检索',fallback:'公开资料不足'};const badge=document.createElement('span');badge.className='chat-mode';badge.textContent=labels[mode]||'知识助手';node.prepend(badge);}if(Array.isArray(sources)&&sources.length){const links=document.createElement('div');links.className='chat-sources';sources.forEach(source=>{const href=safeURL(source.url);const el=document.createElement(href?'a':'span');el.textContent=source.title||'公开知识资料';if(href){el.href=href;el.target='_blank';el.rel='noopener noreferrer';}links.append(el);});node.append(links);}messages.append(node);messages.scrollTop=messages.scrollHeight;return node;}
function handoff(raw){const a=$('#handoff-link'),url=raw&&safeURL(raw);a.hidden=!url;if(url)a.href=url;}
let historyPromise=null;
function loadHistory(){if(loaded)return Promise.resolve();if(historyPromise)return historyPromise;historyPromise=loadHistoryImpl().finally(()=>historyPromise=null);return historyPromise;}
async function loadHistoryImpl(){loading=true;$('#chat-form button').disabled=true;note('正在载入咨询记录…');try{const data=await request('/api/chat/');messages.replaceChildren();if(Array.isArray(data.messages)&&data.messages.length){data.messages.filter(m=>['user','assistant'].includes(m.role)&&typeof m.content==='string').forEach(m=>bubble(m.content,m.role,m.sources,m.mode));}else{bubble('您好，欢迎来到中用设计。您可以咨询业务服务、项目合作或报告入口。');}handoff(data.handoff_url);loaded=true;note('');}catch(e){note(e.message,loadHistory);}finally{loading=false;$('#chat-form button').disabled=false;}}
function openChat(){if(panel.hidden){activeBefore=document.activeElement;panel.hidden=false;backdrop.hidden=false;modalBackground.forEach(node=>node.inert=true);launch.setAttribute('aria-expanded','true');document.body.classList.add('modal-open');input.focus();}return loadHistory();}
function closeChat(){panel.hidden=true;backdrop.hidden=true;modalBackground.forEach(node=>node.inert=false);launch.setAttribute('aria-expanded','false');document.body.classList.remove('modal-open');(activeBefore||launch).focus();}
launch?.addEventListener('click',openChat);$('.chat-close')?.addEventListener('click',closeChat);backdrop?.addEventListener('click',closeChat);
document.addEventListener('keydown',event=>{if(event.key==='Escape'){if(panel&&!panel.hidden)closeChat();else if(nav?.classList.contains('open')){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.focus();}}if(event.key==='Tab'&&panel&&!panel.hidden){const all=[...panel.querySelectorAll('a[href],button,input,textarea,select,summary')].filter(e=>!e.disabled&&!e.hidden&&e.getClientRects().length&&(!e.closest('details:not([open])')||e.tagName==='SUMMARY'));const first=all[0],last=all.at(-1);if(!panel.contains(document.activeElement)){event.preventDefault();(event.shiftKey?last:first)?.focus();}else if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}});
let sending=false;
async function sendMessage(text,append=true){if(sending)return;sending=true;const btn=$('#chat-form button');btn.disabled=true;input.disabled=true;if(append)bubble(text,'user');note('正在查询公开资料…');try{const data=await request('/api/chat/',{message:text});if(typeof data.reply!=='string')throw new Error('未收到有效答复，请重试。');bubble(data.reply,'assistant',data.sources,data.mode);handoff(data.handoff_url);input.value='';note('');}catch(e){note(e.message,()=>sendMessage(text,false));input.value=text;}finally{sending=false;btn.disabled=false;input.disabled=false;if(!panel.hidden)input.focus();}}
document.querySelectorAll('[data-open-chat]').forEach(button=>button.addEventListener('click',()=>openChat()));
document.querySelectorAll('[data-ask]').forEach(button=>button.addEventListener('click',async()=>{const question=button.dataset.ask?.trim();if(!question)return;await openChat();if(!loaded)return;await sendMessage(question);}));
$('#chat-form')?.addEventListener('submit',e=>{e.preventDefault();const value=input.value.trim();if(value)sendMessage(value);});
input?.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('#chat-form').requestSubmit();}});
$('#chat-upload')?.addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,button=$('button',form);if(button.disabled)return;const data=new FormData(form);data.set('consent','true');button.disabled=true;note('正在上传资料…');try{const result=await request('/api/chat/upload/',data,true);if(result.ok!==true)throw new Error('服务未确认上传成功，请重试。');note((result.message || '资料已上传。')+' '+result.name);form.reset();}catch(error){note(error.message);}finally{button.disabled=false;}});
$('#chat-handoff')?.addEventListener('submit',async e=>{e.preventDefault();const form=e.currentTarget,button=$('button',form);if(button.disabled)return;const data=Object.fromEntries(new FormData(form));data.consent=true;button.disabled=true;note('正在提交联系请求…');try{const result=await request('/api/chat/handoff/',data);if(result.ok!==true)throw new Error('服务未确认提交成功，请重试。');note('人工联系请求已提交，我们会根据您留下的信息联系您。');handoff(result.handoff_url);form.reset();}catch(error){note(error.message);}finally{button.disabled=false;}});
const honey=$('.honeypot input');if(honey){honey.tabIndex=-1;honey.autocomplete='off';}
const main=$('#main');if(main){main.tabIndex=-1;$('.skip-link')?.addEventListener('click',()=>setTimeout(()=>main.focus(),0));}
$('.contact-form')?.addEventListener('submit',e=>{if(e.currentTarget.checkValidity()){const button=$('button[type=submit]',e.currentTarget);button.disabled=true;button.textContent='正在提交…';}});
let wechatReady=false;
if(/MicroMessenger/i.test(navigator.userAgent)){request('/api/wechat/signature/?url='+encodeURIComponent(location.href.split('#')[0])).then(data=>{if(!data.configured)return;const script=document.createElement('script');script.src='https://res.wx.qq.com/open/js/jweixin-1.6.0.js';script.onload=()=>{const config=data.config||data;window.wx.config({debug:false,appId:config.appId,timestamp:config.timestamp,nonceStr:config.nonceStr,signature:config.signature,jsApiList:['updateAppMessageShareData','updateTimelineShareData']});window.wx.ready(()=>{const share={title:document.title,desc:$('meta[name=description]')?.content||'',link:location.href.split('#')[0],imgUrl:$('main img')?.src||''};window.wx.updateAppMessageShareData(share);window.wx.updateTimelineShareData(share);wechatReady=true;});};document.head.append(script);}).catch(()=>{});}
document.querySelectorAll('[data-share]').forEach(button=>button.addEventListener('click',async()=>{const result=$('[data-share-status]');if(wechatReady){result.textContent='请点击微信右上角菜单，选择分享给朋友或朋友圈。';return;}try{if(!navigator.clipboard?.writeText)throw new Error('unavailable');await navigator.clipboard.writeText(location.href);result.textContent='链接已复制。';}catch{result.textContent='未能复制，请从浏览器地址栏复制页面链接。';}}));
})();

(() => {
  'use strict';
  document.documentElement.classList.add('reveal-ready');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reveals = [...document.querySelectorAll('.reveal')];
  if (!reveals.length) return;
  if (reduced.matches || !('IntersectionObserver' in window)) {
    reveals.forEach(node => node.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: .12, rootMargin: '0px 0px -7% 0px' });
  reveals.forEach(node => observer.observe(node));
})();
