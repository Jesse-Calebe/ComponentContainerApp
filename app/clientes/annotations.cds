using ClientesService as service from '../../srv/clientes-srv';
annotate service.Clientes with @(
    UI.SelectionFields : [
        ID,
        nome,
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Value : nome,
        },
    ],
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Informações Básicas',
            ID : 'InformaesBsicas',
            Target : '@UI.FieldGroup#InformaesBsicas',
        },
    ],
    UI.FieldGroup #InformaesBsicas : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : nome,
            },
        ],
    },
);

annotate service.Clientes with {
    ID @Common.Label : 'ID'
};

annotate service.Clientes with {
    nome @Common.Label : 'nome'
};

