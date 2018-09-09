import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {  
  /*this.route('index', {path:'/'}, function() {
    this.route('conversation',{path:'conversation'}, function(){
      this.route('room',{path: "/room/:id"});
    });
  });  */
  this.route('room',{path: "/room/:id"});
});

export default Router;
