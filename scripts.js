function onLoad() {

    request = new XMLHttpRequest();

    request.open("GET", "data.json", true);

    request.onreadystatechange = function() {

        if (request.readyState == 4 && request.status == 200) {

            result = request.responseText;
            cover_list = JSON.parse(result);

            document.getElementById("json_str").innerHTML = JSON.stringify(cover_list);


        }

            request.send();
            console.log("4 request sent");

}
