"use strict";
$(document).ready(function() {


    /*------------ Start site menu  ------------*/

    // Start sticky header
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 150) {
            $('#sticky-header').addClass('sticky-menu');
        } else {
            $('#sticky-header').removeClass('sticky-menu');
        }
    });

    if ($("#metismenu").length) {
        $("#metismenu").metisMenu();
    }
    $('.scrollbar-macosx').scrollbar();

    $(".menu-toggler").on("click", function() {
        $('body').toggleClass('_toggle');
    });

    $(".menu-close").on("click", function() {
        $('body').removeClass('_toggle');
    });




    /* image upload */

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#image-preview').attr('src', e.target.result);
                $('#image-preview').hide();
                $('#image-preview').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#logo-upload").change(function() {
        readURL(this);
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                $('#image-preview2').attr('src', e.target.result);
                $('#image-preview2').hide();
                $('#image-preview2').fadeIn(650);
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#fevicon-upload").change(function() {
        readURL(this);
    });


    /*  password hide show  */


    $(".toggle-password").click(function() {
        $(this).toggleClass("fa-eye-slash fa-eye");
    });

    $(".eye").on('click', function() {
        var $showPwss = $(".password");
        if ($showPwss.attr('type') === 'password') {
            $showPwss.attr('type', 'text');
        } else {
            $showPwss.attr('type', 'password');
        }
    });

$(document).ready( function () {
    $('#table_id').DataTable();
} );


$(document).ready( function () {
    $('#all-purchase').DataTable();
} );








});