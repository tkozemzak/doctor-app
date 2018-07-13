
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appts').del()
    .then(function () {
      // Inserts seed entries
      return knex('appts').insert([
        {patient_name: 'Nick Derrico', date: '8/1/18', reason: 'Really bad at ping pong', details: 'Troy beat me 21-0', status: 'unconfirmed'}

      ]);
    });
};
