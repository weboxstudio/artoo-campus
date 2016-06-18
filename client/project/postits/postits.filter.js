angular.module('spm')
  .filter('status', () => {
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
  })

  .filter('dueDate', () => {
    return (input, mode) => {
      if (!input) return;
      if (mode === 'all') return input;
      let now = new Date();
      
      return input.filter((postit) => {  
        if (mode === 'expired') return postit.dates.dueAt < now;
        return postit.dates.dueAt > now;
      });
    };
  });