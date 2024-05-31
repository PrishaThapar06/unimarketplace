// Import necessary modules
import User from '../model/User.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../config.js';

// Registration route
export async function register(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body;

        // Check if required fields are provided
        if (!firstName || !lastName || !password || !email) {
            return res.status(400).send({ error: "Please provide first name, last name, password, and email" });
        }

        // Check for existing email
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).send({ error: "Email already exists, please use a different one" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save the user
        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await user.save();

        // Send success response
        res.status(201).send({ msg: "User registered successfully" });
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}

// Login route
export async function login(req, res) {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).send({ error: "Incorrect password" });
        }

        // Create jwt token
        const token = jwt.sign({
            userId: user._id,
            email: user.email
        }, config.JWT_SECRET, { expiresIn: "24h" });

        res.status(200).send({
            msg: "Login Successful",
            userId: user._id,
            email: user.email,
            token
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}

// Logout route
export async function logout(req, res){
    req.session.destroy((err) => {
        if (err) {
          console.error('Error while logging out:', err);
          res.status(500).send({ error: 'Internal server error' });
        } else {
          res.status(200).send({ message: 'Logout successful' });
        }
      });
}