//   $(window).scroll(function(event){

  //   var yOffset = window.pageYOffset;
  //   var breakpoint = 50;
  //   if (yOffset > breakpoint){
  //     $("nav").addClass('active');
  //   }else{
  //     $("nav").removeClass('active');
  //   }

  // });

    // Change style of navbar on scroll
    // window.onscroll = function() {myFunction()};
    // function myFunction() {
    //     var navbar = document.getElementById("myNavbar");
    //     if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    //         navbar.className = "bar" + " card" + " animate-top" + " white";
    //     } else {
    //         navbar.className = navbar.className.replace(" card animate-top white", "");
    //     }
    // }


    // 原
    // function toggleFunction() {
    //     var x = document.getElementById("navDemo");
    //     if (x.className.indexOf("show") == -1) {
    //         x.className += " show";
    //     } else {
    //         x.className = x.className.replace(" show", "");
    //     }
    // }

function toggleFunction() {
    var x = document.getElementById("navDemo");
    x.classList.toggle('show');
    x.classList.toggle('hide');
}

    // ham
    // function myFunction(x) {
    //     x.classList.toggle("change");
    // }

//page fade

document.body.className += ' fade-out';

  $(function() {
      $('body').removeClass('fade-out');
});


