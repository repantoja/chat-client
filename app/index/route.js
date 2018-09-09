import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import Ember from 'ember';

export default Route.extend({
    roomService: service('chat-service'),

    /*model(params){
        let rooms = this.roomService.getAll();  
        console.log("index route:",params);                  
        return rooms;
    }*/
    model(){
        return {
            allRooms: this.get('roomService').getAll(),
            activeRoom: null
          };
    },
    afterModel(model){
        console.log("afterModel model:",model);
    }
    

});
