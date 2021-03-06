Package.describe({
  summary: "Reaction UI - Components for Reaction Commerce",
  name: "reactioncommerce:reaction-ui",
  version: "0.7.2",
  documentation: "README.md"
});

Npm.depends({
  "classnames": "2.2.3",
  "sortablejs": "1.4.2",
  "postcss": "5.0.14",
  "postcss-js": "0.1.1",
  "autoprefixer": "6.3.1",
  "css-annotation": "0.6.2",
  "tether-drop": "1.4.2",
  "tether-tooltip": "1.2.0",
  "react-textarea-autosize": "3.3.0",
  "react-color": "1.3.6",
  "autonumeric": "1.9.43",
  "accounting-js": "1.1.1",
  "jquery": "2.2.3",
  "jquery-ui": "1.10.5"
});

Package.onUse(function (api) {
  api.versionsFrom("METEOR@1.3");
  api.use("tmeasday:check-npm-versions@0.3.1");

  // meteor base packages
  api.use("meteor-base");
  api.use("mongo");
  api.use("ecmascript");
  api.use("blaze-html-templates");
  api.use("session");
  api.use("tracker");
  api.use("logging");
  api.use("reload");
  api.use("random");
  api.use("ejson");
  api.use("spacebars");
  api.use("check");
  api.use("less");
  api.use("reactive-dict");

  // Community Packages
  api.use("react-template-helper@0.2.9");

  // meteor add-on packages
  api.use("reactioncommerce:core@0.13.0");
  api.use("reactioncommerce:reaction-schemas@2.0.3");

  api.addFiles("common/global.js", ["client", "server"]);
  api.addFiles("lib/imports.js", "client");

  api.addFiles("client/helpers/helpers.js", "client");

  api.addFiles("client/components/components.jsx", "client");

  api.addFiles("client/components/icon/icon.jsx", "client");

  // api.addFiles("client/components/button/button.jsx", "client");
  api.addFiles("client/components/button/button.html", "client");
  api.addFiles("client/components/button/button.js", "client");
  api.addFiles("client/components/button/button.less", "client");

  api.addFiles("client/components/cards/cardGroup.html", "client");
  api.addFiles("client/components/cards/cardGroup.less", "client");
  api.addFiles("client/components/cards/cards.html", "client");
  api.addFiles("client/components/cards/cards.js", "client");
  api.addFiles("client/components/cards/cards.less", "client");

  api.addFiles("client/components/sortable/sortable.jsx", "client");

  api.addFiles("client/components/items/items.less", "client");

  api.addFiles("client/components/separator/separator.jsx", "client");
  api.addFiles("client/components/separator/separator.less", "client");

  api.addFiles("client/components/buttonGroup/buttonGroup.jsx", "client");
  api.addFiles("client/components/buttonGroup/buttonGroup.less", "client");

  api.addFiles("client/components/numericInput/numericInput.html", "client");
  api.addFiles("client/components/numericInput/numericInput.js", "client");

  api.addFiles("client/components/popover/popover.less", "client");
  api.addFiles("client/components/tooltip/tooltip.less", "client");

  // api.addFiles("client/components/textfield/textfield.jsx", "client");
  api.addFiles("client/components/textfield/textfield.html", "client");
  api.addFiles("client/components/textfield/textfield.less", "client");
  api.export("TextField");

  // api.addFiles("client/components/metadata/metadata.jsx", "client");
  api.addFiles("client/components/metadata/metadata.less", "client");

  api.addFiles("client/components/select/select.html", "client");
  api.addFiles("client/components/select/select.js", "client");
  api.addFiles("client/components/select/select.less", "client");

  // api.addFiles("client/components/media/media.jsx", "client");
  api.addFiles("client/components/media/media.less", "client");

  // api.addFiles("client/components/tags/tag.jsx", "client");
  api.addFiles("client/components/tags/tagItem.html", "client");
  api.addFiles("client/components/tags/tagItem.js", "client");
  // api.addFiles("client/components/tags/tags.jsx", "client");
  api.addFiles("client/components/tags/tagList.html", "client");
  api.addFiles("client/components/tags/tagList.js", "client");
  api.addFiles("client/components/tags/tags.less", "client");

  api.addFiles("client/components/upload/upload.html", "client");
  api.addFiles("client/components/upload/upload.js", "client");

  api.addFiles("client/styles/variables.less", "client", {isImport: true});
  api.addFiles("client/styles/mixins.less", "client", {isImport: true});

  // Templates
  api.addFiles("client/templates/dashboard/dashboard.html", "client");
  api.addFiles("client/templates/dashboard/dashboard.js", "client");

  api.addFiles("client/templates/themeEditor/themeEditor.html", "client");
  api.addFiles("client/templates/themeEditor/themeEditor.js", "client");
  api.addFiles("client/templates/themeEditor/themeEditor.less", "client");

  api.addFiles("client/templates/themeDetails/themeDetails.html", "client");
  api.addFiles("client/templates/themeDetails/themeDetails.js", "client");

  // Assets for theme
  api.addAssets("private/themes/button.css", "server");

  api.addFiles("server/processTheme.js", "server");
  api.addFiles("server/register.js", "server");

  api.mainModule("client/main.js", "client");

  // Exports
  api.export("React");
  api.export("ReactionUI");
  api.export("Sortable");
});
