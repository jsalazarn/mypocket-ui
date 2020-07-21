import { TipoMovimiento } from './tipo-movimiento.model';
import { Cuenta } from './cuenta.model';

export class Movimiento {

    constructor(
        public id: number,
    	public titulo: string,
    	public descripcion: string,
    	public monto: number,
        public createAt: Date,
        public tipoMovimiento: TipoMovimiento,
        public cuenta: Cuenta,
    ){}

}