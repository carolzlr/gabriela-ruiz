import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngAfterViewInit(): void {
    // força o Instagram a processar os embeds
    if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }
}
