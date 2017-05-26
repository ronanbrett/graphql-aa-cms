import * as express from 'express';
import * as mongoose from 'mongoose';
import * as graphqlHTTP from 'express-graphql';

import { schema } from './models/base/base.resolve';

import env from './../environments/environment';

import { TextField, AutocompleteField } from './models/fields/field.model';

const environment = env();

class Server {
  public app: express.Application;

  public static boostrap() {
    return new Server();
  }

  constructor() {
    this.app = express();    

    this.config();

    this.routes();
  }



  /**
   * Configure Application
   * 
   * @class Server
   * @method config
   * @return void
   */  
  private config() {
    // connect to mongo
    mongoose.connect(environment.mongodb.address);
        
  
    // start server
    this.app.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });

    TextField.create({ key: 'hello' }).then((next) => {
      AutocompleteField.create({ key: 'subKey', childFields: [next._id] });
    })  ;
  }

  /**
   * Configure Application Routes
   *
   * @class Server
   * @method routes
   * @return void
   */  
  routes() {
    let router: express.Router;
    router = express.Router();

    router.use('/graphql', graphqlHTTP({
      schema: schema,
      graphiql: true,
    }))


    this.app.use(router);
  }

}

var server = Server.boostrap();
export default server.app;