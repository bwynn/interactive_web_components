angular.module('RichPanes', [])
.directive('richPane', function() {
  return {
    require: '^richTabs',
    restrict: 'E',
    templateUrl: 'views/rich_pane.html',
    transclude: true,
    scope: {title: '@'},
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    }
  };
});
