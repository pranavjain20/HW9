function onLoad() {

    request = new XMLHttpRequest();

    request.open("GET", "cover_list.json", true);

    request.onreadystatechange = function() {

        if (request.readyState == 4 && request.status == 200) {

            result = request.responseText;
            cover_list = JSON.parse(result);

            document.getElementById("json_str").innerHTML = JSON.stringify(cover_list);


        } else if (request.readyState == 4 && request.status != 200) {

            document.getElementById("messages").innerHTML = "Whoops, something went terribly wrong!";

        } else if (request.readyState == 3) {

            document.getElementById("messages").innerHTML = "Come back soon!";

        }

            }//end on readystate change

        // Step 4: fire off the HTTP request
            request.send();
            console.log("4 request sent");

}
