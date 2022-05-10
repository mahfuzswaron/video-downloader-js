const DownloadForm = document.getElementById('download-form');
DownloadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    if (url.indexOf('https://www.youtube.com/watch') !== 0) {
        console.log('invalid url')
    }
    else {
        console.log(url)
    }
})