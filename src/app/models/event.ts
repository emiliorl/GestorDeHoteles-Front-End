export class Event{

    constructor(
        public _id: string,
        public nameEvent: string,
        public typeEvent: string,
        public description: string,
        public date: Date,
    ){}
}