using {ComponentContainerApp.db as schema} from '../db/schema';

@path: '/Produtos'
service ProdutosService {
    entity Produtos as projection on schema.Produto;
};
