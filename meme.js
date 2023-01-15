const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const meme = document.createElement("div");
    const top_text = document.createElement("div");
    const bottom_text = document.createElement("div");
    const img = document.createElement("img");

    const btn = document.createElement("button");
    btn.setAttribute("type", "button");

    img.src = document.getElementById('picurl').value;
    top_text.classList.add("top-text");
    top_text.innerHTML = document.getElementById('text-top').value;

    bottom_text.classList.add("bottom-text");
    bottom_text.innerHTML = document.getElementById('text-lower').value;

    btn.innerHTML = "REMOVE";

    meme.classList.add("meme");
    meme.appendChild(top_text);
    meme.appendChild(bottom_text);
    meme.appendChild(img);
    meme.appendChild(btn);

    let memeLocation = document.getElementById('location');
    memeLocation.appendChild(meme);

    document.getElementById('picurl').value = "";
    document.getElementById('text-top').value = "";
    document.getElementById('text-lower').value = "";

    btn.addEventListener('click', function (e) {
        meme.remove();
    })
});