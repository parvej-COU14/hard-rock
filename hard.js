const searchSongs=()=>{
    const searchText=document.getElementById('search-field').Value;
    const url=`https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displaySongs(data.data));
}

const displaySongs=songs=>{
    const songContainer=document.getElementById('song-container')
   songs.forEach(song=>{
       const songDiv=document.createElement('div');
       songDiv.className=
       songDiv.innerText=song.title;
       songContainer.appendChild(li);
   })
}