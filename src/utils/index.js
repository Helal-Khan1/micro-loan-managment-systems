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
