sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'comp.container.com.clientes',
            componentId: 'ClientesObjectPage',
            contextPath: '/Clientes'
        },
        CustomPageDefinitions
    );
});