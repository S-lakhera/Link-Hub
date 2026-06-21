import UserDAO from '../daos/user.daos.js';
import LinkDAO from '../daos/link.daos.js'
import { generateToken } from '../utils/authToken.js';

export const registerUser = async (req, res) => {
    try {

        let { username, email } = req.body;

        let existingUser = await UserDAO.getUserByEmail(email)
        if (existingUser) {
            throw new Error("This email id is already registerd.")
        }

        existingUser = await UserDAO.getUserByUsername(username)
        if (existingUser) {
            throw new Error("This Username already registerd.")
        }

        const newUser = await UserDAO.createUser(req.body);


        let authToken = generateToken(newUser)
        if (!authToken) {
            throw new Error("Error in generating auth token.");
        }

        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        };

        res.cookie("auth_Token", authToken, cookieOptions);

        res.status(201).json({
            success: true,
            message: "User registered successfully!",
            user: newUser
        });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserDAO.getUserByEmail(email);
        if (!user) return res.status(404).json({ message: "Invalid credentials" });

        const isMatch = await user.comparePassword(password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const authToken = generateToken(user)
        const cookieOptions = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
            maxAge: 24 * 60 * 60 * 1000, // 1 day
        };

        res.cookie("auth_Token", authToken, cookieOptions)

        res.status(200).json({
            success: true,
            message: "Login successful!",
            user
        });
    } catch (error) {

        res.status(500).json({ success: false, error: error.message });
    }
};

export const logoutUser = (req, res) => {
    try {
        res.clearCookie("auth_Token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
        });

        res.status(200).json({
            success: true,
            message: "User Logged out successfully."
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getMe = async (req, res) => {
    try {
        let userId = req.user._id;

        const user = await UserDAO.getUserById(userId)

        res.status(200).json({
            success: true,
            message: "User found",
            user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }
}

export const getPublicProfile = async (req, res) => {
    try {
        const { username } = req.params;

        const user = await UserDAO.getUserByUsername(
            username.toLowerCase()
        );

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const links = await LinkDAO.findByUserId(
            user._id
        );

        const publicUser = {
            name: user.name,
            username: user.username,
            avatar: user.avatar,
            bio: user.bio,
            socials: user.socials,
        };

        return res.status(200).json({
            success: true,
            user: publicUser,
            links,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

export const updateProfile =
    async (req, res) => {
        try {
            const updatedUser =
                await UserDAO.updateUserProfile(
                    req.user._id,
                    req.body
                );

            res.status(200).json({
                success: true,
                user: updatedUser,
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    };