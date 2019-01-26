import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      name: "Angular 6",
      price: "Rs. 5000",
      description: "Angular 6+ course with advanced MEAN stack development"
    },{
      name: "Node",
      price: "Rs. 15000",
      description: "Node JS course with advanced MEAN stack development"
    },{
      name: "Laravel 5+",
      price: "Rs. 8000",
      description: "Laravel development concept with advance AWS deployment"
    }];
  }
});
