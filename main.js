$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();

        const addTask = $('#task').val();
        const novaTask = $(`<li style="display:block;">${addTask}</li>`);
        novaTask.on('click', function() {
           $('#task').val('');
           $(this).toggleClass('riscado');

        });

        novaTask.appendTo('ul');    
        $('#task').val('');

    })

})