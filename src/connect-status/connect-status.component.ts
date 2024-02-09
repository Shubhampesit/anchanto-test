import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConnectivityService } from 'src/app/connectivity.service';

@Component({
  selector: 'app-connect-status',
  templateUrl: './connect-status.component.html',
  styleUrls: ['./connect-status.component.css']
})
export class ConnectStatusComponent implements OnInit {

  isConnected = true; // Default to true if the initial check is online

  connection: string = 'Internet Connectivity Status';

  constructor(private connectivityService: ConnectivityService, private translateService: TranslateService) {}

  ngOnInit(): void {
    this.connectivityService
      .getConnectivityStatus()
      .subscribe((isConnected) => {
        // if(isConnected) {
        //   this.connection = this.translateService.instant('INTERNET_CONNECTIVITY_STATUS_CONNECTED');
        // } else {
        //   this.connection = this.translateService.instant('INTERNET_CONNECTIVITY_STATUS_CONNECTED');

        // }
        this.isConnected = isConnected;
        console.log(
          'Internet connectivity status:',
          isConnected ? 'Connected' : 'Not Connected'
        );
      });
  }

}
