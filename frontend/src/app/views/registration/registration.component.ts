import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bancos } from 'src/components/models/bancos';
import { Form } from 'src/components/models/form';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  formGroup: any;

  bancos!: Bancos[];
  form!: Form[];

  constructor(private bankListService: BankListService) {}
  ngOnInit(): void {
    JSON.parse(localStorage.getItem('form-data') as string) || [];
    this.form = [];
    this.bancos = [];
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
    const formulario: Form = this.formGroup.value;
    this.form.push(formulario);
    localStorage.setItem('form-data', JSON.stringify(this.form));
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
