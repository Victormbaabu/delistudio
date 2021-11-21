$(documwnt).ready(function(){
    //frontend

    //what we do icons control

    //design 
    $("#design-icon").click(function() {
        $("#design-icon").hide();
        $("#design-icon-description").toggle();
        $("#design-icon-description").show();
      });
      $("#design-icon-description").click(function() {
        $("#design-icon-description").hide();
        $("#design-icon").toggle();
        $("#design-icon").show();
      });

      //development

})
