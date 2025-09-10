const User = require("../models/user_models.js");

const updateProfile = async (req, res) => {
    try {
        const userId = req.userId; // Get user ID from auth middleware
        const { username, domain, branch, year } = req.body;

        await User.updateOne(
            { _id: userId },
            { $set: { username, domain, branch, year } }
        );

        return res.status(200).json({ message: "Profile updated successfully" });
    } catch (error) {
        console.log("Profile update error", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { updateProfile };