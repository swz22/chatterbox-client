var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      let messageList = data.results;
      for (var i = 0; i < messageList.length; i++) {
        let currentMessage = messageList[i];
        ( currentMessage.username ? currentMessage.username : currentMessage.username = "anonymous" );
        ( currentMessage.roomname ? currentMessage.roomname : currentMessage.roomname = "lobby" );
        ( currentMessage.text ? currentMessage.text : currentMessage.text = "Empty Message" );
        ( currentMessage.text.includes( "<" || "&" || ">" || "$" || "%" ) ? currentMessage.text = JSON.stringify(currentMessage.text) : currentMessage.text );


        MessagesView.renderMessage(currentMessage);
      }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};


