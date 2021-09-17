import React, { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/actions/account';
import { useForm } from "react-hook-form";
import { AuthContext } from 'components/Account/Context/AuthContext';
import { ErrorAccount, FormPassword, InputAccount } from './styles';
import { ButtonSubmit } from '../LogIn/styles';

function AddAccount() {
    const { number, setLogin, account, setAccount } = useContext(AuthContext)
    const [hidden, setHidden] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const handleFormAccount = (e) => {
        setAccount({ name: e.name, password: e.password })
        dispatch(registerUser.registerUserRequest({ phoneNumber: number, username: e.name, password: e.password }))
        setLogin('accounted')
    }
    return (
        <>
            <i className="fa fa-angle-left mb-4"
                style={{
                    fontSize: "50px",
                    color: '#ccc',
                    cursor: 'pointer'
                }}
                onClick={() => (setLogin('verify'))}
            ></i>
            <h3 className="mb-4">Tạo tài khoản</h3>
            <form className="form-group" onSubmit={handleSubmit(handleFormAccount)}>
                <label className='mb-3'>Vui lòng cho biết tên bạn</label>
                <InputAccount className='mb-2'
                    borderBottom={Object.keys(errors).includes('name')}
                    type="text"
                    defaultValue={account.name ? account.name : ''}
                    placeholder="Tên bạn"
                    {...register('name', {
                        required: 'Không để trống tên',
                        pattern: {
                            value: /^[a-zA-Z_-| |]{3,16}$/igm,
                            message: 'Tên phải chứa ít nhất 3 chữ, không chứa số và ký tự đặc biệt'
                        }
                    })}
                />
                <ErrorAccount>{errors.name?.message}</ErrorAccount>
                <label className='mb-3 mt-4'>Đặt mật khẩu</label>
                <FormPassword
                    borderBottom={Object.keys(errors).includes('password')}
                >
                    <InputAccount className='border-0'
                        type={hidden ? "text" : 'password'}
                        defaultValue={account.password ? account.password : ''}
                        placeholder="Mật khẩu"
                        {...register('password', {
                            required: 'Không để trống mật khẩu.',
                            pattern: {
                                value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                                message: 'Mật khẩu dài từ 8 đến 32 ký tự, bao gồm số và chữ.'
                            }
                        })}
                    />
                    <small style={{ color: 'rgb(11, 116, 229)', cursor: 'pointer' }}
                        onClick={() => setHidden(!hidden)}
                    >{hidden ? 'Ẩn' : 'Hiện'}</small>
                </FormPassword>
                <ErrorAccount className='mt-2'>{errors.password?.message}</ErrorAccount>
                <ButtonSubmit type="submit"
                    disabled={Object.keys(errors).length !== 0}
                    className="btn btn-danger mt-3 btn-smd btn-block"
                >Tạo tài khoản</ButtonSubmit>
            </form>
        </>
    );
}

export default AddAccount;