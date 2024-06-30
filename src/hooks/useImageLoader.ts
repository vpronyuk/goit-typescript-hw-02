import { useState, useEffect } from "react";
import fetchImg from "../services/fetch";

interface ImageData {
  id: number;
  webformatURL: string;
  tags: string;
  largeImageURL: string;
}

interface FetchImagesResponse {
  hits: ImageData[];
  totalHits: number;
}

const useImageLoader = (userQuery: string, page: number) => {
  const [requestedImg, setRequestedImg] = useState<ImageData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowButton, setIsShowButton] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();
    async function loadImages() {
      setIsLoading(true);

      try {
        const imagesData = await fetchImg(userQuery, page, controller);
        const typedImagesData: FetchImagesResponse =
          imagesData as FetchImagesResponse;

        if (
          !imagesData ||
          !Array.isArray(imagesData.hits) ||
          imagesData.hits.length === 0
        ) {
          throw new Error("No data from server!");
        }

        setRequestedImg((prevState) => [...prevState, ...typedImagesData.hits]);
        setIsShowButton(page < Math.ceil(typedImagesData.totalHits / 12));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (userQuery.trim() !== "") {
      loadImages();
    }

    return () => {
      controller.abort();
    };
  }, [userQuery, page]);

  return { requestedImg, setRequestedImg, isLoading, isShowButton };
};

export default useImageLoader;
