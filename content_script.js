(function(config) {

  var HelloWorld = {

    init : function() {
      config.api.log("Hello, World!");
    },

    options : function() {
      config.api.log("Options!");
    }

  }; // HelloWorld


  // Attach callback to events
  config.api.callbacks({
    init : HelloWorld.init,       // called when your app is initialized
    options : HelloWorld.options  // called when your app icon is clicked inside the AppDock
  });


})({
  api : new IJAppApi.v1({appId : "__APP_ID__"})
});

