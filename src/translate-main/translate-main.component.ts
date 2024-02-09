import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { TranslateSharedService } from '../translate-shared.service';

@Component({
  selector: 'app-translate-main',
  templateUrl: './translate-main.component.html',
  styleUrls: ['./translate-main.component.css'],
  // standalone: true,
  // imports: [HttpClientModule, TranslateModule],
})
export class TranslateMainComponent implements OnInit, OnDestroy {
  languageSubsctiption: Subscription;

  language: string = '';

  constructor(
    private translateSharedService: TranslateSharedService,
    private translateService: TranslateService,
    private httpClient: HttpClient
  ) {
    this.translateService.setDefaultLang('english');
  }

  ngOnInit() {
    this.languageSubsctiption = this.translateSharedService.language$.subscribe(
      (res) => {
        this.language = res;
        console.log(res)
      }
    );
  }

  ngOnDestroy() {
    if (this.languageSubsctiption) {
      this.languageSubsctiption.unsubscribe();
    }
  }
}
