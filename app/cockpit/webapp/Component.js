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



        // register module paths - Begin
        // Workzone   : this._componentConfig.url
        // Standalone : location.pathname
        let aPathLocation = this._componentConfig.url ? this._componentConfig.url.split('.') : location.pathname.split('.');

        const APPS_TO_EXPOSE = [
          { id: "comp.container.com.clientes", version: "0.0.1" },
          { id: "comp.container.com.produtos", version: "0.0.1" },
        ]

        if (aPathLocation.length >= 2) {
          let sDestination = aPathLocation[0]
          let sRouter = aPathLocation[1]

          APPS_TO_EXPOSE.forEach(element => {
            jQuery.sap.registerModulePath(
              element.id,
              `${sDestination}.${sRouter}.${element.id.replaceAll('.', '')}-${element.version}`
            );
          });
        };
        // register module paths - End

        // register module paths for LOCAL TEST - Begin
        if (location.host.includes('applicationstudio') || location.host.includes('localhost')) {
          const APPS_TO_EXPOSE_LOCAL = [
            { id: "comp.container.com.clientes", path: "../../clientes/webapp" },
            { id: "comp.container.com.produtos", path: "../../produtos/webapp" },
          ]

          APPS_TO_EXPOSE_LOCAL.forEach(element => {
            jQuery.sap.registerModulePath(
              element.id,
              element.path
            );
          });
        }
        // register module paths for LOCAL TEST - End

      },
    });
  }
);