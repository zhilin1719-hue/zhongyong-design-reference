document.addEventListener('DOMContentLoaded',()=>{
  const source=document.getElementById('id_body'); if(!source)return;
  const box=document.createElement('div');box.className='zy-editor';
  const bar=document.createElement('div');bar.className='zy-editor-toolbar';bar.setAttribute('role','toolbar');bar.setAttribute('aria-label','正文格式');
  const editor=document.createElement('div');editor.contentEditable='true';editor.className='zy-editor-body';editor.setAttribute('role','textbox');editor.setAttribute('aria-multiline','true');editor.setAttribute('aria-label','可视化正文编辑');
  // Initial content is server-sanitized; clipboard HTML is never inserted.
  editor.innerHTML=source.value;
  const sync=()=>{source.value=editor.innerHTML;source.dispatchEvent(new Event('change',{bubbles:true}));};
  [['加粗','bold'],['斜体','italic'],['小标题','formatBlock','h2'],['段落','formatBlock','p'],['无序列表','insertUnorderedList'],['有序列表','insertOrderedList'],['清除格式','removeFormat']].forEach(([name,cmd,value])=>{const b=document.createElement('button');b.type='button';b.textContent=name;b.addEventListener('mousedown',e=>e.preventDefault());b.addEventListener('click',()=>{editor.focus();document.execCommand(cmd,false,value);sync();});bar.append(b);});
  const imageButton=document.createElement('button');imageButton.type='button';imageButton.textContent='插入站内图片';
  imageButton.addEventListener('mousedown',e=>e.preventDefault());imageButton.addEventListener('click',()=>{
    const url=window.prompt('输入已审核图片地址，例如 /files/12/ 或 /static/site/images/hero.jpg');
    if(!url)return;if(!/^\/(?:files|static)\//.test(url)){window.alert('仅允许站内已审核图片地址');return;}
    editor.focus();document.execCommand('insertImage',false,url);sync();
  });bar.append(imageButton);
  editor.addEventListener('input',sync);editor.addEventListener('paste',e=>{e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));sync();});
  const toggle=document.createElement('button');toggle.type='button';toggle.textContent='查看HTML源码';source.readOnly=true;toggle.addEventListener('click',()=>{sync();source.hidden=!source.hidden;toggle.textContent=source.hidden?'查看HTML源码':'收起HTML源码';});
  box.append(bar,editor,toggle);source.before(box);source.hidden=true;source.form.addEventListener('submit',()=>{if(!editor.hidden)sync();});
});
