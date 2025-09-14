sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"comp/container/com/clientes/test/integration/pages/ClientesList",
	"comp/container/com/clientes/test/integration/pages/ClientesObjectPage"
], function (JourneyRunner, ClientesList, ClientesObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('comp/container/com/clientes') + '/index.html',
        pages: {
			onTheClientesList: ClientesList,
			onTheClientesObjectPage: ClientesObjectPage
        },
        async: true
    });

    return runner;
});

