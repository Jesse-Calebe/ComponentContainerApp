sap.ui.define(["sap/ui/core/mvc/Controller"], (BaseController) => {
  "use strict";

  return BaseController.extend("comp.container.com.cockpit.controller.App", {
    onInit() {
      let oRouter = this.getOwnerComponent().getRouter();
      oRouter.attachRouteMatched(this._onRouteMatched, this);
    },
    onSideNavigationItemSelect(oEvent) {
      let oItem = oEvent.getParameter("item");
      let sNavSelectedKey = oItem.getKey();

      if (sNavSelectedKey === "toggleSideNavigation")
        return this._toogleSideNavigation(oItem);

      this.getOwnerComponent().getRouter().navTo(sNavSelectedKey);
    },
    _toogleSideNavigation(oItem) {
      let oSideNav = this.byId("idSideNavigation");
      let sCurrSelected = oSideNav.getSelectedKey();

      oSideNav.setExpanded(!oSideNav.getExpanded());

      oItem.setIcon(
        oSideNav.getExpanded()
          ? "sap-icon://close-command-field"
          : "sap-icon://open-command-field"
      );

      let oSideNavList = this.byId("idSideNavigationList");
      let aItems = oSideNavList.getItems();

      for (let i = 0; i < aItems.length; i++) {
        let oItem = aItems[i];
        oItem.setExpanded(false);

        for (let j = 0; j < oItem.getItems().length; j++) {
          let oSubItem = oItem.getItems()[j];

          if (oSubItem.getKey() === sCurrSelected) {
            oItem.setExpanded(true);
          }
        }
      }

      throw new Error("Stop toogle side navigation");
    },
    _onRouteMatched: function (oEvent) {
      var oConfig = oEvent.getParameter("config");

      // select the corresponding item in the left menu
      this.setSelectedMenuItem(oConfig.name);
    },
    setSelectedMenuItem: function (sKey) {
      this.byId("idSideNavigation").setSelectedKey(sKey);
    },
  });
});
