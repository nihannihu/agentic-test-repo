const User = require("../models/User");

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!password) {
        return res.status(400).json({ error: "Password required" });
    }

    console.log(`Attempting login for: ${email}`);

    if (password.length < 5) {
        return res.status(400).json({ error: "Password too short" });
    }

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json({ message: "Login successful", user });
};

module.exports = { login };
