using {ComponentContainerApp.db as schema} from '../db/schema';

@path: '/Clientes'
service ClientesService {
    @odata.draft.enabled
    entity Clientes as projection on schema.Cliente;
};
