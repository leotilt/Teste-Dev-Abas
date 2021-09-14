import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Form } from 'src/components/models/form';

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
  itemDelete: any;

  constructor(private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.readLocalStorage();
  }

  clearLocalStorage() {
    if (confirm('Tem certeza que deseja deletar todas as contas?')) {
      localStorage.clear();
      window.location.reload();
      this.snackBar.open('Todas as contas deletadas com sucesso', 'X', {
        duration: 2000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
      });
    }
  }

  readLocalStorage() {
    this.data = JSON.parse(localStorage.getItem('form-data') as string);
  }
}
