var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  renderRoom: function(roomName) {
    //UNSURE OF CODE BELOW - WORK IN PROGRESS
    let inputMessage = MessageView.render(message);
    RoomsView.$select.prepend(inputMessage)
    RoomsView.$button.prepend(inputMessage)
    this.$select.prepend(  );



  }

};


// _.filter by room name