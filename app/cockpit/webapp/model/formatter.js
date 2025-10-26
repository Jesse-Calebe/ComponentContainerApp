sap.ui.define([], () => {
  "use strict";

  return {
    sideNavigationText: function (sItemText) {
      if (!sItemText) return "";

      try {
        const oResourceBundle = this.getOwnerComponent()
          .getModel("i18n")
          .getResourceBundle();

        return oResourceBundle.getText(sItemText);
      } catch (err) {
        return sItemText;
      }
    },
  };
});
