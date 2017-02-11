//= require jquery
//= require jquery_ujs
//= require angular
//= require lodash

const deps = ['$http', '$interval', '$scope'];
const handler = function($http, $interval, $scope) {

  $scope.sessionId = new Date().getTime() + '_' + Math.round(Math.random() * 99999999999);

  const defaults = {
    direction: 'top',
    end: '#333399',
    start: '#ff00cc',
    style: 'linear',
  };

  $scope.gradient = Object.assign({}, defaults);

  const isDefault = function() {
    if (defaults.direction !== $scope.gradient.direction) return false;
    if (defaults.end !== $scope.gradient.end) return false;
    if (defaults.start !== $scope.gradient.start) return false;
    if (defaults.style !== $scope.gradient.style) return false;
    return true;
  }

  const fetchRecent = function() {
    $http({
      url: '/api/gradients',
      params: {
        session_id: $scope.sessionId,
      }
    }).then(function(response) {
      $scope.recentGradients = response.data;
    });
  };

  fetchRecent();
  $interval(fetchRecent, 5000);

  const save = _.throttle(function() {
    if (!isDefault()) {
      $http({
        method: 'POST',
        url: '/api/gradients',
        data: {
          code: $scope.gradient.code,
          session_id: $scope.sessionId,
        }
      });
    }
  }, 500, { leading: false, trailing: true });

  const update = function() {
    $scope.gradient.code = '-webkit-' + $scope.gradient.style +
      '-gradient(' + $scope.gradient.direction +
      ', ' + $scope.gradient.start +
      ', ' + $scope.gradient.end +
      ')';
    save();
  };

  $scope.$evalAsync(function() {
    $scope.$watch('gradient', update, true);
  });
};

angular.module('Gradients', []).controller('GradientsController', deps.concat(handler));
