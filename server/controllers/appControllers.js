import UserModel from "../model/User.model.js";
import bcrypt from 'bcrypt';
//post api/register
export async function register(req,res){

    try {
        const { username, password, profile, email } = req.body;        

        // check the existing user
        const existUsername = new Promise((resolve, reject) => {
            UserModel.findOne({ username }, function(err, user){
                if(err) reject(new Error(err))
                if(user) reject({ error : "Please use unique username"});
                resolve();
            })
        });

        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            UserModel.findOne({ email }, function(err, email){
                if(err) reject(new Error(err))
                if(email) reject({ error : "Please use unique Email"});

                resolve();
            })
        });


        Promise.all([existUsername, existEmail])
            .then(() => {
                if(password){
                    bcrypt.hash(password, 10)
                        .then( hashedPassword => {
                            
                            const user = new UserModel({
                                username,
                                password: hashedPassword,
                                profile: profile || '',
                                email
                            });

                            // return save result as a response
                            user.save()
                                .then(result => res.status(201).send({ msg: "User Register Successfully"}))
                                .catch(error => res.status(500).send({error}))

                        }).catch(error => {
                            return res.status(500).send({
                                error : "Enable to hashed password"
                            })
                        })
                }
            }).catch(error => {
                return res.status(500).send({ error })
            })


    } catch (error) {
        return res.status(500).send(error);
    }

}

//api/login
export async function login(req,res){
    res.json('login now');
}
//get user /api/user/example123
export async function getUser(req,res){
    res.json('getUser route');
}

//put
export async function updateUser(req,res){
    res.json('Update user route');
}

//get
export async function generateOTP(req,res){
    res.json('generateOTP route');
}
//get
export async function verifyOTP(req,res){
    res.json('verifyOTP route');
}
//get //redirect user when otp is valid
export async function createResetSession(req,res){
    res.json('createResetSession route');
}
//put //update user password
export async function resetPassword(req,res){
    res.json('ResetRoute route');
}
