$(document).ready(function() {
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancel').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();
        const endereconovaimg = $('#endereco-img-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endereconovaimg}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-imagem-Link">
                <a href="${endereconovaimg}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('endereco-img-nova').val('')
    })
})