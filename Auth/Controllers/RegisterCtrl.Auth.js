// const {
//     EmailValidation,
//     PasswordValidation,
// } = require("../../Shared/Utils/Validation");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require('../Models/User');

const registerCtrl = async (req, res) => {
    try {
        // taking data from body
        const { email, username, password, role } = req.body;

        // // validating data
        // if (!EmailValidation(email)) {
        //     return res.status(401).json({ message: "Invalid E-mail format" });
        // }
        // if (!PasswordValidation(password)) {
        //     return res.status(401).json({ message: "Invalid E-mail format" });
        // }

        // check email is already exits
        // const emailAlreadyExists = await User.findOne({ email: email });
        // if (emailAlreadyExists) {
        //     return res.status(400).json({ message: "Email is already registered" });
        // }

        // Hashed password
        const saltRound = process.env.saltRound;
        const salt = bcryptjs.genSalt(saltRound);
        const hashedPassword = bcryptjs.hash(password, salt);

        // Creating User model
        const newUser = new User({
            email,
            password: hashedPassword,
            role,
            username,
        });

        // Save to DB
        await newUser.save();

        // generating token
        const payload = {
            user: {
                id: newUser.id,
            },
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        // Sending token in res
        res.status(201).json({ message: "User registered successfully" }, token);
    } catch (error) {
        return res.status(500).json({ message: "An error occurred" });
    }
};

module.exports = {
    registerCtrl,
};
