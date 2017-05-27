// envoke function
$(function(){
  // var _window = $(window)
  // var _document = $(document)

  // define variables
  var data, jsonString;

  var lessons = $('ol.js-sortable').sortable({
    group: 'lessons',
    containerPath: '> div.collapse',
    onDrop: function ($item, container, _super) {
      data = lessons.sortable("serialize").get();
      jsonString = JSON.stringify(data, null, ' ');
      // data returns array and jsonString is more ajax friednly
      // console.log(data);
      console.log(jsonString);

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
