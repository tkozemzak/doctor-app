
exports.up = function(knex, Promise) {
  return knex.schema.createTable("notes", function(table){
    table.increments();
    table.integer("doctor_id")
      .references("id")
      .inTable("doctors")
      .onDelete("CASCADE")
      .index();
      table.integer("appt_id")
        .references("id")
        .inTable("appts")
        .onDelete("CASCADE")
        .index();
    table.text("note_body");
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("notes")
};
