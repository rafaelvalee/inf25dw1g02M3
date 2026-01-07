import {Entity, model, property} from '@loopback/repository';

@model()
export class Emprestimo extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataLevantamento: string;

  @property({
    type: 'number',
    required: true,
  })
  livroId: number;

  @property({
    type: 'number',
    required: true,
  })
  utilizadorId: number;

  constructor(data?: Partial<Emprestimo>) {
    super(data);
  }
}

export interface EmprestimoRelations {
  // describe navigational properties here
}

export type EmprestimoWithRelations = Emprestimo & EmprestimoRelations;