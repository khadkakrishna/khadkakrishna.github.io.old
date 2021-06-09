//scroll event handler for nav-items
$('body').scrollspy({
    target: '#navbarSupportedContent',
    offset: 50,
});

$('#about-nav').addClass("active");

/*Click event handler for nav-items
$('.nav-item').on('click',function(){
    //Remove any previous active classes
    $('.nav-item').removeClass('active');
    //Add active class to the clicked item
    $(this).addClass('active');
});*/

//event handler for bio shorter or longer
function bioChanger() {
    if ( document.getElementById("length-shortest").checked){
        document.getElementById("bio-extended-text").innerHTML = ".";
    }
    else if (document.getElementById("length-shorter").checked){
        document.getElementById("bio-extended-text").innerHTML = ", and i try to create things in artistic ways."
    }
    else if (document.getElementById("length-short").checked){
        document.getElementById("bio-extended-text").innerHTML = ", I believe that art can change the world. So i try to create things in artistic ways."
    }
    else if (document.getElementById("length-long").checked){
        document.getElementById("bio-extended-text").innerHTML = ", I believe that art can change the world. So i try to create things in artistic ways. I spend most of my time in learning new technologies and reading about it."
    }
    else if (document.getElementById("length-longer").checked){
        document.getElementById("bio-extended-text").innerHTML = ", I believe that art can change the world. So i try to create things in artistic ways. I spend most of my time in learning new technologies and reading about it. I believe in lifting each other and share what we learn."
    }
    else if (document.getElementById("length-longest").checked){
        document.getElementById("bio-extended-text").innerHTML = ", I believe that art can change the world. So i try to create things in artistic ways.I spend most of my time in learning new technologies and reading about it. I give my best in developing effective and effecient softwares and solutions. I believe in lifting each other and share what we learn."
    }
    else
    {
        document.getElementById("bio-extended-text").innerHTML = ", I believe that art can change the world. So i try to create things in artistic ways. I spend most of my time in learning new technologies and reading about it.";
    }
}