import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-de-usuarios',
  templateUrl: 'lista-de-usuarios.component.html',
})
export class ListaDeUsuariosComponent implements OnInit {

  cliente:any;
  cargando:boolean = true;

  constructor(private clientService:APIService) {  }
  ngOnInit(): void {

    let startFrom = new Date().getTime();      
    this.clientService.consultarClientes().subscribe(resp => { 
      this.cliente = resp.body;
      this.cargando = false;
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
    });
  }

  
}