var main = function(){
    //window.alert("Hello World");
    "use strict";
    var addCommentFromInputBox = function(){
        var $new_comment;
        $new_comment = $("<p>").text($(".comment-input input").val());
        $new_comment.hide();
        $(".comments").append($new_comment);
        $new_comment.fadeIn();
        $(".comment-input input").val("");
    };
    $(".comment-input button").on("click", function (event){
        addCommentFromInputBox();
    });
};
$(document).ready(main);