$(document).ready(function () {
    $(".add-comment").on("click", function (event) {
        var comment = prompt("Enter your comment.");
        console.log(comment);
        var thisID = $(this).data("id");
        $.ajax({
            method: "POST",
            url: "/comment/" + thisID,
            data: {title:comment}
        }).then(function (response) {
            console.log(response);
            window.location.href = response;
        });
    })
    $(".delete-comment").on("click", function (event) {
        var thisID = $(this).data("id");
        $.ajax({
            method: "DELETE",
            url: "/comment/" + thisID
        }).then(function (response) {
            //console.log(response);
            window.location.href = response;
        });
    })
    $(".save").on("click", function (event) {
        var thisID = $(this).data("id");
        console.log(thisID);
        $.ajax({
            method: "POST",
            url: "/save/" + thisID
        }).then(function (response) {
            console.log(response);
            window.location.href = response;
        });
    })
})
