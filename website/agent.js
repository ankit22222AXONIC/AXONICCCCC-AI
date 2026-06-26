// Axonic Gmail Agent helper
// Requires: user-provided OAuth access token with Gmail scopes

function el(id){return document.getElementById(id);} 

function show(msg){const out=el('gmail-output'); if(out){out.insertAdjacentHTML('beforeend', `<div class="my-1">${msg}</div>`); out.scrollTop = out.scrollHeight;}}

function clearOutput(){const out=el('gmail-output'); if(out) out.innerHTML='';}

async function listInbox(token){
  clearOutput();
  show('Listing last 10 messages...');
  const res = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=10', {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if(!res.ok){ show('Failed to list: ' + res.status); return; }
  const data = await res.json();
  if(!data.messages || data.messages.length===0){ show('No messages found'); return; }
  for(const m of data.messages){
    const msgRes = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=metadata&metadataHeaders=From&metadataHeaders=Subject`, {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    if(!msgRes.ok){ show('Failed to fetch message '+m.id); continue; }
    const msg = await msgRes.json();
    const from = (msg.payload.headers.find(h=>h.name==='From')||{}).value||'';
    const subj = (msg.payload.headers.find(h=>h.name==='Subject')||{}).value||'';
    show(`<strong>${subj}</strong> — <em>${from}</em> <button data-id="${m.id}" class="gmail-view-btn ml-2 px-2 py-1 rounded bg-primary text-on-primary">View</button>`);
  }
}

async function getMessage(token, id){
  const res = await fetch(`https://www.googleapis.com/gmail/v1/users/me/messages/${id}?format=full`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
  if(!res.ok){ show('Failed to load message'); return; }
  const msg = await res.json();
  // decode body
  const part = (msg.payload.parts || []).find(p=>p.mimeType==='text/plain') || msg.payload;
  let body = '';
  if(part && part.body && part.body.data) {
    body = atob(part.body.data.replace(/-/g,'+').replace(/_/g,'/'));
  }
  show(`<div class="p-2 bg-surface-variant rounded">${body.replace(/</g,'&lt;')}</div>`);
}

async function sendMessage(token, to, subject, body){
  const message = [
    `To: ${to}`,
    `Subject: ${subject}`,
    '',
    body
  ].join('\n');
  const encoded = btoa(unescape(encodeURIComponent(message))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  const res = await fetch('https://www.googleapis.com/gmail/v1/users/me/messages/send', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ raw: encoded })
  });
  if(!res.ok){ show('Send failed: '+res.status); return; }
  const data = await res.json();
  show('Message sent: '+data.id);
}

// UI wiring
document.addEventListener('click', (e)=>{
  if(e.target && e.target.classList && e.target.classList.contains('gmail-view-btn')){
    const id = e.target.getAttribute('data-id');
    const token = el('gmail-token').value.trim();
    if(!token){ show('Set access token first'); return; }
    getMessage(token, id);
  }
});

window.addEventListener('load', ()=>{
  const openBtn = el('open-gmail-agent');
  const panel = el('gmail-agent-panel');
  const listBtn = el('gmail-list');
  const sendOpen = el('gmail-send-open');
  const compose = el('gmail-compose');
  const sendBtn = el('gmail-send');
  const cancelBtn = el('gmail-cancel');

  openBtn.addEventListener('click', ()=> panel.classList.toggle('hidden'));
  listBtn.addEventListener('click', async ()=>{
    const token = el('gmail-token').value.trim(); if(!token){ alert('Paste access token first'); return; }
    await listInbox(token);
  });
  sendOpen.addEventListener('click', ()=>{ compose.classList.remove('hidden'); });
  cancelBtn.addEventListener('click', ()=>{ compose.classList.add('hidden'); });
  sendBtn.addEventListener('click', async ()=>{
    const token = el('gmail-token').value.trim(); if(!token){ alert('Paste access token first'); return; }
    const to = el('gmail-to').value.trim(); const subj = el('gmail-subject').value.trim(); const body = el('gmail-body').value.trim();
    if(!to||!body){ alert('To and body required'); return; }
    await sendMessage(token,to,subj,body);
    compose.classList.add('hidden');
  });
});

// Additional UI wiring for redesigned hero
window.addEventListener('load', ()=>{
  const inlineModel = el('inline-model-button');
  if(inlineModel){ inlineModel.addEventListener('click', ()=>{
    const dm = el('desktop-model-button'); if(dm) dm.click();
  }); }
  const fromGmailQuick = el('from-gmail-quick');
  if(fromGmailQuick){ fromGmailQuick.addEventListener('click', ()=>{
    const gbtn = el('open-gmail-agent'); if(gbtn) gbtn.click();
    const panel = el('gmail-agent-panel'); if(panel) panel.classList.remove('hidden');
  }); }
});
