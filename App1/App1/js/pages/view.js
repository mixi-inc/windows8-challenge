(function () {
    "use strict";

    var page = WinJS.UI.Pages.define("/html/view.html", {

        ready: function (element, options) {
            var listView = itemList.winControl;

            WinJS.UI.setOptions(listView, {
                itemTemplate: simple_ItemTemplate,
                itemDataSource: new WinJS.Binding.List(DummyModel.get()).dataSource,
                layout: new WinJS.UI.GridLayout()
            });
        }
    });
})();
