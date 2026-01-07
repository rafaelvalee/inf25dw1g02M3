import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Autor, AutorRelations, Livro} from '../models';
import {LivroRepository} from './livro.repository';

export class AutorRepository extends DefaultCrudRepository<
  Autor,
  typeof Autor.prototype.id,
  AutorRelations
> {

  public readonly livros: HasManyRepositoryFactory<Livro, typeof Autor.prototype.id>;

  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
    @repository.getter('LivroRepository') protected livroRepositoryGetter: Getter<LivroRepository>,
  ) {
    super(Autor, dataSource);
    this.livros = this.createHasManyRepositoryFactoryFor('livros', livroRepositoryGetter,);
    this.registerInclusionResolver('livros', this.livros.inclusionResolver);
  }
}