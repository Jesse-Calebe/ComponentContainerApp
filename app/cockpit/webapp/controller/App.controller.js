sap.ui.define(["sap/ui/core/mvc/Controller"], (BaseController) => {
  "use strict";

  return BaseController.extend("comp.container.com.cockpit.controller.App", {
    onInit() {},
    onSideNavigationItemSelect(oEvent) {
      let oItem = oEvent.getParameter("item");
      let sNavSelectedKey = oItem.getKey();

      if (sNavSelectedKey === "toggleSideNavigation")
        return this._toogleSideNavigation(oItem);

      this.getOwnerComponent().getRouter().navTo(sNavSelectedKey);
    },
    _toogleSideNavigation(oItem) {
      let oSideNav = this.byId("idSideNavigation");

      oSideNav.setExpanded(!oSideNav.getExpanded());

      oItem.setIcon(
        oSideNav.getExpanded()
          ? "sap-icon://close-command-field"
          : "sap-icon://open-command-field"
      );
    },
  });
});
