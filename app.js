const DownloadForm = document.getElementById('download-form');
DownloadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    format = '480';
    download(url, format);
    document.getElementById('url-input').value = '';
});
const download = (url, format) => {
    const button = document.getElementById('download-button');
    button.style.padding = '0';
    button.innerHTML = `<iframe style='height: 52px; width:100%; border: none; overflow: hidden;' src="https://loader.to/api/button/?url=${url}&f=${format}"></iframe>`;
    
}
