console.log("clicked a button");
$(document).ready(function ()
{
    $(".form-control submit").click(function (event)
    {
        var name = $(".name").val();
        var email = $(".email").val();
        var message = $(".message").val();
        var email = $(".email").val();
        var statusElm = $(".status")
        statusElm.empty()

        if(email.length >=15 && email.includes("@") && email.includes("."))
        {
            statusElm.append("<div>Email is not valid</div>")
        }






    })
})