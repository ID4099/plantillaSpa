import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  addressForm = this.fb.group({
    empresa: null,
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    ciudad: [null, Validators.required],
    estado: [null, Validators.required],
    codigoPostal: [null, Validators.compose([
      Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    ],
    shipping: ['free', Validators.required]
  });

  hasUnitNumber = false;

  estados = [
    {name: 'Anzoátegui', abbreviation: 'An'},
    {name: 'Bolivar', abbreviation: 'Bo'},
    {name: 'Amazonas', abbreviation: 'Amz'},
    {name: 'Guárico', abbreviation: 'Gua'},
    {name: 'Mérida', abbreviation: 'Me'},
    {name: 'Trujíllo', abbreviation: 'Tru'},
    {name: 'Falcón', abbreviation: 'Flc'},
    {name: 'Zulia', abbreviation: 'Zl'},
    {name: 'Táchira', abbreviation: 'Tch'},
    {name: 'Nueva Esparta', abbreviation: 'Ne'},
    {name: 'Apure', abbreviation: 'Ap'},
    {name: 'Delta Amacuro', abbreviation: 'DA'},
    {name: 'Carabobo', abbreviation: 'Crbb'},
    {name: 'Dtto Capital', abbreviation: 'Ccs'},
    {name: 'Miranda', abbreviation: 'Mi'}
  ];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    Swal.fire({
      title: 'Mensaje',
      text: "Acción realizada correctamente.",
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Continuar'
  }).
  then((result) => {
      if (result.value) {
      }
      else{                   
      }
  })
  }

}
