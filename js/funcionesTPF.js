// Funcion para Establecer porcentaje grafico de barras

function setearPorcentaje( elemento, porcentaje) {
    const progressBar = document.getElementById( elemento );
    const progresBarText = progressBar.querySelector('.txtBarra');
    progressBar.style.width = porcentaje + '%';
    progresBarText.textContent = porcentaje + '%';
}

function cerrarVentana() { 
    window.open('','_parent',''); 
    window.close(); 
} 


