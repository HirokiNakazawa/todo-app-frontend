import { useSetRecoilState } from "recoil";
import { categoryState } from "../recoil/UserState";
import { useApi } from "../hooks/useApi";

const useCategoryHandler = () => {
  const setCategories = useSetRecoilState(categoryState);
  const api = useApi();

  const updateCategories = async (userId) => {
    try {
      const response = await api.getUserCategories(userId);
      setCategories(response);
    } catch (error) {
      console.log(error);
    }
  };

  return { updateCategories };
};

export default useCategoryHandler;
