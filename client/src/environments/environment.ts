// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseUrl : 'https://myems.powerschool-ems.com/api',
  CHAT_URL : 'ws://echo.websocket.org/'
  //baseUrl: 'http://localhost:21834/api',
 //baseUrl : 'https://3.89.205.23:8080/api',
  //baseUrl : 'https://myemstest.herokuapp.com/api'
};
