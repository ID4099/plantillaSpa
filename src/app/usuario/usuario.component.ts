import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarioForm = this.fb.group({
    usuario: [null, Validators.required],
    password: [null, Validators.required]
  })

  constructor(private fb: FormBuilder) {}


  ngOnInit() {
  }

  onSubmit(){
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
