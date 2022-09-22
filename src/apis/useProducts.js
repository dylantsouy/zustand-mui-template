import { apiUrl, fetcher } from './apiSetup';
import useSWR from 'swr';

const useProducts = () => {
    const { data, error } = useSWR([`${apiUrl}/products`], fetcher);

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};

export default useProducts;
