/* Los modales */
document.querySelectorAll(".btn-ver").forEach(btn => {
    btn.addEventListener("click", () => {
        const modalId = btn.dataset.modal;
        document.getElementById(modalId).style.display = "flex";
    });
});

document.querySelectorAll(".cerrar").forEach(x => {
    x.addEventListener("click", () => {
        x.parentElement.parentElement.style.display = "none";
    });
});

window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.style.display = "none";
    }
});

/* El texto, sí, es manual */
const descripcionesModales = {
    "modal1": [
        "Modificación de la página de los gerentes para validar vacaciones agrupando las fechas por empleado y agregando las validaciones para cada fecha.",
        "Modificación completa de la página de los usuarios para solicitar vacaciones.",
        "Modificación de los calendarios de vacaciones para las vistas del gerente usando FullCalendar.",
        "Modificación de la vista de aprobación de beneficios flexibles agregando las acciones y su funcionalidad.",
        "Creación del módulo de Descanso Físico Real en Peoplenet y modificación de los módulos relacionados como el de incidencias."
    ],
    "modal-proyecto1": [
        "Creación del proyecto utilizando JSP, se utilizaron API's como la SBS para manejar el tipo de cambio en el sistema",
        "Para la gestión de nuevos clientes se usaron las API's de la RENIEC y la SUNAT para traer los datos personales.",
        "Para la gestión del retiro y depósito se valida el tipo de cuenta y se utiliza el tipo de cambio registrado en el sistema con cambio diario.",
        "Se crearon modales reutilizables adaptables a las funciones de cada página."
    ],
    "modal-proyecto2": [
        "Desarrollo de un sistema de portal docente para una Institución Educativa, se consideraron los roles de director, docente, tutor y auxiliar.",
        "Se uso FullCalendar para mostrar los días de clases para el personal.",
        "Se desarrollo un módulo para el manejo de archivos PDF para la gestión de exámenes.",
        "Se uso FullCalendar para mostrar la gestión de asistencia en la vista del auxiliar.",
        "Se hizo uso de Google Scripts para el envio simple de correos."
    ],
    "modal-proyecto3": [
        "Tablero Kanban desarrollado en C#, maneja distintos campos para las tareas.",
        "Se le desarrollaron elementos visuales como animaciones y el resaltado de elementos.",
        "Cada tarea es editable permitiendole modificar o agregar más campos.",
        "Se uso Google Script para manejar el acceso a archivos en Google Drive."
    ]
};

/* El carrusel */
document.querySelectorAll(".modal").forEach(modal => {
    const inner = modal.querySelector(".carousel-inner");
    const images = modal.querySelectorAll(".carousel-inner img");
    let index = 0;

    const descripcion = modal.querySelector("p[id^='desc-']");
    const descripciones = descripcionesModales[modal.id] || [];
    
    if(descripcion && descripciones.length) descripcion.textContent = descripciones[0];

    modal.querySelector(".next")?.addEventListener("click", () => {
        index = (index + 1) % images.length;
        inner.style.transform = `translateX(-${index * 100}%)`;
        if(descripcion && descripciones.length) descripcion.textContent = descripciones[index];
    });

    modal.querySelector(".prev")?.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        inner.style.transform = `translateX(-${index * 100}%)`;
        if(descripcion && descripciones.length) descripcion.textContent = descripciones[index];
    });
});
