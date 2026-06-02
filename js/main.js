let toastTimer;

// Función para mostrar notificaciones flotantes (toast)
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// Alternar visibilidad de la contraseña (Mostrar/Ocultar)
document.getElementById('togglePw').addEventListener('click', function() {
  const inp = document.getElementById('contrasena');
  const icon = document.getElementById('eyeIcon');
  const showing = inp.type === 'text';
  
  inp.type = showing ? 'password' : 'text';
  icon.innerHTML = showing
    ? '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
    : '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>';
  
  this.setAttribute('aria-label', showing ? 'Mostrar contraseña' : 'Ocultar contraseña');
});

// Manejo del evento del botón de Iniciar Sesión y Validaciones
function handleLogin() {
  const u = document.getElementById('usuario');
  const p = document.getElementById('contrasena');
  const eu = document.getElementById('err-usuario');
  const ep = document.getElementById('err-contrasena');
  let valid = true;

  // Limpiar estados de error previos
  [u, p].forEach(i => i.classList.remove('invalid'));
  [eu, ep].forEach(e => e.classList.remove('show'));

  // Validaciones de campos vacíos
  if (!u.value.trim()) { u.classList.add('invalid'); eu.classList.add('show'); valid = false; }
  if (!p.value)         { p.classList.add('invalid'); ep.classList.add('show'); valid = false; }
  if (!valid) return;

  // Simulación del proceso de carga
  const btn = document.getElementById('btnLogin');
  btn.classList.add('loading');
  setTimeout(() => {
    btn.classList.remove('loading');
    showToast('✅ Bienvenido, ' + u.value.trim() + '!');
  }, 1800);
}

// Permitir el inicio de sesión presionando la tecla "Enter"
document.addEventListener('keydown', e => { 
  if (e.key === 'Enter') handleLogin(); 
});

// Remover errores visuales al momento en que el usuario empieza a escribir de nuevo
document.getElementById('usuario').addEventListener('input', function() {
  this.classList.remove('invalid');
  document.getElementById('err-usuario').classList.remove('show');
});

document.getElementById('contrasena').addEventListener('input', function() {
  this.classList.remove('invalid');
  document.getElementById('err-contrasena').classList.remove('show');
});