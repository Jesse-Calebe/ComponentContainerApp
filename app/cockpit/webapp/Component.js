sap.ui.define(
  ["sap/ui/core/UIComponent", "comp/container/com/cockpit/model/models"],
  (UIComponent, models) => {
    "use strict";

    return UIComponent.extend("comp.container.com.cockpit.Component", {
      metadata: {
        manifest: "json",
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
      },

      init() {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");

        // enable routing
        this.getRouter().initialize();
            
        // register module paths
        jQuery.sap.registerModulePath(
          "comp.container.com.clientes",
          "../../clientes/webapp"
        );
        jQuery.sap.registerModulePath(
          "comp.container.com.produtos",
          "../../produtos/webapp"
        );
      },
    });
  }
);
