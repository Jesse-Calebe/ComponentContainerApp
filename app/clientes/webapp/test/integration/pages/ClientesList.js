sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'comp.container.com.clientes',
            componentId: 'ClientesList',
            contextPath: '/Clientes'
        },
        CustomPageDefinitions
    );
});