var path='';
var menuToggle = false;
var projHoverIn = true;

$(document).ready(function () {
    $('#showCase1').append('<img src="images/CS4903HW4.png" alt="WaterShader">');
    $('#showCase2').append('<img src="images/CS4475FinalProject.png" alt="Hamster">');
    $('#showCase3').append('<img src="images/CS3705FinalProject.png" alt="Preceptate">');
    $('#CV').css('left', (((window.innerWidth)-100)/2));
    $('#About').css({'top' : window.innerHeight+100+"px", 
        'left': (($('#About').width()-100)/2)+"px"});
    $('#me').css('left', (((window.innerWidth)-100)/2));
	$("#menu-toggle").click(function(e) {
        menuToggle = !menuToggle;
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        if(menuToggle){
            $("#menu-toggle").css('left','-5px');
            $("#menu-toggle").html(">");
            $('.projTeaseForm').css('top',"+="+($('#Project0').height()/2) );
        }
        else{
            $("#menu-toggle").css('left','240px');
            $("#menu-toggle").html("<");
            $('.projTeaseForm').css('top',"-="+($('#Project0').height()/2) );
        }
    });
    generateCV();
    generateJsonProj();
    setupGeneratedHTMLCarousel();
    projectClick();
    var scrollToAnchor = function( id ) {
 
    // grab the element to scroll to based on the name
        var elem = $("a[name='"+ id +"']");
 
    // if that didn't work, look for an element with our ID
        if ( typeof( elem.offset() ) === "undefined" ) {
          elem = $("#"+id);
        }
     
        // if the destination element exists
        if ( typeof( elem.offset() ) !== "undefined" ) {
     
          // do the scroll
          $('html, body').animate({
                  scrollTop: elem.offset().top
          }, 1000 );
     
        }
    };

  // bind to click event
  $("a").click(function( event ) {
 
    // only do this if it's an anchor link
    if ( $(this).attr("href").match("#") ) {
 
      // cancel default event propagation
      event.preventDefault();
 
      // scroll to the location
      var href = $(this).attr('href').replace('#', '')
      scrollToAnchor( href );
 
    }
 
  });
    console.log("document is ready.");


});
function generateJsonProj(){
    $.getJSON("./myProjs.json", function(json) {
        console.log(json);
        console.log(json[0]);
        console.log(json.length);
        for (i= 0; i < json.length; i++){
            $('#projSection').append('<div id="Project'+i+'" class = "thumbNails"><img id="thumb'+i+'" class="thumbImg" src="'+json[i].image+'"><div id="tease'+i+'" class="projTeaseForm"></div></div>');
            $('#Project'+i).css({"width":$('#projSection img').width(), 'display':'inline-block'});
            console.log(json[i].image);
            $('#tease'+i).append("<p>"+json[i].teaser+"</p>").hide();
            $('').css({"width": $('#projSection img').width()+"px", "top": $("#Project"+i).position().top+($('#Project'+i).height()/2)});
            //$('#Project'+i).append("<div id=teaseDes"+i+" class='teaseDesNail'><p>"+json[i].info+"</p></div>");
            // $('#teaseDes'+0).css({
            //     padding: "20px",
            //     "color":"white",
            //     "background-color": "black",
            //     position: "fixed",
            //     width: "300px",
            //     height: "100%",
            //     right:0,
            //     top:0
            // });
        }
        
        

        $(".thumbNails").mouseenter(
            function() {
                // console.log($(this)[0].childNodes[1].id);
                // console.log($(this).attr("id"));
                    $("#"+$(this)[0].childNodes[1].id).stop().fadeIn(500, function(){   
                        console.log($(this).context.previousSibling.id);
                        $("#"+ $(this).context.previousSibling.id).animate({
                            opacity:0.25
                        },500);

                    });
            });
        $(".thumbNails").mouseleave( function(){
                $("#"+$(this)[0].childNodes[1].id).stop().fadeOut(500, function(){
                    $("#"+ $(this).context.previousSibling.id).animate({
                            opacity:1.0
                    },500);

                });
        });
            // console.log($(this));   
            // console.log($(this).attr("id"));
            // var selected = $(this).attr("id");
            // console.log("HI:"+selected);
            // if(selected =="thumb0"){
            //     , function() {
            //         mouseOutImg = true;
            //     });
                
            // }
    });


}
function projectClick(){
    $(document).on('click', ".thumbNails", function() {
        var liId = $(this).attr("id");
        console.log($(this).context.lastChild.id);

        $("#"+$(this).context.lastChild.id).show();
    });
}

function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function generateCV(){
    $('#CV').append('<div id="Languages" class = "CVformat"><h4>Languages</h4><li>C#</li><li>JavaScript</li><li>HTML5/CSS3</li><li>CG/Open GLSL</li><li>Python</li><li>Java</li></div>');
    $('#CV').append('<div id="Webdev" class = "CVformat"><h4>Web Development</h4><li>JQuery & jQuery UI</li><li>BootStrap</li><li>d3.js</li><li>Three.js</li><li>AWS</li><li>Drupal</li></div>');
    $('#CV').append('<div id="Software" class = "CVformat"><h4>Software</h4><li>Unity 5</li><li>Maya</li><li>Adobe Suite</li><li>Windows OS</li><li>Mac OS</li><li>Linux</li></div>');
    $('#CV').append('<h4> Resume</h4><a href="https://drive.google.com/file/d/0B1hendiak234NlNmVlBBM2lrNXc/view?usp=sharing">Link</a');
}

function setupGeneratedHTMLCarousel(){
    // $.ajax({
    //     url:'http://www.example.com/somefile.ext',
    //     type:'HEAD',
    //     error: function()
    //     {
    //         //file not exists
    //     },
    //     success: function()
    //     {
    //         //file exists
    //     }
    // });
    var test = window.location.pathname.split('/');
    var test2 = window.location.pathname;
    var root = document.location.hostname;
    for (each in test){

        // if(test[each] !=  "charleslee.ninja"){
        //     path = path.concat(test[each]+"/");
        //     console.log(test[each]);
        //     console.log(path);
        // }
        // else if(test[each] ==  "charleslee.ninja") {
        //     path = path.concat(test[each]+"/");
        //     break
        // }
    }
    path = path.concat('/images/carousel_images');

}