export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.4.x/shorthands/
  */

  this.namespace = '/api';
  this.get('/course', function() {
    return {
      data: [{
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
      }]
    };
  });
}
