export class Reservation{

    constructor(
        public _id: string,
        public checkIn: Date,
        public checOut: Date,
        public user: [],
        public room: [],
        public serviceBefore: []
    ){}  
}
