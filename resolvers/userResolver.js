let users = [
    { id: 1, name: 'John', age: 28 },
    { id: 2, name: 'Anna', age: 24 },
  ];
  
  const userResolvers = {
    Query: {
      users: () => users, 
      user: (_, { id }) => users.find(user => user.id === id),  
    },
  };
  
  module.exports = { userResolvers };
  