export class Hotel{

    constructor(
        public _id: string,
        public nameHotel: string, 
        public address: string, 
        public phoneHotel: number,
        public description: string,

        // falta agregar la referencia al user 
        
    ){}
}