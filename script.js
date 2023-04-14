let formularioNasa = document.getElementById("formNasa");

formularioNasa.addEventListener("submit", function (event) {
    event.preventDefault();
    const KEY = apiKey.value || "DEMO_KEY";
    let page = pagina.value || 1;
    let urlBase =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos";
    fetch(urlBase + `?sol=1000&page=${page}&api_key=${KEY}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let contenedorFotos = document.getElementById("fotos");

            let acumulador = "";

            data.photos.forEach((foto, index) => {
                acumulador += `
                    <div>
                        <h2>Robot: ${foto.rover.name}</h2>
                        <p>Fecha foto: ${foto.earth_date}</p>
                        <img src="${foto.img_src}" alt="foto-${index}">
                    </div>
                
                `;
            });

            contenedorFotos.innerHTML = acumulador;
        })
        .catch((error) => {
            alert("Se ha generado un error al consultar la api.");
        });
});
