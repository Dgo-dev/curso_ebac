$(document).ready(function(){

    $('body button').click(function(){

    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const addTask = $('#task').val();
        const novaTask = $(`<li style="display:block;">${addTask}</li>`).appendTo('ul').click();
        console.log($('li').addClass('add-lista'));
        $('#task').val('');
        
        $('ul').on('click', 'li', function(e){
            $(novaTask).addClass('riscado')
        });

       
    })

})
