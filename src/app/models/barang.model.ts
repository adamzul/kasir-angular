export class Barang{
	_id:string;
	nama:string;
	deskripsi:string;
	jumlah:number;

	constructor(){
		this.nama = "";
		this.deskripsi = "";
		this.jumlah = 0;
	}
}

export default Barang;