document.addEventListener('DOMContentLoaded', function() {
    console.log(M);
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, "hover");
    // var instance = M.Dropdown.getInstance(elem);


});


M.AutoInit();
