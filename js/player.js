// Show Public Feed
$('#btnPublic').on('click', function(){
    $('#feedPublic').removeClass('d-none');
    $('#feedMedia').addClass('d-none');
    $('#btnPublic').removeClass('btn-outline-primary').addClass('btn-primary');
    $('#btnMedia').removeClass('btn-primary').addClass('btn-outline-primary');
});

// Show Media Feed
$('#btnMedia').on('click', function(){
    $('#feedPublic').addClass('d-none');
    $('#feedMedia').removeClass('d-none');
    $('#btnPublic').removeClass('btn-primary').addClass('btn-outline-primary');
    $('#btnMedia').removeClass('btn-outline-primary').addClass('btn-primary');
});

// Schedule Toggles
$('button.schedule').on('click', function(e){

    // Check if section is already open
    if ($(this).hasClass('btn-light')) {
        // Toggle current collapse
        $('#collapse' + $(this).attr('data-target')).toggleClass('show');
        $('button.schedule').removeClass('btn-light').addClass('btn-outline-light');
    } else {
        // Close current collapse, open new collapse
        $('button.schedule').removeClass('btn-light').addClass('btn-outline-light');
        $(this).removeClass('btn-outline-light').addClass('btn-light');
        $('.collapse').removeClass('show');
        $('#collapse' + $(this).attr('data-target')).addClass('show');
    }
});