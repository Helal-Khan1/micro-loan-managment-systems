import axios from "axios";

export const imageUploade = async (imageData) => {
  const formDAta = new FormData();

  formDAta.append("image", imageData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMBB_KEY}`,
    formDAta
  );
  return data?.data?.display_url;
};

export const userSave = async (userdata) => {
  const res = await axios.post(
    `${import.meta.env.VITE_HOST_URL}/users`,
    userdata
  );
  return res.data;
};

import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "winter" ? "dark" : "winter"));
  };

  return { theme, toggleTheme };
}
