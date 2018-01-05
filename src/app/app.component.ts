import { Component } from '@angular/core';
import * as socket from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private socket: SocketIOClient.Socket;

  constructor() {
	  //Comment this out and the service worker gets registered fine
	  this.socket = socket('//localhost:8081', {
	  	path: '/ws'
	  });
  }
}
