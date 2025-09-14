sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"comp/container/com/produtos/test/integration/pages/ProdutosList",
	"comp/container/com/produtos/test/integration/pages/ProdutosObjectPage"
], function (JourneyRunner, ProdutosList, ProdutosObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('comp/container/com/produtos') + '/index.html',
        pages: {
			onTheProdutosList: ProdutosList,
			onTheProdutosObjectPage: ProdutosObjectPage
        },
        async: true
    });

    return runner;
});

