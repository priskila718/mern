
const express = require('express');
const mongoose = require('mongoose')
const {ApolloServer,gql } = require('apollo-server-express');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const cors=require('cors')
const userApiFromRouter = 
require('./routes/userRoutes') //import
const app = express() 
const port = 3001;
const url= 'mongodb+srv://madhuridhulipudi19:g8CFQaP521fhA65p@cluster0.3kpxupq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; 
app.use(express.json())
app.use(cors())
mongoose.connect(url,{useNewUrlParser:true,
useUnifiedTopology:true})
.then(()=>{console.log('DB connected')})
.catch((err)=>{console.log(err)})
const server = new ApolloServer({typeDefs,resolvers});
app.use('/users',userApiFromRouter);//add router
async function StartServer(){
   await server.start();
   server.applyMiddleware({app});
   app.listen(port,()=>{
    console.log('Server Live 3001');
   })
}

StartServer();