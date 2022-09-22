import { fetcher } from './apiSetup';

export const loginApi = async ({ account, password }) => {
    const { data, error } = await fetcher('/api/Login', 'POST', {
        account,
        password,
    });

    return {
        data: data,
        isLoading: !error && !data,
        isError: error,
    };
};
