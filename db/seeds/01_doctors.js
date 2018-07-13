
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('doctors').del()
    .then(function () {
      // Inserts seed entries
      return knex('doctors').insert([
        {name: 'Tim Kozemzak', email: 'tim@doctor.com', bio: 'I am a very prestigious doctor', img_url: 'www.google.com', password: 'testpass'}

      ]);
    });
};
