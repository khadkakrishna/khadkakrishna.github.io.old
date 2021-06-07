var array_name1=["I can do some " , "I can ", "I can take ", "I love ", "I can ", "Yes, I am a "]
var array_name2=["amazing things" , "paint and draw", "good pictures", "adventures and travelling", "also cook", "Software Engineer..."]
var i=-1;

function taglineChange() {
    document.getElementById("tagline1").innerHTML = nextItem1();
    document.getElementById("tagline2").innerHTML = nextItem2();
}

function nextItem1() {
    i = i + 1;
    if(i>=array_name1.length)
    {
        $('button').prop('disabled', true);
        i=5;
    }   
    return array_name1[i];
}        
function nextItem2() {
    return array_name2[i];
}

//Click event handler for nav-items
$('.nav-item').on('click',function(){

    //Remove any previous active classes
    $('.nav-item').removeClass('active');
  
    //Add active class to the clicked item
    $(this).addClass('active');
});