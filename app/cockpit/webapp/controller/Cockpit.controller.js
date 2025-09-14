sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/ComponentContainer"],
  (Controller, ComponentContainer) => {
    "use strict";

    const COMP_MAP = {
      produtosKey: {
        name: "comp.container.com.produtos",
        manifest: true,
        component: "produtos",
        width: "100%",
        height: "100%",
      },
      clientesKey: {
        name: "comp.container.com.clientes",
        manifest: true,
        component: "clientes",
        width: "100%",
        height: "100%",
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

        let oContentVbox = this.byId("contentVBox");
        oContentVbox.destroyItems();

        let oCompContainer = new ComponentContainer(COMP_MAP[sNavSelectedKey]);
        oContentVbox.addItem(oCompContainer);
      },
    });
  }
);
