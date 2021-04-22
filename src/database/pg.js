import pkg from 'pg'
const {Pool} = pkg

const pool = new Pool({
    user: 'rfsjwuhq',
    host: 'queenie.db.elephantsql.com',
    database: 'rfsjwuhq',
    password: '26hYkOnz2JtPn98Hbtzk_HNGUplgubqd',
    port: 5432
  });

export default pool

// Pool => pooling connections: the pool handle the clients implicitly 
// MongoDB ??? Yes. Next Tuesday we have a lecture on Mongo. NonSQL
// Schema: MongoDB has not relations. Data in nonSQL database is unstructured (Mongoose)
// Schemas in SQL? Sequelize 
