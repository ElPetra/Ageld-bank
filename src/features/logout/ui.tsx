import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/app/store/dispatch';
import { removeUser } from 'src/app/store/slices/userSlice';
import { RouteName } from 'src/shared/model';

export const Logout = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return (
        <button
            onClick={() => {
                dispatch(removeUser());
                navigate(RouteName.MAIN_PAGE);
            }}
        >
            Выйти
        </button>
    );
};
