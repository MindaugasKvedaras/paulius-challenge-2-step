// Step_2_set active_button //

$(document).on('click', '.buttonss button', function(e){
    e.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
});