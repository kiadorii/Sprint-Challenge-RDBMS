
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          name: 'Project 01',
          description: 'Project 01 Description',
          completedProject: false,
          actionId: 1,
          contextId: 2
        },{
          name: 'Project 02',
          description: 'Project 02 Description',
          completedProject: false,
          actionId: 2,
          contextId: 1
        },{
          name: 'Project 03',
          description: 'Project 03 Description',
          completedProject: true,
          actionId: 3,
          contextId: 1
        },
      ]);
    });
};
