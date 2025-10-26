using {ComponentContainerApp.db as schema} from '../db/schema';

@path: '/Produtos'
service ProdutosService {
    @odata.draft.enabled
    entity Produtos as projection on schema.Produto;
};
