(function () {
    const textarea = document.getElementById('msg');
    const success = document.getElementById('redirigir');
    const incorrecto = document.getElementById('incorrecto');
    const form = document.querySelector('form');
    let secretMsg = "hola mi amor, feliz cumpleee. Prometo hacerte un regalo real cuando termine la cuarentena. te amo muchooo. adioss."
    secretMsg = secretMsg.toLowerCase().split(" ").join("").split('.').join('').split(',').join('');
    console.log(secretMsg)

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let msg = textarea.value.toLowerCase().trim().split(" ").join("").split('.').join('').split(',').join('');
        msg = msg.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
        console.log(msg)
        if (msg === secretMsg) {
            let count = 4;
            success.style.display = 'block'
            success.innerText = 'Felicitaciones!'
            //console.log('Superr')
            let interval = setInterval(function () {
                count--;
                if (count !== 0) {
                    success.innerText = 'Felicitaciones!, tu regalo en ' + count;

                } else {
                    console.log('ir a pagina');
                    clearInterval(interval);
                    window.location.assign("./feliz-cumple-angi/index.html")
                }
            }, 1000);

        } else {
            incorrecto.style.display = 'block'
            let timer = setTimeout(function () {
                incorrecto.style.display = 'none'
            }, 3000);
        }
    })
})();