document.addEventListener("DOMContentLoaded", () => {
    const restaurantes = [
        {
            imagen: "./images/Comidas_logos/LogoDoradas.jpeg",
            nombre: "Doradas",
            descripcion: "ven disfruta",
            enlace: "#"
        },
        {
            imagen: "./images/Comidas_logos/LogoNitos.jpeg",
            nombre: "Nitos",
            descripcion: "ven disfruta",
            enlace: "#"
        },
        {
            imagen: "./images/Comidas_logos/LogoDenver.jpeg",
            nombre: "ven disfruta",
            descripcion: "ven disfruta",
            enlace: "#"
        }
        
    ];

    const restaurantCards = document.getElementById('restaurant-cards');

    restaurantes.forEach(restaurante => {
        const cardHTML = `
            <div class="col-lg-4 col-4 mb-4">
                <div class="Card cards_resta">
                    <div class="img_re3"></div>
                    <div class="d-flex justify-content-center img_ce">
                        <img src="${restaurante.imagen}" alt="Imagen" />
                    </div>
                    <div class="card_body card_body">
                        <h3>${restaurante.nombre}</h3>
                        <p>${restaurante.descripcion}</p>
                        <a href="${restaurante.enlace}" class="button">
                            Mas info
                        </a>
                    </div>
                </div>
            </div>
        `;

        restaurantCards.insertAdjacentHTML('beforeend', cardHTML);
    });
});