import axiosClient from "../lib/api";
import { v4 } from "uuid";
import { ImageResponseType } from "../lib/types/image";

export const getRandomImage = async (): Promise<ImageResponseType> => {
  try {
    const { request } = await axiosClient("/360/256.jpg");

    return {
      data: {
        id: v4(),
        imageSrc: request.responseURL,
      },
    };
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong." };
  }
};
