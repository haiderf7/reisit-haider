const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const url = "https://www.haiderhashem.one/wp-json/wc/store/products/" + id;

const corsUrl = url;

console.log(url);

const locationsContainer = document.querySelector(".locationsContainer");

function error(message = "error") {
	return `<div class"error">${message}</div>`;
}


async function getProductDetail() {
	try {
		const response = await fetch(corsUrl);
		const results = await response.json();
		const product = results;

		console.log(product);

		locationsContainer.innerHTML += `
                                    <div class="details">
                                        <h2>${product.name}</h2>
                                        <img src="${product.images[0].src}" style="max-width:300px " />
                                        <a href="booknow.html" class="cta-our-locations">Book now</a>
                                    </div>`;
	} catch (error) {
		console.log(error);
	}
}

getProductDetail();
