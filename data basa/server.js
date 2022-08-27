function loadServer() {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => displayServer(data));
}
loadServer();
