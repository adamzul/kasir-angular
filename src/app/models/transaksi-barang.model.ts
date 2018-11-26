import { Barang } from '../models/barang.model';
export class TransaksiBarang{
	_id: string;
	id_barang: any;
	jumlah: number;

	constructor(){
		// this.id_barang = "";
		this.jumlah = 0;
	}
}
export default TransaksiBarang;