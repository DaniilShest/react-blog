import User from "../../Models/User.js"
import bcrypt from "bcryptjs"

export const registrer = async (req, res) => {
    try {
        const { username, password } = req.body
        const isUsed = await User.findOne({ username })

        if (isUsed) {
            return res.json({
                message: "Пользователь с таким именем уже существует уже существует!"
            })
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        const newUser = new User({
            username,
            password: hash
        })

        await newUser.save()

        res.json({
            message: "Регитсрация прошла успешна"
        })

    } catch (error) {
        res.json({ message: "Ошибка при регистрации пользователя" })
    }
}