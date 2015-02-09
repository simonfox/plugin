
export class Bootstrap {

  constructor() {
    
    var container = document.body.aurelia.container;
	var router = container.get(Router);

	router.addRoute({ route: 'boom', moduleId: 'boom', title:'Boom!!!'});
	router.navigate("boom");
  }
}