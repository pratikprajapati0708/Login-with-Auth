
//post api/register
export async function register(req,res){
    res.json('register now');
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
