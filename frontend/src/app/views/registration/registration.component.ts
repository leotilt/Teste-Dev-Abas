import { Component, OnInit } from '@angular/core';
import { Bancos } from 'src/components/models/bancos';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  bancos!: Bancos[];
  
  constructor(private bankListService: BankListService) {}
  ngOnInit(): void {
    this.getListBanks();
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
