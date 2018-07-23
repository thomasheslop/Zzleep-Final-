const button = document.querySelector('#btn')
let counter = 0
button.addEventListener('click', e => {
    counter = counter + 1
    searchYoutube()
})
function searchYoutube(){
    const apikey = "AIzaSyDyS09K4uazAEQnO2lU-Zs7_OAdB5YTkgA"
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apikey}&part=snippet&q=sleepy+music`
    const videoDiv = document.querySelector('#vid')
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const videos = data.items
        const numVideos = videos.length
        if (counter >= numVideos) {
            counter = 0
    }
        const firstVideo = videos[counter]
        const firstId = firstVideo.id.videoId
        videoDiv.innerHTML = `<iframe width="100%" height="500" src="https://www.youtube.com/embed/${firstId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`
        
    })
        .catch(err => console.log(err))
}