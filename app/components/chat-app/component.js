import Component from '@ember/component';
import {  inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { getOwner } from '@ember/application';
export default Component.extend({

  createRoom: computed(()=>{
      return getOwner(this).lookup('service:chat-service');
  }),

  actions: {
    
    add() {
        let room = this.get('room')
        //this.createRoom.add()
        console.log(this.get('room'))
      }
  }
});
