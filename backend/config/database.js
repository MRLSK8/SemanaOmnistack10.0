const url = process.env.DATABASE_URL || 'mongodb://localhost/omnistack10';

const flags = {
  useNewUrlParser: 'true',
  useCreateIndex: 'true',
  useUnifiedTopology: 'true'
};

module.exports = { url, flags };
