//This is the Controller in MVC


var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(message) {
    // given a message object
    // invoke messageView.render on that message
    // then append that rendered message to the DOM
    let inputMessage = MessageView.render(message);
    MessagesView.$chats.append(inputMessage);
  }
};


/*
We created a JSON source, and used jQuery’s $.getJSON() function to get it.
$.getJSON("/path/to/json.js", function(data) {

});





iterate over the data
pass the data thru the .render method that applies data into the templated format
use underscore $(`html section`).append(to DOM)

._map
._filter

*/



// var MessagesView = {

//   $chats: $('#chats'),

//   initialize: function() {
//   },

//   render: function() {
//   }

// };