import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit, AfterViewInit {
  //Table
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  displayedColumns: string[] = ['code', 'name'];
  //

  
  dataSource = new MatTableDataSource();
  ListasBancos?: any;

  constructor(private bankListService: BankListService) {}

  ngOnInit(): void {
    this.getListBanks();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
