import { Component, Input } from '@angular/core';
import { Veicolo } from '../Veicolo.model';
@Component({
  selector: 'app-macchine',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class MacchineComponent {
  @Input() macchina:Veicolo;
  
  ngOnInit() {}

}
