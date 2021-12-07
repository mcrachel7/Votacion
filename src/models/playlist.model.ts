import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Playlist extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  candidato: string;

  @property({
    type: 'number',
    required: true,
  })
  votos: number;

  @property({
    type: 'string',
    required: true,
  })
  designadoPrincipal: string;

  @property({
    type: 'string',
    required: true,
  })
  partido: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Playlist>) {
    super(data);
  }
}

export interface PlaylistRelations {
  // describe navigational properties here
}

export type PlaylistWithRelations = Playlist & PlaylistRelations;
