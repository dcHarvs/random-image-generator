import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ImageType } from "./lib/types/image";

export type RootContextType = {
  images: ImageType[];
  setImages: Dispatch<SetStateAction<ImageType[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  toDelete: ImageType["id"];
  setToDelete: Dispatch<SetStateAction<ImageType["id"]>>;
};

export const RootContext = createContext<RootContextType | null>(null);

export default function RootProvider({ children }: { children: ReactNode }) {
  const [images, setImages] = useState<ImageType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [toDelete, setToDelete] = useState<ImageType["id"]>("");

  return (
    <RootContext.Provider
      value={{
        images,
        setImages,
        isLoading,
        setIsLoading,
        toDelete,
        setToDelete,
      }}
    >
      {children}
    </RootContext.Provider>
  );
}
