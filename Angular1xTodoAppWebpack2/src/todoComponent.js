// export class todoComponent{
//     constructor(value){
//         this.name = value;
//          this.appendToDoc = () =>{
//             document.write(this.name);
//         }

//     }
// }
function todoCtrl($scope) {
    $scope.todoList = [{todoText:'Learn Angular 4', done:false}];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(x) {
            if (!x.done) $scope.todoList.push(x);
        });
    };
};
export const todoComponent = {
  template: require('../template.html'),
  controller:todoCtrl
}