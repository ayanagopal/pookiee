$(document).ready(function () {
    let messagesYes = [
        "Think again! 🥲", "Come on!", "You want to!😙", 
        "Just say YES!", "No escape!", "Almost there!", "YESS!! ❤️","Free hugs?","😟😟😟"
    ];
    let messagesNo = [
        "Really?", "Are you sure?", "Its a mistake!", 
        "Reconsider!", "Come on!", "Fine 😏", "Okay... 😢","Baby please",
        "Positive?"
    ];

    let count = 0; 

    $("#no").click(function (event) {
        event.preventDefault(); 

        let yesButton = $("#yes");
        let noButton = $("#no");

        if (count >= 10) {
            yesButton.css({
                "position": "fixed",
                "bottom": "5px",
                "top": "5px",
                "height": "auto",
                "width": "calc(100% - 20px)",
                "font-size": "clamp(40px, 8vw, 70px)", 
                "display": "flex",
                "align-items": "center",
                "justify-content": "center",
                "background-color": "#DE3163",
                "color": "white",
                "text-align": "center",
                "z-index": "9999",
            });
            yesButton.text(" YES , NO ESCAPE! ❤️");
            noButton.hide();
            return; 
        }

        
        yesButton.css({
            "padding-top": "+=10px",
            "padding-bottom": "+=10px",
            "padding-left": "+=20px",
            "padding-right": "+=20px"
        });

       
        yesButton.css("font-size", "+=5px");

       
        if (count < messagesYes.length) {
            yesButton.find(".caption").text(`${messagesYes[count]}`);
            noButton.find(".caption").text(`${messagesNo[count]}`);
        } else {
            yesButton.find(".caption").text("Love please??😟❤️");
            noButton.find(".caption").text("I give up... 😭");
        }

        count++; 
    });

    $("#yes").click(function (event) {
        event.preventDefault(); 

       
        $("#no").hide();
        $("#yes").hide();

    
        $(".heading h1").text("I know you love me! ❤️").fadeIn(300);

       
        $(".image img").fadeOut(10, function () { 
            $(this).attr("src", "images/kissie.gif")
                .css({
                    "width": "80%",  
                })
                .fadeIn(300); 
        });
        
    });
    
});
