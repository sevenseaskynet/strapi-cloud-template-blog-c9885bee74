// module.exports = () => ({});
module.exports = {
  'users-permissions': {
    config: {
      jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    },
  },
};
