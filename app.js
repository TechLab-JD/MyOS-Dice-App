// MyOS Dice & Picker.
const FACES = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
const out = document.getElementById('di-out');
if (out) {
  document.getElementById('di-roll').addEventListener('click', () => {
    const n = Math.min(10, Math.max(1, parseInt(document.getElementById('di-n').value, 10) || 1));
    const rolls = Array.from({ length: n }, () => 1 + Math.floor(Math.random() * 6));
    out.innerHTML = rolls.map((r) => FACES[r - 1]).join(' ') + ' <small>= ' + rolls.reduce((a, b) => a + b, 0) + '</small>';
  });
  document.getElementById('di-pick').addEventListener('click', () => {
    const opts = document.getElementById('di-list').value.split('\n').map((s) => s.trim()).filter(Boolean);
    const p = document.getElementById('di-picked');
    p.textContent = opts.length ? '→ ' + opts[Math.floor(Math.random() * opts.length)] : 'Add some options first';
  });
}
