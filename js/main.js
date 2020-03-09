const getSearchBtn = document.getElementById("searchBtn");
const getContent = document.querySelector(".content");
const getSearchBox = document.querySelector(".search-box");

const API_URL = `http://api.giphy.com/v1/gifs/search?api_key=cfkdhaiJkhyAPr0qZb9gl60jZgbAjKA0&limit=8`;

function getPhotos(API_URL, getQuery) {
	fetch(`${API_URL}&q=${getQuery}`)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			const getMap = data.data.map((x) => {
				const item = document.createElement("div");
				item.classList.add("gif");
				const innerImg = document.createElement("img");
				innerImg.src = x.images.preview_webp.url && x.images.preview_webp.url;
				item.appendChild(innerImg);
				return item;
			});
			getMap.forEach((element) => {
				getContent.appendChild(element);
			});
		});
}

getSearchBtn.addEventListener("click", (e) => {
	getContent.innerHTML = "";
	const getQuery = document.getElementById("query").value;
	getPhotos(API_URL, getQuery);
	// Animation
	getSearchBox.classList.remove("hideBtn");
	getContent.classList.remove("hideContent");
	e.preventDefault();
});
