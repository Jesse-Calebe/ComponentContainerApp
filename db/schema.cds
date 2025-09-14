namespace ComponentContainerApp.db;

using {cuid} from '@sap/cds/common';

entity Cliente : cuid {
    nome : String(100);
};

entity Produto : cuid {
    nome  : String(100);
    preco : Decimal(10, 3);
    um    : String(3);
    peso  : Decimal(6, 3);
};
