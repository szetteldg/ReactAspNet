# Using a React based web-component in ASP.NET

This example app shows how a React based web-component, which is executed in the browser, can be integrated into a statically rendered ASP.NET page. 

The app shows a 'city picker', which is dependent on the selected continent and country. The geo information is statically defined, but could also be loaded from the backend. 
All the assets (React, geo information, app) is bundled into a single js file. 

## React frontend

The React UI component is exposed as web-component which contains properties (title, canAddCity) and events (cityChanged). 
```html
 <city-picker title="Pick a city" city-changed="rememberCityName" can-add-city="true" /
```


Start the standalone react app with
```
yarn dev
```
                      
Building it copies the React output files to the asp.net root folder ~/wwwroot/webcomponents folder. From there, it is consumed by the asp.net cases view. 
```
yarn build
```

## ASP.NET backend
Load the ```ErpApp.slnx``` and start it. The Cases controller shows how the city-picker web-component can be used. The selected state (city) is kept in a hidden filed until is posted pack as part of a full page reload. 

