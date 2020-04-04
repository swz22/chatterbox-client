//This is the View in MVC

var MessageView = {

  // render: _.template(`
  //     <div class="chat">
  //       <div class="username">${this.username}</div>
  //       <div>${this.text}</div>
  //     </div>
  //   `)

    render: _.template(`
      <div class="chat">
        <div class="username"></div>
        <div></div>
      </div>
    `)
};

//TEST
// render: _.template(`
// <div class="chat">
//   <div class="username"> <% message.username %> </div>
//   <div> <%= objectId %> </div>
// </div>
// `)

// };



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