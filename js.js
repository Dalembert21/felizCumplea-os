
        onload = () => {
            const c = setTimeout(() => {
                document.body.classList.remove("not-loaded");
                clearTimeout(c);
            }, 1000);
        };

        // Función para verificar la contraseña
        function checkPassword() {
            const correctPassword = "26102024"; // La fecha cuando se hicieron novios
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
        
        // Permitir presionar Enter para enviar el formulario
        document.getElementById("passwordInput").addEventListener("keyup", function(event) {
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