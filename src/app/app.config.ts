import { ApplicationConfig, importProvidersFrom, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { DATA_REPO_IOC } from './data/data.ioc';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { provideApollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { setContext } from '@apollo/client/link/context';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    DATA_REPO_IOC,
    importProvidersFrom(HttpClientModule), provideHttpClient(), provideApollo(() => {
      const httpLink = inject(HttpLink);
      const http = httpLink.create({ uri: 'http://localhost:4201/graphql' });

      const auth = setContext(async (_, { headers }) => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMjM0NTY3ODkwIiwidGVuYW50aWQiOiIyNjUyMzY0NDQ3OCIsIm5hbWUiOiJNYXVyaWNpbyBCZWRveWEiLCJpYXQiOjE1MTYyMzkwMjJ9.FOQc4gwlpRmDNkE9A_p5mzwemN01bOjbTkK_FMPg7p8';

        return { headers: { Authorization: `Bearer ${token}` } };
      });

      return {
        link: auth.concat(http),
        cache: new InMemoryCache(),
      };
    })
  ]
};
