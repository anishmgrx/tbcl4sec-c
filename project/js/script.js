/* =========================================
               Magnifier JQuery
============================================ */
$(function () {

    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});
/* =========================================
              Mobile Menu JQuery
============================================ */
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});
/* ==============================================
              Contact Validation Menu Javascript
================================================= */

function validate() {
    if (document.myForm.Name.value == "") {
        document.myForm.Name.focus();
        alert("Please fill Name");
        return false;
    }
    if (document.myForm.Email.value == "") {
        document.myForm.Email.focus();
        alert("Please fill Email");
        return false;
    }
    if (document.myForm.Email.value != "") {
        var emailID = document.myForm.Email.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        if (atpos < 1 || (dotpos - atpos < 2)) {
            alert("Please enter a valid email address");
            document.myForm.email.focus();
            return false;
        }

        if (document.myForm.mobile.value == "" || document.myForm.value.length != 10) {
            alert("Enter Valid Mob.No");
            document.myForm.mobile.focus();
            return false;
        }
    }
    return true;
}
