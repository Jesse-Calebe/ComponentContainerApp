using {ComponentContainerApp.db as schema} from '../db/schema';

@path: '/Clientes'
service ClientesService {
    entity Clientes as projection on schema.Cliente;
};
