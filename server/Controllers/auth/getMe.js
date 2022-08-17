import User from "../../Models/User.js"
import bcrypt from "bcryptjs"

export const getMe = async (req, res) => {
    try {
        const user = await User.findOne(req.userId)

        if (!user) {
            return res.json({
                message: "Пользователя с таким именем не существует!"
            })
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        )

        return res.json({
            token, user
        })

    } catch (error) {
        res.json({ message: "Ошибка при получении пользователя" })
    }
}