import { AuthContext } from 'components/Account/Context/AuthContext';
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { checkExisted } from 'redux/actions/account';
import { ButtonSubmit, ErrorNumber, InputPhone } from './styles';

function LogIn() {
    const { setNumber } = useContext(AuthContext)
    const dispatch = useDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleNumberSubmit = (e) => {
        setNumber(e.number)
        dispatch(checkExisted.checkExistedRequest({ phoneNumber: e.number }))
    }
    return (
        <>
            <h4>Xin chào,</h4>
            <div className="form-group">
                <label>Đăng nhập hoặc Tạo tài khoản</label>
                <form onSubmit={handleSubmit(handleNumberSubmit)}>
                    <InputPhone className='mt-4'
                        borderBottom={Object.keys(errors).length === 0}
                        {...register('number', {
                            required: 'Không để trống trường này',
                            pattern: {
                                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                                message: 'Số điện thoại không đúng định dạng.'
                            },

                        })}
                    />
                    <ErrorNumber className='mb-4 mt-2'>{errors.number?.message}</ErrorNumber>
                    <ButtonSubmit type="submit"
                        disabled={Object.keys(errors).length !== 0}
                        className="btn btn-danger mt-3 btn-smd btn-block"
                    >Tiếp tục</ButtonSubmit>
                </form>
                <div className="text-center small mt-2 mb-5"><a className="text-center">Đăng nhập bằng email</a></div>
                <div className="text-center mb-3 small">Hoặc Tiếp tục bằng</div>

                <div className="row justify-content-center">
                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/3a/22/45/0f04dc6e4ed55fa62dcb305fd337db6c.png" alt="facebook" /></a>
                    </div>

                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/1c/ac/e8/141c68302262747f5988df2aae7eb161.png" alt="gg" /></a>
                    </div>
                    <div className="col-md-2 col-3">
                        <a><img className="w-75" src="https://salt.tikicdn.com/ts/upload/98/37/86/517cfc05f04466b3118357a1fb4182c8.png" alt="zalo" /></a>
                    </div>
                    <div className="small mt-2 m-3">Bằng việc tiếp tục, bạn đã chấp nhận <a className="text-primary">điều khoản sử dụng</a> </div>
                </div>
            </div>
        </>
    );
}

export default React.memo(LogIn);