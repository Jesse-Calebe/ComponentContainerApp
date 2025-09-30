sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/ComponentContainer"],
  (Controller, ComponentContainer) => {
    "use strict";

    const COMP_MAP = {
      produtosKey: {
        component: {
          name: "comp.container.com.produtos",
          manifest: true,
          component: "produtos",
          width: "100%",
          height: "100%",
        },
        route: "RouteCockpitProdutos",
      },
      clientesKey: {
        component: {
          name: "comp.container.com.clientes",
          manifest: true,
          component: "clientes",
          width: "100%",
          height: "100%",
        },
        route: "RouteCockpitClientes",
      },
    };

    return Controller.extend("comp.container.com.cockpit.controller.Cockpit", {
      onInit() {},
      onToggleExpand(oEvent) {
        let oSideNav = this.byId("sideNavigation");

        oSideNav.setExpanded(!oSideNav.getExpanded());

        let oButton = oEvent.getSource();

        oButton.setIcon(
          oSideNav.getExpanded()
            ? "sap-icon://close-command-field"
            : "sap-icon://open-command-field"
        );
      },
      onNavItemSelect(oEvent) {
        let oItem = oEvent.getParameter("item");
        let sNavSelectedKey = oItem.getKey();
        let oCompMap = COMP_MAP[sNavSelectedKey];
        let oContentVbox = this.byId("contentVBox");
        let oRouter = this.getOwnerComponent().getRouter();

        oContentVbox.destroyItems();

        if (!oCompMap) {
          oRouter.navTo("RouteCockpit", {});
          return;
        }

        oRouter.navTo(oCompMap.route, {});

        let oCompContainer = new ComponentContainer(oCompMap.component);
        oContentVbox.addItem(oCompContainer);
      },
    });
  }
);
