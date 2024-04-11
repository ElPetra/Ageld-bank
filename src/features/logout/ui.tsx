import { useAppDispatch } from 'src/app/store/dispatch';
import { removeUser } from 'src/app/store/slices/userSlice';

export const Logout = () => {
    const dispatch = useAppDispatch();
    return <button onClick={() => dispatch(removeUser())}>Выйти</button>;
};
