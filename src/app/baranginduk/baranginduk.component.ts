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
    data.amount =this.formAdd.controls['amount'].value
    data.total =this.formAdd.controls['total'].value
    data.amount = data.qty * data.harga;
    this.kirimData = data;
  }


  terimaPesa($event: any):void{
    this.formAdd.controls['sku'].setValue($event.sku)
    this.formAdd.controls['qty'].setValue($event.qty)
    this.formAdd.controls['harga'].setValue($event.harga)
    this.formAdd.controls['amount'].setValue($event.amount)
    this.formAdd.controls['total'].setValue($event.total)
  }

}
