import {Entity, model, property} from '@loopback/repository';

@model()
export class Livro extends Entity {
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
  titulo: string;

  @property({
    type: 'number',
  })
  ano?: number;

  @property({
    type: 'number',
  })
  autorId?: number;

  constructor(data?: Partial<Livro>) {
    super(data);
  }
}

export interface LivroRelations {
  // describe navigational properties here
}

export type LivroWithRelations = Livro & LivroRelations;