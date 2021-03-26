function onLoad() {

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

}

$(document).ready(function(){
    console.log('1');
    $.get("https://pranavjain20.github.io/HW9/cover_list.json",
    function(cover_list){
        console.log('2');
        str = JSON.stringify(cover_list);
        console.log("asdf");
        $("#json_str").value("asdf");
    })

});
