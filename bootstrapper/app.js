"use strict";
var angular = require('angular');
var typescript_angular_utilities_1 = require('typescript-angular-utilities');
var ui_module_1 = require('../source/ui.module');
var inputBootstrapper_1 = require('./inputs/inputBootstrapper');
var buttonBootstrapper_1 = require('./buttons/buttonBootstrapper');
var popupBootstrapper_1 = require('./popup/popupBootstrapper');
var messageLogBootstrapper_1 = require('./messageLog/messageLogBootstrapper');
var cardContainerBootstrapper_1 = require('./cards/cardContainerBootstrapper');
var tabsBootstrapper_1 = require('./tabs/tabsBootstrapper');
var formsBootstrapper_1 = require('./forms/formsBootstrapper');
var miscBootstrapper_1 = require('./misc/miscBootstrapper');
var text_1 = require('./text/text');
var bootstrapper = {
    template: require('./app.html'),
};
angular.module('app', [
    ui_module_1.moduleName,
    'ui.router',
    inputBootstrapper_1.moduleName,
    buttonBootstrapper_1.moduleName,
    popupBootstrapper_1.moduleName,
    messageLogBootstrapper_1.moduleName,
    cardContainerBootstrapper_1.moduleName,
    tabsBootstrapper_1.moduleName,
    formsBootstrapper_1.moduleName,
    miscBootstrapper_1.moduleName,
    text_1.moduleName,
])
    .component('tsBootstrapper', bootstrapper)
    .config(BaseRoute)
    .value(typescript_angular_utilities_1.downgrade.notificationServiceName, {
    success: function (message) { return console.log(message); },
    info: function (message) { return console.log(message); },
    warning: function (message) { return console.log(message); },
    error: function (message) { return console.error(message); },
});
BaseRoute.$inject = ['$urlRouterProvider', '$stateProvider'];
function BaseRoute($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
        url: '/',
        template: '<h3>Welcome to typescript-angular-components</h3>',
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyw2Q0FBb0MsOEJBQThCLENBQUMsQ0FBQTtBQUduRSwwQkFBK0MscUJBQXFCLENBQUMsQ0FBQTtBQUVyRSxrQ0FBOEMsNEJBQTRCLENBQUMsQ0FBQTtBQUMzRSxtQ0FBK0MsOEJBQThCLENBQUMsQ0FBQTtBQUM5RSxrQ0FBOEMsMkJBQTJCLENBQUMsQ0FBQTtBQUMxRSx1Q0FBbUQscUNBQXFDLENBQUMsQ0FBQTtBQUN6RiwwQ0FBNkMsbUNBQW1DLENBQUMsQ0FBQTtBQUNqRixpQ0FBNEMseUJBQXlCLENBQUMsQ0FBQTtBQUN0RSxrQ0FBNkMsMkJBQTJCLENBQUMsQ0FBQTtBQUN6RSxpQ0FBNkMseUJBQXlCLENBQUMsQ0FBQTtBQUN2RSxxQkFBNkMsYUFBYSxDQUFDLENBQUE7QUFFM0QsSUFBTSxZQUFZLEdBQThCO0lBQy9DLFFBQVEsRUFBRSxPQUFPLENBQUMsWUFBWSxDQUFDO0NBQy9CLENBQUE7QUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtJQUNyQixzQkFBZ0I7SUFDaEIsV0FBVztJQUVYLDhCQUFlO0lBQ2YsK0JBQWdCO0lBQ2hCLDhCQUFlO0lBQ2YsbUNBQW9CO0lBQ3BCLHNDQUFjO0lBQ2QsNkJBQWE7SUFDYiw4QkFBYztJQUNkLDZCQUFjO0lBQ2QsaUJBQWM7Q0FDZCxDQUFDO0tBQ0EsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFlBQVksQ0FBQztLQUN6QyxNQUFNLENBQUMsU0FBUyxDQUFDO0tBQ2pCLEtBQUssQ0FBQyx3Q0FBUyxDQUFDLHVCQUF1QixFQUFFO0lBQ3pDLE9BQU8sRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CO0lBQ3hDLElBQUksRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CO0lBQ3JDLE9BQU8sRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEVBQXBCLENBQW9CO0lBQ3hDLEtBQUssRUFBRSxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCO0NBQ3hDLENBQUMsQ0FBQztBQUVKLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELG1CQUFtQixrQkFBa0IsRUFBRSxjQUFjO0lBQ3BELGtCQUFrQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNsQyxjQUFjO1NBQ1osS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUNYLEdBQUcsRUFBRSxHQUFHO1FBQ1IsUUFBUSxFQUFFLG1EQUFtRDtLQUM3RCxDQUFDLENBQUM7QUFDTCxDQUFDIn0=