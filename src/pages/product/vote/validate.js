const validate = values => {
    const errors = {};
    const { name, comment } = values;
    if (!name) {
        errors.name = 'Vui lòng nhập tên';
    } else if (name.trim() && name.length < 1) {
        errors.name = 'Tên phải từ 8 ký tự trở lên';
    }

    if (!comment) {
        errors.comment = 'Vui lòng nhập bình luận';
    } else if (comment.trim() && comment.length < 1) {
        errors.comment = 'Bình luận phải từ 16 ký tự trở lên';
    }
    return errors;
};

export default validate;