//  page d'accueil photographes
function photographerFactory(data) {
  const { name, portrait, id, country, city, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.className = "photographer_card";

    const linkUser = document.createElement("a");
    linkUser.href = `photographer.html?photographer=${id}`;
    linkUser.ariaLabel = `Voir la page du photographe ${name}`;
    linkUser.setAttribute("onkeydown", "openlink(event)");

    const img = getUserPictureDOM();

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const location = document.createElement("p");
    location.textContent = `${city}, ${country}`;

    const taglineP = document.createElement("p");
    taglineP.textContent = tagline;

    const priceP = document.createElement("p");
    priceP.textContent = `${price}€/jour`;

    linkUser.appendChild(img);
    linkUser.appendChild(h2);
    article.appendChild(linkUser);

    article.appendChild(location);
    article.appendChild(taglineP);
    article.appendChild(priceP);

    return article;
  }

  // profiles photographes accueil
  function getUserPictureDOM() {
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", `Photo de profil de ${name}`);
    img.setAttribute("loading", "lazy");
    img.className = "photographer_img";

    return img;
  }

  // profile photographe/photographer.html
  function getUserProfilDOM() {
    const profil = document.createElement("div");
    profil.className = "photographer_profil";

    const h1 = document.createElement("h1");
    h1.textContent = name;

    const location = document.createElement("h2");
    location.textContent = `${city}, ${country}`;
    const taglineP = document.createElement("p");
    taglineP.textContent = tagline;

    profil.appendChild(h1);
    profil.appendChild(location);
    profil.appendChild(taglineP);

    return profil;
  }

  return { getUserCardDOM, price, getUserPictureDOM, getUserProfilDOM };
}
