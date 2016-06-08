angular.module('artoo').controller('PlayerCtrl', ($scope) => {
   $scope.player = {
      name: 'Gimli',
      hp: 100,
      exp: 17,
      level: 2,
      race: 'dwarf',
   }



   $scope.isDead = () => {
      return ($scope.player.hp) ? 'No' : 'Yes';
   };
   //take damage
   $scope.takeDamage = (damage) => {
      $scope.player.hp = ($scope.player.hp < damage) ? 0 : $scope.player.hp - damage;

   };
   //level up
   $scope.levelUp = () => {
         $scope.player.level += 1;
         $scope.player.exp = 0;
         $scope.player.hp = 100;
      }
      //gain exp
   $scope.gainExp = (exp) => {
      var totalExp = $scope.player.exp + exp;

      if (totalExp >= 100) {
         $scope.levelUp();
         totalExp -= 100;

      }

      $scope.player.exp = totalExp;

   };
});