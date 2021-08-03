import React from "react";
const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item small">
        <a href={link.url} target="_blank" rel="noopener noreferrer" className="link-list-item-url" > {link.text} </a>
    </li>
  ));

  return <> 
            <ol className="link-list pl-3 pt-2 p-0"> {linkMarkup} </ol>
            <div className="text-success small" style={{display: 'flex', gap:"10px"}}> 
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamqeMGnnA4lgq1sivMRjeKWMKNw9idfElqg&usqp=CAU" alt="" style={{width: '15%', height:'20%' }} />
                Để biết thêm chi tiết, Anh (chị) có thể nhập: "hello", "hdmh", "dmm"... 
            </div>
        </>;
};

export default LinkList;