// envoke function
$(function(){
  // var _window = $(window)
  // var _document = $(document)

  // define variables
  var data, jsonString;

  var lessons = $('ol.js-sortable').sortable({
    group: 'lessons',
    containerPath: '> div.collapse',
    isValidTarget: function ($item, container) {
      // check section moves
      if ( $item.is('.spoiler_box') ){
        // if section is moved into global list
        if ( container.el.is('.js-sortable') ){
          return true
        } else {
          return false
        }
      // check item moves
      } else{
        return true
      }
      // else if ( $item.is('.sp_line') ) {
      //   if ( container.el.is('.sp_content') ){
      //     return true
      //   } else {
      //     return false
      //   }
      // // dissallow everything else
      // } else {
      //   return false
      // }
    },
    onDrag: function ($item, position, _super, event) {
      // draggin itself
      $item.css(position)
    },
    onDragStart: function ($item, container, _super, event) {
      // var myList = [];
      // var movableElIndex;
      // container.el.find('> li').each(function(i, val){
      //   // find element
      //   myList.push( $(val) );
      //   if ( $(val).data('id') === $item.data('id') ){
      //     movableElIndex = $item.data('id')
      //   }
      // });
      // console.log($item.data('id'));
      //
      // console.log(myList, movableElIndex);

      // copy element
      // var createdEl = $item.addClass('moving').wrap('<span/>').parent().html();
      // container.el.append( createdEl ); // сменить
      // console.log(myList[movableElIndex - 1]);
      // $(createdEl).insertBefore( myList[movableElIndex - 1] );

      // $item.removeClass('moving'); // delete class as this element is absoluted

      // super execution
      $item.css({
        height: $item.outerHeight(),
        width: $item.outerWidth()
      })
      $item.addClass(container.group.options.draggedClass)
      $("body").addClass(container.group.options.bodyClass)
    },
    onDrop: function ($item, container, _super) {
      // erase copied element
      $('.moving').remove();

      // Get the data tree
      data = lessons.sortable("serialize").get();
      jsonString = JSON.stringify(data, null, ' ');
      // data returns array and jsonString is more ajax friednly
      // console.log(data);
      // console.log(jsonString);

      // call ajax calling function
      // updateList();

      _super($item, container);
    },
    tolerance: 6,
    distance: 10
  });

  // ajax
  function updateList(){
    $.ajax({
      method: "POST",
      url: "/api/hello.php",
      data: jsonString
    })
    .done(function( data ) {
      console.log(data);
    });

  };

});
