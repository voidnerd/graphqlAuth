const server = require('./src')

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
  
  
  
// server.start(() => console.log(`Server is running on http://localhost:4000`))