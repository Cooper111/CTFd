$(".form-control").bind({
    focus: function() {
        $(this).addClass('input-filled-valid' );
    },
    blur: function() {
        if ($(this).val() === '') {
            $(this).removeClass('input-filled-valid' );
        }
    }
});

$(function () {
    $('.form-control').each(function () {
        if ($(this).val()) {
            $(this).addClass("input-filled-valid");
        }
    });

    $('[data-toggle="tooltip"]').tooltip()
})