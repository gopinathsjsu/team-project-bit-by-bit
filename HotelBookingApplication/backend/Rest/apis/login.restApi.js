import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

async function login(req, res) {
  let body = req.body;
  // let {body, params, query} = data
    const email = body.email;
    let password = body.password;
    var response, statusCode;
    var usersInstance = ModelFactory.getUserInstance()
    try {
        let user = await usersInstance.findOne({email});
        console.log("#### users :", user, email)
        if (user) {
            let userObj = user;
            console.log("userobj is ", userObj)
            var userId = userObj._id;
            let isValidPassword = bcrypt.compareSync(password, userObj.password); // true
            if (isValidPassword == false) {
                response = { msg: 'Login failed' }
                statusCode = 401
                return callback(null, {response, statusCode})
            }
            const token = jwt.sign({
                data: {
                    userId: userId,
                    username: userObj.username,
                    email: userObj.email,
                    mobileNumber: userObj.mobileNumber,
                    role: userObj.restFlg,
                }
            }, 'my-secret-key-0001xx01212032432', { expiresIn: '24h' });
            response = {
                token: token,
                msg: 'LoggedIn successfully',
                data: {
                    username: userObj.username,
                    userId: userObj._id,
                    rewards: userObj.rewards,
                    isAdmin: userObj.isAdmin ? true : false,
                }
            }
            console.log("Response is ", response)
            res.status(200).json(response);
        } else {
            response = { msg: 'Invalid user name or password' }
            res.status(400).json(response);
        }
    } catch(err) {
        console.log("@@@@ err", err);
        response = { msg: 'Failed to login' }
        res.status(400).json(response);
      }
}

let endpoints = {
  "/login": [
    {
      method: "POST",
      callbacks: [login], 
    },
  ],
};

export { endpoints };
