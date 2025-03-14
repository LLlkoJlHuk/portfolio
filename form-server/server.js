require("dotenv").config();
const express = require("express");
const { body, validationResult } = require("express-validator");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

app.post(
    "/send",
    [
        body("name").trim().notEmpty().withMessage("Name"),
        body("email").isEmail().withMessage("Email"),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array()[0].msg });
        }

        const { name, email, message } = req.body;

        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_OWNER,
                subject: "Новая заявка с сайта LLlkoJlHuk.ru",
                text: `Имя: ${name}\nEmail: ${email}\nСообщение: ${message}`,
            });

            res.json({ success: true, message: "Заявка успешно отправлена!" });
        } catch (error) {
            res.status(500).json({ error: "Не удалось отправить письмо" });
        }
    }
);

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
