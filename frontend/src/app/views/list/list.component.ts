import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';
import { MatSort } from '@angular/material/sort';
import { Bancos } from 'src/components/models/bancos';
import { UtilService } from 'src/components/template/service/utils/util.service';

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
  dataSource = new MatTableDataSource<Bancos>();

  constructor(
    private bankListService: BankListService,
    private utils: UtilService
  ) {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.updateDataSource();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  updateDataSource() {
    this.bankListService.getBanks().subscribe(
      (data) => {
        this.dataSource.data = data;
      },
      (err) => {
        this.utils.errorMessage('Erro ao Listar bancos' + err);
      }
    );
  }
}
