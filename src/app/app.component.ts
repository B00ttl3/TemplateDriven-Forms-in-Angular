import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This loaded dynamically'
  

  formSubmit( event: any ) {
    console.log('formSubmitted');
    console.log(event.value);
  }

  getValue(fullName:any) {
    console.log(fullName);
  }
  
}
