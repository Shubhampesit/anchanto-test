import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateWrapperComponent } from '../translate-wrapper/translate-wrapper.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMainComponent } from '../translate-main/translate-main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectStatusComponent } from 'src/connect-status/connect-status.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [TranslateWrapperComponent, TranslateMainComponent, ConnectStatusComponent],
  bootstrap: [TranslateWrapperComponent],
  exports: [TranslateModule],
})
export class MainModule {}
