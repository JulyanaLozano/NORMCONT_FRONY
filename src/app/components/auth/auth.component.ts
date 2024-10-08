import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html'
})
export class AuthComponent {

  user: User;

  constructor(private sharingData: SharingDataService) {
    this.user = new User();
  }

  onSubmit() {
    if (!this.user.codUsuario || !this.user.password) {
      Swal.fire(
        'Error de validacion',
        'CodUsuario y password requeridos!',
        'error'
      );
    } else {
      this.sharingData.handlerLoginEventEmitter.emit({ codUsuario: this.user.codUsuario, password: this.user.password });
    }
  }
}
