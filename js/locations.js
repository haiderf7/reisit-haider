const url = "https://www.haiderhashem.one/wp-json/wc/store/products/";

const content = document.querySelector(".our-location-main");

function error(message = "error") {
	return `<div class"error">${message}</div>`;
}

async function getProducts() {
	try {
		const response = await fetch(url);
		const results = await response.json();
	

		console.log(results);

		for (let i = 0; i < results.length; i++) {
			content.innerHTML += `<div>
                            <img
                              src="${results[i].images[0].src}" style="max-width:100%">
                              
              
                            <p class="locations-text">${results[i].name}</p>
                            <p class="locations-text">4040 Oslo</p>
                            <a href="locationinfo.html?id=${results[i].id}" class="cta-our-locations">More info</a>
                            <a href="booknow.html" class="cta-our-locations">Book now</a>
                          </div>`;

		}
	} catch (error) {}
}

getProducts();
