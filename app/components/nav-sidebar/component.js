import Component from '@ember/component';

export default Component.extend({
 
   didReceiveAttrs(){
     let modelLength = this.get('model');
     let isRoomEmpty = Ember.isEmpty(modelLength);    
     return isRoomEmpty;
   } 
   
});
