import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Barang} from "../model/barang";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-barangchild',
  templateUrl: './barangchild.component.html',
  styleUrls: ['./barangchild.component.css']
})
export class BarangchildComponent implements OnInit {

  @Output() toParent = new EventEmitter<Barang>()
  @Input() pesan!: Barang;
  list!:Barang[]

  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
  }
  edit(idx: number): void{
    this.toParent.emit(this.list[idx])
  }

  ngOnChanges(changes: SimpleChanges) {
    if(this.list){
      this.list.push(this.pesan)
    }else{
      if(this.pesan){
        this.list = [this.pesan]
      }
    }
  }

}
