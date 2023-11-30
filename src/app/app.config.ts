import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PesamentosService } from './componentes/pesamentos.service';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), PesamentosService, importProvidersFrom(HttpClientModule), provideHttpClient(withFetch())]
};
