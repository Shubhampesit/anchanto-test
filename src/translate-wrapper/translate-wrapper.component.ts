
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateSharedService } from '../translate-shared.service';

@Component({
  selector: 'app-translate-wrapper',
  templateUrl: './translate-wrapper.component.html',
  styleUrls: ['./translate-wrapper.component.css'],
})
export class TranslateWrapperComponent implements OnInit {
  selectedLanguage: string = '';
  languages: string[] = ['english', 'spanish', 'arabic', 'hebrew'];
  showDropdown: boolean = false;

  constructor(
    private translateSharedService: TranslateSharedService,
    private translateService: TranslateService
  ) {}

  ngOnInit() {}

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  languageSelectionHandler(language: string): void {
    this.translateService.setDefaultLang(language);
    this.translateSharedService.emitLanguage(language);
    console.log('Selected language:', language);
  }

  selectLanguage(language: string): void {
    this.selectedLanguage = language;
    this.showDropdown = false;
  }
}
