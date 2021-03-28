// function onLoad() {

//     request = new XMLHttpRequest();

//     request.open("GET", "https://pranavjain20.github.io/HW9/cover_list.json", true);

//     request.onreadystatechange = function() {

//         if (request.readyState == 4 && request.status == 200) {

//             result = request.responseText;
// //             document.write(result);
// //             cover_list = JSON.parse(result);

// //             document.getElementById("json_str").innerHTML = JSON.stringify(cover_list);
//         }
//             }
//             request.send();
//             console.log("4 request sent");

// }

// $(document).ready(function(){
//     console.log('1');
//     $.get("https://pranavjain20.github.io/HW9/cover_list.json",
//     function(cover_list){
//         console.log('2');
//         str = JSON.stringify(cover_list);
//         console.log("asdf");
//         $("#json_str").value("asdf");
//     })

// });

$(document).ready(function(){
    $.get("https://pranavjain20.github.io/HW9/cover_list.json", function(cover_list){
        str = JSON.stringify(cover_list);
        $("#json_str").text(str);

        songs = JSON.parse(str);
        dataHTML = "<h3>User Friendly Display</h3>";
        songs.forEach(function(song){
            dataHTML += "<p>";
            dataHTML += "<strong>" + song.title + "</strong><br>";
            dataHTML += "artist: " + song.artists.join(", ") + "<br>";
            dataHTML += "Genre: " + song.genres.join(", ") + "<br>";
            dataHTML += "</p><br>";
        });
        $("#song_data").html(dataHTML);

        filteredHTML = "<h3>Filtered Data</h3>";
        filteredHTML += "<p> Select a genre: <select id='genre_select'>";
        genreSet = [];
        songs.forEach(function(song) {
            song.genre.forEach(function(genre){
                if (!genreSet.includes(genre)) {
                    genreSet.push(genre);
                    filteredHTML += "<option value='" + genre + "'>" + genre + "</option>"
                }
            });
        });
        filteredHTML  += "</select>&nbsp&nbsp<input type='button' value='Filter'></p><br>";
        $("#filtered_data").html(filteredHTML);

        $(":button").click(function(){
            selectedGenre = document.getElementById("genre_select").value;
            displayHTML = "<p><strong>Showing Genre: " + selectedGenre + "</strong><p><br>";
            songs.forEach(function(song) {
                if (song.genres.includes(selectedGenre)){
                    displayHTML += "<p>";
                    displayHTML += "<strong>" + song.title + "</strong><br>";
                    displayHTML += "artist: " + song.artist.join(", ") + "<br>";
                    displayHTML += "genre: " + song.genre.join(", ") + "<br>";
                    displayHTML += "year: " + song.year;
                    displayHTML += "</p><br>";
                }
            });
            $("#filtered_data_display").html(displayHTML);
        });
    });
});
