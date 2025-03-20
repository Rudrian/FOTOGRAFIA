function email() {
    const feedback = document.getElementById('input').value.trim();

    if (feedback === "") {
        alert('Por favor, insira seu feedback antes de enviar!');
    } else {
        alert('Enviado, agradecemos seu feedback! :)');
    }
}
