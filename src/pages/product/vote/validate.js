const validate = values => {
    const errors = {};
    const { info, cmt } = values;
    if (!info) {
        errors.info = 'Vui lòng nhập tên';
    } else if (info.trim() && info.length < 1) {
        errors.info = 'Tên phải từ 8 ký tự trở lên';
    }

    if (!cmt) {
        errors.cmt = 'Vui lòng nhập bình luận';
    } else if (cmt.trim() && cmt.length < 3) {
        errors.cmt = 'Bình luận phải từ 16 ký tự trở lên';
    }
    return errors;
};

export default validate;