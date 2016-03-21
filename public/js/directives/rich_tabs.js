angular.module('RichTabs', [])
.directive('richTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });
        pane.selected = true;
      };
      this.addPane = function(pane) {
        if (panes.length == 0) {
          $scope.select(pane);
        }
        panes.push(pane);
      };
    },
    templateUrl: 'views/rich_tabs.html'
  };
})
.directive('richPane', function() {
  return {
    require: '^richTabs',
    restrict: 'E',
    transclude: true,
    templateUrl: 'views/rich_pane.html',
    scope: {title: '@'},
    link: function(scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    }
  };
});
