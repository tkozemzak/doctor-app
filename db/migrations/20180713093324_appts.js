
exports.up = function(knex, Promise) {
  return knex.schema.createTable("appts", function(table){
    table.increments();
    table.integer("doctor_id")
      .references("id")
      .inTable("doctors")
      .onDelete("CASCADE")
      .index();
    table.string("patient_name");
    table.date("date")
    table.string("reason");
    table.text("details");
    table.string("status")
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appts")
};
