import { Component, OnInit } from '@angular/core';
import { ClienteModel } from './cliente.model';
import { NgForm } from '@angular/forms';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: 'crear-usuario.component.html',
  styleUrls: [ 'crear-usuario.component.css',
  ]
})
export class CrearUsuarioComponent implements OnInit {

  cliente = new ClienteModel();

  constructor(private clienteService:APIService) {  }
  ngOnInit(): void {  }

  guardar(form:NgForm) {
    if(form.invalid) return console.log('Formulario inválido.');

    console.log('Request enviado.');
    let startFrom = new Date().getTime();      
    this.clienteService.crearCliente(this.cliente).subscribe(resp => { 
      // console.log(resp);
      console.log(`Tiempo de respuesta: ${new Date().getTime() - startFrom} milisegundos.`);
    });
  }
}


