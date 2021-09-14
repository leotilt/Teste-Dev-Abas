import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';
import { MatSort } from '@angular/material/sort';
import { Bancos } from 'src/components/models/bancos';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit{
  //Table
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  displayedColumns: string[] = ['code', 'name'];
  
  dataSource =  new MatTableDataSource()
  ListasBancos: Bancos[] = [];

  constructor(private bankListService: BankListService) {}

  ngOnInit(): void {
    this.getListBanks();
    // this.dataSource =  new MatTableDataSource(this.ListasBancos);
  }
  getListBanks() {
    this.bankListService.getBanks().subscribe(
      (bancos) => {
        this.ListasBancos = bancos;
      },
      (err) => {
        console.log('erro ao listar os bancos', err);
      }
    );
  }
}
