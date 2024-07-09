$(document).ready(function(){

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botaoCancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const urlNovaImagem = $('#urlNovaImagem').val();
        const novoitem = $('<li style="display: none"></li>');
        $(`<img src="${urlNovaImagem}" />`).appendTo(novoitem);
        $(`
            <div class="linkImagem">
                <a href="${urlNovaImagem}" title="Veja em tamanho real" target="_blank">
                    Veja em tamanho real
                </a>
            </div>
        `).appendTo(novoitem);
        $(novoitem).appendTo('ul');
        $(novoitem).fadeIn(1000);
        $('#urlNovaImagem').val('');
    })

})