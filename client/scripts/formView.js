var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();// prevents default functionality of button - refreshing room

      Messages.username = App.username;
      Messages.text = document.getElementById('message').value;
      Messages.createdAt = Date.now();
      Messages.updatedAt = Date.now();

      Parse.create(Messages);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};