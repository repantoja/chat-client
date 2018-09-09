import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';



export default Route.extend({
  roomService: service('chat-service'),
    myActiveRoom: null,
    // model(params){
    //     console.log("room route:",params);
    //     let allRooms = this.get('roomService').getAll();
    //     this.set("myActiveRoom", this.get('roomService').getRoomById(params.id));
        
    //     console.log("active room:",this.get("myActiveRoom"));
    //     return allRooms;
    // },
    model(params){
        return {
            allRooms: this.get('roomService').getAll(),
            activeRoom: this.get('roomService').getRoomById(params.id)
          };
    },
    setupController(controller, model) {
        this._super(...arguments);
        set(controller, 'allRooms', model.allRooms);
        set(controller, 'activeRoom', model.activeRoom);
      },
    afterModel:function(model){
        console.log("aftermodel model:",model);
    }
});
