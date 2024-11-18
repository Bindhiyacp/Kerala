import { Component, Input } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

// submit(form:NgForm) {
//   console.log(form.value);
//   console.log(form.value.password);
// }
submit() {
  console.warn(this.profileForm.value);
}

// @Input() credentials : from={
//   email: '',
//   password: ''
// }
profileForm = new FormGroup({
  firstName: new FormControl(''),
  lastName: new FormControl(''),
  email: new FormControl(''),
  address: new FormControl(''),
  phoneno: new FormControl(''),
  dob: new FormControl(''),
  pincode: new FormControl(''),
  city: new FormControl(''),
  state: new FormControl(''),
  password: new FormControl(''),
  repeatpassword: new FormControl('')
});

constructor(public api:ApiService){

}
// @Input()pincode:[]=[];
// ngOnInit(){
//   this.api.getdata().subscribe((res:any)=>{
//     this.pincode =res;
//     console.log(this.pincode);
//   });
// }

pinCheck()
{
  let pincode=this.profileForm.value.pincode
  if(pincode?.length==6)
  {
    this.api.getPincodeData(pincode).subscribe((dataa)=>{
      this.profileForm.get('state')?.setValue(dataa[0].stateName)
      this.profileForm.get('city')?.setValue(dataa[0].taluk)
      // this.loginForm.get('district')?.setValue(dataa[0])


      console.log(dataa[0])
  })
  }

}
}
