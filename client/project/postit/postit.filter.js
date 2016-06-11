angular.module('spm').filter('status', () => {
  return (input) => {
    if (!input) return;
    
    let output;
    switch(input) {
      case 'done':
        output = 'Done';
        break;
        
      case 'progress':
        output = 'In progress';
        break;
        
      default:
        output = 'To do';
        break;
    }
    
    return output;
  };
});