import { numberFormat } from 'contants/NumberFormat';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemCart } from 'redux/actions/cart';

function ProductCart(props) {
    const dispatch = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteItemCart(id))
    }

    return (
        <div className="info">
            <div className='d-flex justify-content-between align-items-start'>
                <div className="col-md-2 p-0">
                    <img className="w-100 rounded" src={props.img} alt={props.name} />
                </div>

                <div className="col-md-6 mt-1 pl-2 p-0 content">
                    <small>{props.name}</small>
                    <div className='text-muted small mt-3'>Trả góp 0% - Tặng phụ kiện - Voucher 5% </div>
                </div>

                <div className="col-md-4 p-0 price">
                    <div className="p-0 price__num">
                        <h6 className='small text-danger m-0'>{numberFormat(props.price)}</h6>
                        <span className='small m-0'> x{props.count}</span>
                    </div>
                    <div onClick={() => handleDelete(props.id)} className="btnDelProd text-danger small mt-2">Xóa</div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default ProductCart;