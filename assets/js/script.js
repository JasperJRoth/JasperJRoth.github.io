var hasClicked = window.localStorage.getItem("hasClicked") ? true: false;

function togglePortfolio(){
    if($("#portfolioCard").css("display") === "block"){
        $("#portfolioCard").css("display", "none");

        $("#portfolioButton").text("Open Portfolio");
    }else{
        $("#portfolioCard").css("display", "block");

        $("#portfolio").carousel({
            full_width: true,
            indicators: true,
            onCycleTo: function(){
                setCarouselLink(this.center)
            }
        });

        $("#portfolioButton").text("Close Portfolio");
    }
}

function setCarouselLink(index){
    switch(index % 3){
        case 0:
            $("#folioLink").css("display", "none");
            break;
        case 1:
            $("#folioLink").data("href", "https://jasperjroth.github.io/MoodoMovie/")
            $("#folioLink").css("display", "block");
            $("#folioLink").on("click", function(){
                open($("#folioLink").data("href"));
            });
            break;
        case 2:
            $("#folioLink").data("href", "https://jasperjroth.github.io/TrainScheduler/")
            $("#folioLink").css("display", "block");
            $("#folioLink").on("click", function(){
                open($("#folioLink").data("href"));
            });
            break;
        default:
            $("#folioLink").css("display", "none");
    }
}

$(document).ready(function(){
    if(hasClicked === true){
        $("#clickHere").css("display", "none");
    }

    $("#portfolioButton").on("click", function(event){
        window.localStorage.setItem("hasClicked", "true")
        $("#clickHere").css("display", "none");
    });

    setTimeout(function(){
        $("#card2").css("display", "block");
    }, 500);

    $('.moveNextCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#portfolio').carousel('next');
     });
  
     $('.movePrevCarousel').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#portfolio').carousel('prev');
     });
});