document.getElementById('langBtn').addEventListener('click', function () {
    const currentLanguage = document.documentElement.lang;

    if (currentLanguage === 'en') {
        switchToSpanish();
        document.documentElement.lang = 'es';
    } else {
        switchToEnglish();
        document.documentElement.lang = 'en';
    }
});

function switchToSpanish() {
    document.getElementById('login-title').textContent = 'Iniciar sesión';
    document.getElementById('label-username').textContent = 'Nombre de usuario o correo electrónico';
    document.getElementById('label-password').textContent = 'Contraseña';
    document.getElementById('forgot-password').textContent = '¿Olvidaste tu contraseña?';
    document.getElementById('sign-in-btn').textContent = 'Iniciar sesión';
    document.getElementById('terms-link').textContent = 'Términos';
    document.getElementById('privacy-link').textContent = 'Privacidad';
    document.getElementById('cookies-link').textContent = 'Administrar cookies';
    document.getElementById('langBtn').textContent = 'Cambiar a inglés';
}

function switchToEnglish() {
    document.getElementById('login-title').textContent = 'Login';
    document.getElementById('label-username').textContent = 'Username or email address';
    document.getElementById('label-password').textContent = 'Password';
    document.getElementById('forgot-password').textContent = 'Forgot password?';
    document.getElementById('sign-in-btn').textContent = 'Sign in';
    document.getElementById('terms-link').textContent = 'Terms';
    document.getElementById('privacy-link').textContent = 'Privacy';
    document.getElementById('cookies-link').textContent = 'Manage cookies';
    document.getElementById('langBtn').textContent = 'Change Language';
}
