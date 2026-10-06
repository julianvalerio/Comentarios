var main = function(){
    //window.alert("Hello World");
    "use strict";
    var $input = $(".comment-input input")
    var $comments = $(".comments");

    var criarComentario = function(texto){
        var $comentario = $("<p>").addClass("comment");
        var $texto = $("<span>").text(texto);
        var $botaoExcluir = $("<button>")
            .addClass("delete-comment")
            .attr("type", "button")
            .text("Excluir");
        $comentario.append($texto, " ", $botaoExcluir);
        return $comentario;
    }

    var addCommentFromInputBox = function(){
        var texto = $input.val().trim(); //bloqueia espaços vazios
        if(texto === ""){
            $input.val("").focus();
            return;
        }
        var $novoComentario = criarComentario(texto);
        $novoComentario.hide();
        $comments.append($novoComentario);
        $novoComentario.fadeIn();
        $input.val("").focus();
    };
    $comments.on("click", ".delete-comment", function(){
        $(this).closest(".comment").fadeOut( function(){
            $(this).remove();
        });
    });

    $(".comment-input button").on("click", function (event){
        addCommentFromInputBox();
    });
    $(".comment-input input").on("keypress", function(event){
        if(event.keyCode === 13){
            addCommentFromInputBox();
        }
    });
    /*$(".comment-input input").on("keypress", function(event){
        console.log("Código da tecla "+ event.keyCode);
    });*/
};
$(document).ready(main);