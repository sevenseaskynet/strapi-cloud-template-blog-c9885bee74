module.exports = ({env}) => (
    {
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET', '5c678d939d175ad51f084ac7b993d28f9799a75daff2c6a5646a4342f3d51b2c'),
    },
  },
}
);
