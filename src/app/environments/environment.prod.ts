export const environment = {
    production: true,
    azure:{
      issuer :"https://idsvr4.azurewebsites.net",
        redirectUri:"http://localhost:4200/",
        clientId:"AngularSchoolApp",
        scope:"openid profile email offline_access"
    
    }
  };