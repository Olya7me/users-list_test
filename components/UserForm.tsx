import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { addUser } from "@/store/slices/userSlice";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import { contactType } from "@/types/users.types";
import { FC } from "react";

const UserForm: FC = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const users = useSelector((state: RootState) => state.users.users);

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        company: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        company: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
    });

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        Object.keys(formData).forEach((key) => {
            const value = formData[key as keyof typeof formData];

            if (typeof value === "string" && !value.trim()) {
                newErrors[key as keyof typeof formData] = "Обязательное поле";
                isValid = false;
            } else if (typeof value !== "string" && !value) {
                newErrors[key as keyof typeof formData] = "Обязательное поле";
                isValid = false;
            } else {
                newErrors[key as keyof typeof formData] = "";
            }
        });

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Введите корректный email";
            isValid = false;
        }

        const phoneRegex =
            /^[+]?[0-9]{1,4}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}[-\s]?[0-9]{1,4}$/;
        if (formData.phone && !phoneRegex.test(formData.phone)) {
            newErrors.phone = "Введите корректный номер телефона";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        const newUser: contactType = {
            id: users.length + 1,
            name: formData.name,
            username: formData.username,
            email: formData.email,
            phone: formData.phone,
            website: formData.website,
            company: { name: formData.company || "" },
            address: {
                street: formData.street || "",
                suite: formData.suite || "",
                city: formData.city || "",
                zipcode: formData.zipcode || "",
            },
            liked: false,
        };

        dispatch(addUser(newUser));
        router.push("/users");
    };

    return (
        <div className="max-w-lg mx-auto p-5 border rounded-lg shadow-lg md:max-w-sm">
            <h2 className="text-2xl font-bold text-center mb-5 sm_xl:text-lg md:text-lg">
                Создать пользователя
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key}>
                        <Input
                            type="text"
                            name={key}
                            placeholder={`${
                                key[0].toUpperCase() + key.slice(1)
                            } *`}
                            value={formData[key as keyof typeof formData]}
                            onChange={handleChange}
                            className="w-full"
                        />
                        {errors[key as keyof typeof formData] && (
                            <p className="text-red-500 text-sm">
                                {errors[key as keyof typeof formData]}
                            </p>
                        )}
                    </div>
                ))}
                <div className="flex justify-center">
                    <Button
                        type="submit"
                        className="w-40 font-bold text-lg md:w-30 md:text-sm sm_xl:text-sm sm_xl:w-25 sm_xl:h-8"
                    >
                        Создать
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default UserForm;
