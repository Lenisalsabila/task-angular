import { Component, OnInit } from '@angular/core';
import {Barang} from "../model/barang";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-baranginduk',
  templateUrl: './baranginduk.component.html',
  styleUrls: ['./baranginduk.component.css']
})
export class BarangindukComponent implements OnInit {
  formAdd! : FormGroup;
  kirimData! : Barang;
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.formAdd = this.formBuild.group( {
      'sku' :[null],
      'qty' : [null],
      'harga' :[null],
      'amount' :[null],
      'total' :[null]
    });
  }
  simpan(): void{
    let data = <Barang>{};
    data.sku =this.formAdd.controls['sku'].value
    data.qty =this.formAdd.controls['qty'].value
    data.harga =this.formAdd.controls['harga'].value
    this.kirimData = data;
  }
  amount(): void{
    let jum =<Barang>{};
    jum.sku =this.formAdd.controls['sku'].value
    jum.qty =this.formAdd.controls['qty'].value
    jum.harga =this.formAdd.controls['harga'].value
    jum.total =this.formAdd.controls['total'].value
    this.kirimData = jum;
    jum.amount = jum.qty * jum.harga;

    console.log(jum.amount)

  }

  terimaPesa($event: any):void{
    this.formAdd.controls['sku'].setValue($event.sku)
    this.formAdd.controls['qty'].setValue($event.qty)
    this.formAdd.controls['harga'].setValue($event.harga)

  }

}
