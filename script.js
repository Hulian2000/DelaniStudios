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
