import User from '../models/user.model.js';

class UserDAO {
    // Create a new user
    async createUser(userData) {
        const user = new User(userData);
        const savedUser = await user.save();

        return({
            name: savedUser.name,
            username: savedUser.username,
            id: savedUser._id,
            email: savedUser.email,
        })
    }

    // Find a user by email
    async getUserByEmail(email) {
        return await User.findOne({ email });
    }

    // Find a user by email
    async getUserByUsername(username) {
        return await User.findOne({ username }).select('-password');
    }

    // Find a user by ID
    async getUserById(id) {
        return await User.findById(id).select('-password'); // Exclude password for safety
    }

    // Update user profile
    async updateUserProfile(id, updateData) {
        return await User.findByIdAndUpdate(id, updateData, { returnDocument: 'after' });
    }
}

export default new UserDAO();