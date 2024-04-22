import Pagination from 'react-bootstrap/Pagination';

export function MusicPagination(props) {
    
    let items = [];
    const pageCount = props.serviceData?.pageCount;

    // items.push(
    //     <Pagination.Item key="prev">
    //     {`<`}
    //     </Pagination.Item>
    // )

    for (let number = 1; number <= pageCount; number++) {
        items.push(
            <Pagination.Item key={number}>
            {number}
            </Pagination.Item>
        );
    }

    // items.push(
    //     <Pagination.Item key="next">
    //     {`>`}
    //     </Pagination.Item>
    // )

    const onClick = (e) => 
    { 
      e.pageNr = e.target.innerText - 1;
      props.onClick(e);
    }  
    
    return (
    <div className="container px-4 py-4">
        <Pagination onClick={onClick} >{items}</Pagination>
        <br />
    </div>
    );

}



