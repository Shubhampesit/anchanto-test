import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateSharedService {

  language$: BehaviorSubject<string> = new BehaviorSubject<string>('english')
  constructor() {}

  emitLanguage(language) {
    this.language$.next(language);
  }
}
