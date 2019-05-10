const KEY= "?client_id=184c2294b3bc62d1a5c5a751cb2f2e9d607ed5492d72860d8ba058fdb42bf11b";

const URL = `https://api.unsplash.com/photos`;

const fetchImages = () => {
    fetch(URL).then(response => response.json());
}

export { fetchImages } ;