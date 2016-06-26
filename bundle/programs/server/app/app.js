var require = meteorInstall({"lib":{"routers.js":function(){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// lib/routers.js                                                           //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
Router.configure({                                                          // 1
    fastRender: true,                                                       // 2
    loadingTemplate: 'loading'                                              // 3
});                                                                         // 1
                                                                            //
Router.route('/', {                                                         // 6
    name: 'home',                                                           // 7
    action: function action() {                                             // 8
        this.render('home');                                                // 9
    }                                                                       // 10
});                                                                         // 6
//////////////////////////////////////////////////////////////////////////////

}},"server":{"startup.js":["meteor/meteor",function(require,exports,module){

//////////////////////////////////////////////////////////////////////////////
//                                                                          //
// server/startup.js                                                        //
//                                                                          //
//////////////////////////////////////////////////////////////////////////////
                                                                            //
var Meteor;module.import('meteor/meteor',{"Meteor":function(v){Meteor=v}});
                                                                            //
Meteor.startup(function () {});                                             // 3
//////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json"]});
require("./lib/routers.js");
require("./server/startup.js");
//# sourceMappingURL=app.js.map
