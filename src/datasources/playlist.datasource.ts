import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Playlist',
  connector: 'mongodb',
  url: 'mongodb+srv://dev:control3*@cluster0.2zaco.mongodb.net/prueba2',
  host: 'cluster0',
  port: 27017,
  user: 'dev',
  password: 'control3*',
  database: 'prueba2',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PlaylistDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Playlist';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Playlist', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
