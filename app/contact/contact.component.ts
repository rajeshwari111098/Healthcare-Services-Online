import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faLocationDot, faMobilePhone} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  
  
})
export class ContactComponent {
  icon = faLocationDot;
  faphone = faMobilePhone;
  faemail = faEnvelope
  

}
