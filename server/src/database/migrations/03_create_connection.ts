import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', table => {
    table.increments('id').primary();
    
    table.integer('user_id') 
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
  
      /* Quando houve a conexão entre classe e aluno*/
      table.timestamp('created_at')
       .defaultTo(knex.raw('CURRENT_TIMESTAMP'))//Formato de data e hora
       .notNullable();
    });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}