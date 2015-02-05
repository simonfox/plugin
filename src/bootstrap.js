import {AppRouter} from 'aurelia-router';
import {Boom} from './boom';

export class Bootstrap {
  constructor() {
    
    var container = document.body.aurelia.container;
    //container.registerTransient(Boom, Boom);
	
	var router = container.get(Router);
	router.addRoute({ route: 'boom', moduleId: 'boom', title:'Boom!!!'});
	
	router.navigate("boom");
	//router.navigate("welcome");
  }
}