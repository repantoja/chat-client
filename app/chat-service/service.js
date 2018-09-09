import Service from '@ember/service';

export default Service.extend({
    items: null,

    init() {
        this._super(...arguments);
        this.set('items', {
            roomNames: [
                {name:'test1',id:1},
                {name:'test2',id:2},
                {name:'test3',id:3}
            ],
            roomMessages:[
                {id:1,messages:['this is a test message 1','test message 2']},
                {id:2,messages:[]},
                {id:3,messages:[]}
            ],
            activeRoom: {},
            isRoomEmpty : function(){
                return this.activeRoom == null;
            }
        });
    },

    add(item) {
        this.get('items').pushObject(item);
    },

    remove(item) {
        this.get('items').removeObject(item);
    },

    removeAll() {
        this.get('items').setObjects([]);
    },

    getAll(){
        return this.get('items');
    },

    getMessagesById(roomId){
        return this.get('items').roomMessages.findBy("id",parseInt(roomId));
    },
    getRoomById(roomId){
        let messages = this.get('items').roomMessages.findBy("id",parseInt(roomId));
        let room = this.get('items').roomNames.findBy("id",parseInt(roomId));
        return {
            room:room,
            messages:messages.messages
        };
    }
});
