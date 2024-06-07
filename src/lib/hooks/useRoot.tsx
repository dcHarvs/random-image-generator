import { useContext } from "react";
import { RootContext, RootContextType } from "../../RootProvider";

export const useRoot = () => useContext(RootContext) as RootContextType;
