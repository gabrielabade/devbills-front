import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

import { APIService } from '../services/api';
import { Category } from '../services/api-types';
import { CeateCategoryData } from '../validators/types';

interface FetchApiProps {
  createCategory: (data: CeateCategoryData) => Promise<void>;
  fetchCategories: () => Promise<void>;
  categories: Category[];
}

const FetchAPIContext = createContext<FetchApiProps>({} as FetchApiProps);

type FetchAPIProviderProps = {
  children: ReactNode;
};

export function FetchAPIProvider({ children }: FetchAPIProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  const createCategory = useCallback(async (data: CeateCategoryData) => {
    await APIService.createCategory(data);
  }, []);

  const fetchCategories = useCallback(async () => {
    const data = await APIService.getCategories();

    setCategories(data);
  }, []);

  return (
    <FetchAPIContext.Provider
      value={{ categories, createCategory, fetchCategories }}
    >
      {children}
    </FetchAPIContext.Provider>
  );
}

export function useFetchAPI(): FetchApiProps {
  return useContext(FetchAPIContext);
}
