import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Bancos } from 'src/components/models/bancos';
import { Form } from 'src/components/models/form';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  formGroup!: FormGroup;

  bancos!: Bancos[];
  form: any = [];

  constructor(
    private bankListService: BankListService,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.getListBanks();
    this.getForm();
  }

  getForm() {
    this.formGroup = new FormGroup({
      banco: new FormControl(),
      agencia: new FormControl(),
      conta: new FormControl(),
    });
  }

  onSave() {
    const formParse =
      JSON.parse(localStorage.getItem('form-data') as string) || [];
    formParse.push(this.formGroup.value);
    localStorage.setItem('form-data', JSON.stringify(formParse));

    this.snackBar.open('Conta cadastrada com sucesso ', 'X', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
    });
    this.formGroup.reset();
  }

  getListBanks() {
    this.bankListService.getBanks().subscribe(
      (bancos) => {
        this.bancos = bancos;
      },
      (err) => {
        console.log('erro ao listar os bancos', err);
      }
    );
  }
}
