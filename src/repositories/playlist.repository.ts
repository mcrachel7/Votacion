import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PlaylistDataSource} from '../datasources';
import {Playlist, PlaylistRelations} from '../models';

export class PlaylistRepository extends DefaultCrudRepository<
  Playlist,
  typeof Playlist.prototype.id,
  PlaylistRelations
> {
  constructor(
    @inject('datasources.Playlist') dataSource: PlaylistDataSource,
  ) {
    super(Playlist, dataSource);
  }
}
