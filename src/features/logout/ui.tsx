import { useAppDispatch } from 'src/app/store';

import { removeUser } from 'src/entities/user';

export const Logout = () => {
    const dispatch = useAppDispatch();
    return <button onClick={() => dispatch(removeUser())}>Выйти</button>;
};
