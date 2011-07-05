/**
  *
  * Boilerplate code, used internally by the platform
  * 
  * Notice the **config** variable being passed into the self-executing anonymous function.
  * 
  * **config.api** object is an instance of the IJAppApi.v1 class.
  * Any public methods present in the [IJAppApi.v1](../api/v1.html) can be called on config.api object
  *
*/
(function(config) {
  
  /**
    * Hello World App
    *
    * @class HelloWorld
    * 
  */
  var HelloWorld = {  // Start

    /**
      * @name init()
      *
      * This method is called when the App is initiated
      * 
    */
    init : function() {
      config.api.log("Hello, World!");
    },


    /**
      * @name options()
      *
      * This method is called when the App is clicked inside the App Panel
      * 
    */
    options : function() {
      config.api.log("Options!");
    },
    
    
    /**
      * @name contextAction()
      *
      * This method is called when the user selects your App from the context action menu
      * 
    */    
    contextAction : function() {
      config.api.log("Context action invoked");
    }

  }; // HelloWorld End



  /**
    * The App Api provides a user with various points of interaction with the App. Each interaction is handled by the app as an event.
    * To ease the development, the API provides config.api.callback method in which you can bind callbacks to each of the available interaction points.
    *
    * The interaction points are...
    * 
    * **App initialization** (required) - An app is initialized based on the information that is provided in the manifest. An app can
    * chose to be invoked on all pages or on specific domains/paths
    * 
    * **App's options** (optional) - Invoked when a user clicks on the app from the Apps Panel.
    * 
    * **App's context action** (optional) - Invoked when a user clicks on your app's icon in the context action menu.
    * 
    * 
  */    
  config.api.callbacks({
    init : HelloWorld.init,
    options : HelloWorld.options,
    contextAction : HelloWorlf.contextAction
  });


/**
  *
  * Boilerplate code, used internally by the platform
  *
*/
})({
  api : new IJAppApi.v1({appId : "__APP_ID__"})
});

