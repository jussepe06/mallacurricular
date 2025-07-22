// Script actualizado para la malla de Medicina Humana USMP

// Esta función se llama cuando se hace clic sobre una asignatura
function aprobar(id) {
  const ramo = document.getElementById(id);
  if (ramo.classList.contains("bloqueado")) return;

  // Marcar el curso como aprobado visualmente
  ramo.classList.toggle("aprobado");

  // Aquí podrías agregar lógica para desbloquear ramos relacionados
  // (si se desea implementar lógica de prerrequisitos más adelante)
}

// Posible espacio para agregar desbloqueos por semestre o prerrequisitos
// Por ejemplo:
// const prerrequisitos = {
//   'fisica_aplicada': ['fisica'],
//   'bioquimica': ['quimica_aplicada'],
//   'anatomia2': ['anatomia1']
// };

// function actualizarDesbloqueos() {
//   Object.keys(prerrequisitos).forEach(ramoId => {
//     const requisitos = prerrequisitos[ramoId];
//     const completados = requisitos.every(id => document.getElementById(id).classList.contains("aprobado"));
//     if (completados) {
//       document.getElementById(ramoId).classList.remove("bloqueado");
//     }
//   });
// }

// Nota: Para funciones más avanzadas, como guardar el progreso en localStorage, desbloqueo automático por prerrequisitos, o animaciones, puedo ayudarte a implementarlo paso a paso.

console.log("Script de malla Medicina USMP cargado.");

