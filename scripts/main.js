
// If window width is greater than 768px then expand the references section
function fnExpandReferencesDiv() {
    var mq = window.matchMedia("(min-width: 768px)");

    if (mq.matches) { // window width is at least 768px
        console.log(" window width is at least 768px wide");
        // document.getElementById("collapsibleReferencesDiv").className += " in";
        //Above works but I used the below as per Bootstrap documentation
        $('#collapsibleReferencesDiv').collapse('show');
        document.getElementById("referencesMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("referencesMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    }
    else { // window width is less than 768px
        console.log(" window width is less than 768px");
        document.getElementById("referencesMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("referencesMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    }
};


//Display 'Show Less' or 'Show More' and up/down arrows on the services divs depending on the state that they are in. The above
//code is for on page load, as determined by the initial viewport (usually screen size). 

$(document).ready(function () {

    //If Collapsible Divs are shown then display 'Show Less' and 'triangle-top':

    $("#collapsibleCommercialDiv").on('shown.bs.collapse', function () {
        document.getElementById("commercialMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("commercialMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    });

    $("#collapsibleResidentialDiv").on('shown.bs.collapse', function () {
        document.getElementById("residentialMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("residentialMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    });

    $("#collapsibleReferencesDiv").on('shown.bs.collapse', function () {
        document.getElementById("referencesMoreLessTrigger").innerHTML = 'Show Less';
        document.getElementById("referencesMoreLessTriangle").className = "glyphicon glyphicon-triangle-top";
    });


    //If Collapsible Divs are hidden then display 'Show More' 'triangle-bottom':

    $("#collapsibleCommercialDiv").on('hidden.bs.collapse', function () {
        document.getElementById("commercialMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("commercialMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    });

    $("#collapsibleResidentialDiv").on('hidden.bs.collapse', function () {
        document.getElementById("residentialMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("residentialMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    });

    $("#collapsibleReferencesDiv").on('hidden.bs.collapse', function () {
        document.getElementById("referencesMoreLessTrigger").innerHTML = 'Show More';
        document.getElementById("referencesMoreLessTriangle").className = "glyphicon glyphicon-triangle-bottom";
    });
});



//Facebook Function - code gotten from facebook - 'embedding pages' documentation
//(function(d, s, id) {
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) return;
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.6";
//    fjs.parentNode.insertBefore(js, fjs);
//}(document, 'script', 'facebook-jssdk'));