$(document).ready(function(){
    $("#icon-1").click(function(){
     $("#design").show();
     $("#icon-1").hide();
    });
});
$(document).ready(function(){
    $("#icon-2").click(function(){
     $("#development").show();
     $("#icon-2").hide();
    });
});    
$(document).ready(function(){
    $("#icon-3").click(function(){
     $("#product").show();
     $("#icon-3").hide();
    });
});
$(document).ready(function(){
    $("#design").click(function(){
        $("#icon-1").show();
        $("#design").hide();
    });
});
$(document).ready(function(){
    $("#product").click(function(){
        $("#icon-3").show();
        $("#product").hide();
}); 
});
$(document).ready(function(){
    $("#development").click(function(){
        $("#icon-2").show();
        $("#development").hide();
});
});
//hover
$(document).ready(function(){
    $('#image1').hover(function(){
        $("#hide1").show();
    }).mouseleave(function(){
        $("#hide1").hide();
    });
});
$(document).ready(function(){
    $('#image2').hover(function(){
        $("#hide2").show();
    }).mouseleave(function(){
        $("#hide2").hide();
    });
});
$(document).ready(function(){
    $('#image3').hover(function(){
        $("#hide3").show();
    }).mouseleave(function(){
        $("#hide3").hide();
    });
});
$(document).ready(function(){
    $('#image4').hover(function(){
        $("#hide4").show();
    }).mouseleave(function(){
        $("#hide4").hide();
    });
});
$(document).ready(function(){
    $('#image5').hover(function(){
        $("#hide5").show();
    }).mouseleave(function(){
        $("#hide5").hide();
    });
});
$(document).ready(function(){
    $('#image6').hover(function(){
        $("#hide6").show();
    }).mouseleave(function(){
        $("#hide6").hide();
    });
});
$(document).ready(function(){
    $('#image7').hover(function(){
        $("#hide7").show();
    }).mouseleave(function(){
        $("#hide7").hide();
    });
});
$(document).ready(function(){
    $('#image8').hover(function(){
        $("#hide8").show();
    }).mouseleave(function(){
        $("#hide8").hide();
    });
});
//form input
$(document).ready(function(){
    $('form').submit(function(){
        var name = $('input#name').val();
        var email = $('input#email').val();
        var text = $('textarea#comment').val();
        if ($('input#name').val() && $('input#email').val() && $('textarea#comment').val() !== ""){
            alert(name+", we have recieved your email. Thanks for your response.");
        } else {
            alert("Please enter your name and email.");
        }
    });
});