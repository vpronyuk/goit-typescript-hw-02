// import axios from "axios";

// const fetchImg = async (userQuery, page, controller) => {
//   const params = {
//     key: "33618284-b943b6a3bf9edd3f9e88f078b",
//     q: userQuery,
//     image_type: "photo",
//     orientation: "horizontal",
//     page,
//     per_page: 12,
//   };

//   try {
//     const response = await axios.get("https://pixabay.com/api/", {
//       params,
//       signal: controller.signal,
//     });
//     return response.data;
//   } catch (error) {
//     if (controller.signal.aborted) {
//       console.log("Fetch aborted");
//     } else console.error(error);
//     return [];
//   }
// };

// export default fetchImg;

import axios, { AxiosResponse } from "axios";

interface Hit {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  webformatURL: string;
  largeImageURL: string;
}

interface ImageResponse {
  total: number;
  totalHits: number;
  hits: Hit[];
}

const fetchImg = async (
  userQuery: string,
  page: number,
  controller: AbortController
): Promise<ImageResponse> => {
  const params = {
    key: "33618284-b943b6a3bf9edd3f9e88f078b",
    q: userQuery,
    image_type: "photo",
    orientation: "horizontal",
    page,
    per_page: 12,
  };

  try {
    const response: AxiosResponse<ImageResponse> = await axios.get(
      "https://pixabay.com/api/",
      {
        params,
        signal: controller.signal,
      }
    );

    if (
      !response.data ||
      !Array.isArray(response.data.hits) ||
      typeof response.data.totalHits !== "number"
    ) {
      throw new Error("Invalid data format from server");
    }
    return response.data;
  } catch (error) {
    if (controller.signal.aborted) {
      console.log("Fetch aborted");
    } else console.error(error);
    throw error;
  }
};

export default fetchImg;
// export type { Hit, ImageResponse };
