import { useContext, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import dictionary from "@/constants/dictionary.jsx";
import SettingsContext from "@/context/settings.js";
import Human from "../../assets/images/human.svg";
import Arrow from "../../assets/images/arrow-black.svg";
import Email from "../../assets/images/email.svg";
import Message from "../../assets/images/message.svg";
import Loader from "../../assets/images/loading.gif";
import styles from "./index.module.css";

const RequestForm = () => {
    const settings = useContext(SettingsContext).settings;
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null);

    const validateStep = () => {
        let newErrors = {};

        if (step === 1 && !formData.name.trim()) {
            newErrors.name = dictionary.pageContactsFormInputNameError[settings.lang];
        }

        if (step === 2) {
            if (!formData.email.trim()) {
                newErrors.email = dictionary.pageContactsFormInputEmailError[settings.lang];
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = dictionary.pageContactsFormInputEmailError[settings.lang];
            }
        }

        // Добавляем проверку на капчу
        if (step === 3 && !captchaValue) {
            newErrors.captcha = dictionary.pageContactsFormCaptchaError[settings.lang];
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleNext = () => {
        if (validateStep()) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        let newErrors = {};
        setErrors(newErrors);
        setStep((prev) => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setLoading(true);
        setErrors({});

        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('message', formData.message);
        formDataToSend.append('captcha', captchaValue);

        try {
            const response = await fetch("/form/form.php", {
                method: "POST",
                body: formDataToSend,
            });

            const result = await response.text();
            if (result.includes("Application accepted")) {
                setSuccessMessage(dictionary.pageContactsFormSuccess[settings.lang]);
                setFormData({ name: "", email: "", message: "" });
                setIsSubmitted(true);
            } else {
                setErrors({ server: dictionary.pageContactsFormErrorSend[settings.lang] });
            }
        } catch (error) {
            setErrors({ server: dictionary.pageContactsFormErrorServer[settings.lang] });
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles["request-form"]}>
            {isSubmitted ? (
                <div className={styles["form--success"]}>
                    <p>{successMessage}</p>
                </div>
            ) : (
                <>
                    {step === 1 && (
                        <div className={styles["form--block"]}>
                            <div className={styles["form--input-block"]}>
                                <img src={Human} alt="human" />
                                <input
                                    type="text"
                                    value={formData.name}
                                    placeholder={dictionary.pageContactsFormInputName[settings.lang]}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleNext();
                                        }
                                    }}
                                />
                            </div>
                            <p className={styles["form--error"]}>
                                {errors.name && errors.name}
                            </p>
                            <div className={styles["form--buttons"]}>
                                <div className={`${styles["btn--back"]} ${styles["disabled"]}`}>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                                <div className={styles["btn--next"]} onClick={handleNext}>
                                    {dictionary.pageContactsFormBtnNext[settings.lang]}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className={styles["form--block"]}>
                            <div className={styles["form--input-block"]}>
                                <img src={Email} alt="email" />
                                <input
                                    type="text"
                                    value={formData.email}
                                    placeholder={dictionary.pageContactsFormInputEmail[settings.lang]}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleNext();
                                        }
                                    }}
                                />
                            </div>
                            <p className={styles["form--error"]}>
                                {errors.email && errors.email}
                            </p>
                            <div className={styles["form--buttons"]}>
                                <div className={styles["btn--back"]} onClick={handleBack}>
                                    <img src={Arrow} alt="arrow" />
                                </div>
                                <div className={styles["btn--next"]} onClick={handleNext}>
                                    {dictionary.pageContactsFormBtnNext[settings.lang]}
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        loading ? (
                            <div className={styles["form--loading"]}>
                                <img src={Loader} alt="loading" />
                                <p>{dictionary.pageContactsFormLoading[settings.lang]}</p>
                            </div>
                        ) : (
                            <div className={styles["form--block"]}>
                                <div className={styles["form--input-block"]}>
                                    <img src={Message} alt="message" />
                                    <input
                                        type="text"
                                        value={formData.message}
                                        placeholder={dictionary.pageContactsFormInputMessage[settings.lang]}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                e.preventDefault();
                                            }
                                        }}
                                    />
                                </div>

                                <p className={styles["form--error"]}>
                                    {errors.server && errors.server}
                                </p>

                                <div className={styles["form--captcha"]}>
                                    <ReCAPTCHA
                                        sitekey="6LemtvYqAAAAACucDXpry9_D42UfUKOZyULmffvP"
                                        onChange={handleCaptchaChange}
                                    />
                                    <p className={styles["form--error"]}>
                                        {errors.captcha && errors.captcha}
                                    </p>
                                </div>

                                <div className={styles["form--buttons"]}>
                                    <div className={styles["btn--back"]} onClick={handleBack}>
                                        <img src={Arrow} alt="arrow" />
                                    </div>
                                    <button type="submit" className={styles["btn--next"]} disabled={loading}>
                                        {loading ? <img src={Loader} alt="loading" /> : dictionary.pageContactsFormBtnSend[settings.lang]}
                                    </button>
                                </div>
                            </div>
                        )
                    )}
                </>
            )}
        </form>
    );
};

export default RequestForm;
