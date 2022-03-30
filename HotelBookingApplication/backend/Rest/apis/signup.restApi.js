import bcrypt from "bcryptjs";
import { uuid } from "uuidv4";
var saltRounds = 10;

async function signUp(req, res) {
    try {
        // let {
        //     body,
        //     params,
        //     query
        // } = data;
        let body = req.body;
        const username = body.username;
        const password = body.password;
        const email = body.email;
        var userInstance = ModelFactory.getUserInstance();
        //console.log("### signUp", data)
        var user = await userInstance.findOne({
            email
        })
        if (user) {
            res.status(401).json({
                msg: "Email already exists"
            });
        } else {
            const encryptedPassword = bcrypt.hashSync(password, saltRounds);
            let newUserId = `u-${uuid()}`
            let newUserObj = {
                _id: newUserId,
                username,
                email,
                password: encryptedPassword

            }
            var newUserCreatedRes = await userInstance.create(newUserObj);
            console.log("### newUserCreatedRes :", newUserCreatedRes)
            res.status(200).json({
                msg: "User Created Successfully"
            });
        }
    } catch (err) {
        console.log("##### err : ", err)
        res.status(400).json({
            msg: "User registration failed"
        });
    }
};


let endpoints = {
    "/signup": [{
        method: "POST",
        callbacks: [signUp],
    }, ],
};

export {
    endpoints
};