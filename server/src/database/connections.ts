import knex from 'knex';
import path from 'path';


const db = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault:true, // Nos valores que não forem preenchidos.
});

export default db;