//This is the View in MVC

var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"> <%= username %> </div>
        <div> <%= text %> </div>
        <div> <%= createdAt %> </div>
      </div>
    `)

};






// var MessageView = {

//   render: _.template(`
//       <!--
//       <div class="chat">
//         <div class="username"></div>
//         <div></div>
//       </div>
//       -->
//     `)

// };