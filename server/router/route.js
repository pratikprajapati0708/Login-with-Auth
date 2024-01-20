import { Router } from 'express';
import * as controller from '../controllers/appControllers.js'
const router = Router();

//POST method
router.route('/register').post(controller.register);
//router.route('/registerMail').post(); //send the email
router.route('/authenticate').post((req,res)=> res.end()); //Authenticate user
router.route('/login').post(controller.login); //login in app

//GET Method
router.route('/user/:username').get(controller.getUser); //user with username
router.route('/generateOTP').get(controller.generateOTP); //generate random otp
router.route('/verifyOTP').get(controller.verifyOTP); //verify otp
router.route('/createResetSession').get(controller.createResetSession); //reset all the variables

//PUT Method
router.route('/updateuser').put(controller.updateUser); //update user profiles
router.route('/resetPassword').put(controller.resetPassword); //use to reset password


export default Router