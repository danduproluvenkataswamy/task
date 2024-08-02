import express from 'express';
 
import languageRoute from './language.route';

const routes = express.Router();

 
routes.use('/', languageRoute)


export default routes;