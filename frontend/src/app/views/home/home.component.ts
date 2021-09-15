import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Form } from 'src/components/models/form';
import { UtilService } from 'src/components/template/service/utils/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['banco', 'agencia', 'conta'];

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  data!: Form[];
  isConta?: boolean;
  constructor(private utils: UtilService) {}

  ngOnInit(): void {
    this.readLocalStorage();
    this.hidden();
  }

  hidden() {
    if (this.data == null) {
      this.isConta = true;
    } else if (this.data != null) {
      this.isConta = false;
    }
  }

  deleteAllValues() {
    this.clearLocalStorage();
  }

  clearLocalStorage() {
    if (confirm('Tem certeza que deseja deletar todas as contas?')) {
      localStorage.clear();
      this.utils.showMessage('Todas as contas foram deletadas com sucesso');
      window.location.reload();
    } else {
      this.utils.showMessage('Nenhum dado foi apagado');
    }
  }

  readLocalStorage() {
    this.data = JSON.parse(localStorage.getItem('form-data') as string);
  }
}
