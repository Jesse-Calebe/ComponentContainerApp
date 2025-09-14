using ProdutosService as service from '../../srv/produtos-srv';
annotate service.Produtos with @(
    UI.SelectionFields : [
        ID,
        nome,
        peso,
        preco,
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
        {
            $Type : 'UI.DataField',
            Value : peso,
        },
        {
            $Type : 'UI.DataField',
            Value : preco,
        },
        {
            $Type : 'UI.DataField',
            Value : um,
            Label : 'um',
        },
    ],
);

annotate service.Produtos with {
    ID @Common.Label : 'ID'
};

annotate service.Produtos with {
    nome @Common.Label : 'nome'
};

annotate service.Produtos with {
    peso @Common.Label : 'peso'
};

annotate service.Produtos with {
    preco @Common.Label : 'preco'
};

