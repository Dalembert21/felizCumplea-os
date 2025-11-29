onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 1000);
};

// Función para verificar la contraseña
function checkPassword() {
    const correctPassword = "23042002"; // Fecha de cuando nos hicimos enamorados 
    const inputPassword = document.getElementById("passwordInput").value;
    const errorMessage = document.getElementById("errorMessage");
    const accessContainer = document.getElementById("accessContainer");
    const mainContent = document.getElementById("mainContent");

    if (inputPassword === correctPassword) {
        // Contraseña correcta, mostrar contenido
        accessContainer.style.display = "none";
        mainContent.style.display = "block";

        // Efecto especial de transición
        mainContent.style.animation = "fadeIn 1.5s";

        // Iniciar música al acceder correctamente
        startMusic();
    } else {
        // Contraseña incorrecta, mostrar error
        errorMessage.style.display = "block";
        document.getElementById("passwordInput").value = "";

        // Efecto de vibración para indicar error
        accessContainer.style.animation = "shake 0.5s";
        setTimeout(() => {
            accessContainer.style.animation = "";
        }, 500);
    }
}

function flipCard(element) {
    element.classList.toggle('flipped');

    // Detener la animación de escala al hacer clic
    const img = element.querySelector('img');
    img.style.transform = 'scale(1)';
}

// Control de música
const music = document.getElementById('backgroundMusic');
const toggleBtn = document.getElementById('musicToggle');
const volumeControl = document.getElementById('volumeControl');

// Configuración inicial
music.volume = 0.5;
toggleBtn.style.display = 'none'; 

// Función para iniciar la música
function startMusic() {
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(error => {
            
            toggleBtn.style.display = 'block';
            console.log("La reproducción automática fue bloqueada:", error);
        });
    }

    toggleBtn.style.display = 'block';
    toggleBtn.textContent = '♪';
}

// Reproducir música al primer clic en cualquier parte de la página
let musicStarted = false;
document.addEventListener("click", function () {
    if (!musicStarted) {
        startMusic();
        musicStarted = true;
    }
});

// Evento para el botón de toggle
toggleBtn.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        toggleBtn.textContent = '♪';
    } else {
        music.pause();
        toggleBtn.textContent = '🔇';
    }
});

// Control de volumen
volumeControl.addEventListener('input', function () {
    music.volume = this.value;
});

// Permitir presionar Enter para enviar el formulario
document.getElementById("passwordInput").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});

// Agregar estilos de animación dinámicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);
