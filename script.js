const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(event) {

    if (event.key === "Enter") {

        const search = searchBox.value;

        alert("You searched for: " + search);

    }

});
