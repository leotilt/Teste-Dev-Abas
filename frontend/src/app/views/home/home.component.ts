import { Component, OnInit } from '@angular/core';
import { BankListService } from 'src/components/template/service/bankList/bank-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  bancos: any

  constructor(private bankListService: BankListService) {}

  ngOnInit(): void {
    this.ListarBancos();
  }
  ListarBancos() {
    this.bankListService.listBank().subscribe(
      (bancos) => {
        this.bancos= bancos
      },
      (err) => {
        console.log('erro ao listar os bancos', err);
      }
    );
  }
}
