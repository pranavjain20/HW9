function onLoad() {

    request = new XMLHttpRequest();

    request.open("GET", "cover_list.json", true);

    request.onreadystatechange = function() {

        if (request.readyState == 4 && request.status == 200) {

            result = request.responseText;
            document.write(result);
//             cover_list = JSON.parse(result);

//             document.getElementById("json_str").innerHTML = JSON.stringify(cover_list);
        }
            }
            request.send();
            console.log("4 request sent");

}
