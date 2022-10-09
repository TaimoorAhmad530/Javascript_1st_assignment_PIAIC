function make_album(artist_name,album_title,album_tracks)
{
    var obj={
        artist_name:artist_name,
        album_title:album_title,
        album_tracks:album_tracks
    }
    return obj;
}

console.log(make_album("atif_aslam","sufi_music"));
console.log(make_album("arijit_singh","classic_music"));
console.log(make_album("taylo_swift","pop_music"));
console.log(make_album("ED_Sheren","classic",43));