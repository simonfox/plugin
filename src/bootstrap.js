import {Router} from 'aurelia-router';

export class Bootstrap {
  //static inject() { return [Router]; }
  constructor() {
    
	var router = document.body.aurelia.container.get(Router);
	router.addRoute({ route: 'boom', moduleId: 'boom', title:'Boom!!!'});
	router.navigate("boom");
  }
}