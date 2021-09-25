import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'redux/actions/account';
import { useForm } from "react-hook-form";
import { ErrorPassword, InputPassword } from './styles';
import { AuthContext } from 'components/Account/Context/AuthContext';
import { ButtonSubmit } from '../LogIn/styles';

function Accounted() {
    const { setLogin, number, setAlert, setKeyRandom } = useContext(AuthContext)
    const user = useSelector(state => state.account)
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm()
    useEffect(() => {
        if (user.dataLogin) {
            setAlert(true)
        }
    }, [user.dataLogin, setAlert])

    const handlePassword = (e) => {
        dispatch(loginUser.loginUserRequest({ phoneNumber: number, password: e.password }))
        setKeyRandom(Math.ceil(Math.random() * 1000000).toFixed(0))
    }
    const handlePre = () => {
        user.existed.existed ? setLogin('login') : setLogin('addAccount')
    }
    return (
        <>
            <i className="fa fa-angle-left mb-4"
                style={{
                    fontSize: "50px",
                    color: '#ccc',
                    cursor: 'pointer'
                }}
                onClick={() => handlePre()}
            ></i>
            <h3 className="mt-8">Nhập mật khẩu</h3>
            <form className="form-group" onSubmit={handleSubmit(handlePassword)}>
                <label>Vui lòng nhập mật khẩu Tiki của số điện thoại <span style={{ fontWeight: 'bold' }}>{number}</span></label>
                <InputPassword className='mt-4'
                    borderBottom={Object.keys(errors).legnth === 0}
                    {...register('password', {
                        required: 'Không để trống mật khẩu.',
                        pattern: {
                            value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                            message: 'Mật khẩu không hợp lệ.'
                        }
                    })}
                />
                <ErrorPassword className='mt-2'>{errors.password?.message}</ErrorPassword>
                <ButtonSubmit type="submit"
                    className="btn btn-danger mt-3 btn-smd btn-block"
                    style={{ background: "rgb(255, 66, 78", outline: 'none', fontSize: '20px' }}
                >Đăng nhập</ButtonSubmit>
            </form>
            <div className='mt-2' style={{ fontSize: '13px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}>Quên mật khẩu</span>
                <span style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}>Đăng nhập bằng SMS</span>
            </div>
        </>
    );
}

export default Accounted;