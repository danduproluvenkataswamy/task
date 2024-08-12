import express from 'express';
 
import languageRoute from './language.route';
//import router from './userprofile.route';

const routes = express.Router();    

 
routes.use('/', languageRoute) 
//routes.use('/', router)
 

export default routes; 