import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Bancos } from 'src/components/models/bancos';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';
import { UtilService } from 'src/components/template/service/utils/util.service';
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
    private utils: UtilService
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
    this.saveOnLocalStorage();
    this.utils.showMessage('Conta cadastrada com sucesso!!!');
    this.formGroup.reset();
  }

  saveOnLocalStorage() {
    const formParse =
      JSON.parse(localStorage.getItem('form-data') as string) || [];
    formParse.push(this.formGroup.value);
    localStorage.setItem('form-data', JSON.stringify(formParse));
  }

  getListBanks() {
    this.bankListService.getBanks().subscribe(
      (bancos) => {
        this.bancos = bancos;
      },
      (err) => {
        this.utils.errorMessage('Erro ao Listar bancos' + err);
      }
    );
  }
}
