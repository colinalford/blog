var main = function(){
  "use strict";

  //
  var addCommentFromInputBox = function () {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;
      var yy = today.getFullYear();

      var title = $('#title').val();
      var content = $('#blog').val();

      if (title !== '' && content !=='') {
          var newTitle = $('<h2>').text(title);
          var newBlog = $('<div>').addClass('blog-main-entry').text(content);
          var date = $('<div>').addClass('blog-date').text(mm+'/'+dd+'/'+yy);
          var newContainer = $('<div>').addClass('blog-container');
          $('#displayArea').prepend(newContainer);

          $('.blog-container:first').append(newTitle);
          $('.blog-container:first').append(newBlog);
          $('.blog-container:first').append(date);
          $('.blog-container:first').append
          $('#title').val('');
          $('#blog').val('');

          $('#form-container').toggle();
      } else {
          alert('You must input a comment before submit');
        }
    };

    $('#cancelButton').on('click', function(e){
        e.preventDefault();
        $('#form-container').toggle();
    });

    $('#new-blog-entry').on('click', function(e){
        e.preventDefault();
        $('#form-container').toggle();
    });

    $('#formButton').on('click', function(e){
        e.preventDefault();
        addCommentFromInputBox();
    });

    $('#blog').on('keypress', function(e) {
        if(e.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
