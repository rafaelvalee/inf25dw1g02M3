import {Entity, model, property, hasMany} from '@loopback/repository';
import {Livro} from './livro.model';

@model()
export class Autor extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'string',
  })
  nacionalidade?: string;

  @hasMany(() => Livro)
  livros: Livro[];

  constructor(data?: Partial<Autor>) {
    super(data);
  }
}

export interface AutorRelations {
  // describe navigational properties here
}

export type AutorWithRelations = Autor & AutorRelations;