import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  protected readonly title = signal('angular-best-doc-web');

  onOpen(): void {
    alert("Message from the button");
  }
}
