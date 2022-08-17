import User from "../../Models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const login = async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username })

        if (!user) {
            return res.json({
                message: "Пользователя с таким именем не существует!"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password)

        if (!isPasswordCorrect) {
            return res.json({
                message: "Неверный пароль!"
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
            token, user, message: "Авторизация прошла успена!"
        })

    } catch (error) {
        res.json({ message: "Ошибка при авторизации пользователя" })
    }
}