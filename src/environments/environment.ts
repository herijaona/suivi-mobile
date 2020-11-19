// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // url: "http://localhost:9000",
  // url_dev: "http://localhost:9000/apip/",
  // url_dev_api: "http://localhost:9000/api/",

  url: "http://suivie-patient.neitic.com",
  url_dev: "http://suivie-patient.neitic.com/apip/",
  url_dev_api: "http://suivie-patient.neitic.com/api/",

  // url: "https://matipla.com",
  // url_dev: "https://matipla.com/apip/",
  // url_dev_api: "https://matipla.com/api/",

  TOKEN_KEY: "access_token",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
