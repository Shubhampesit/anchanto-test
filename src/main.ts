import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MainModule } from './main/main.module'

platformBrowserDynamic()
  .bootstrapModule(MainModule)
  .catch((err) => console.error(err));

// bootstrapApplication(TranslateWrapperComponent,{
//   providers: [
//         importProvidersFrom(HttpClientModule),
//         importProvidersFrom(TranslateModule.forRoot({
//           defaultLanguage: 'en',
//             loader: {
//                 provide: TranslateLoader,
//                 useFactory: HttpLoaderFactory,
//                 deps: [HttpClient]
//            }
//         }),
//     ]
// });
