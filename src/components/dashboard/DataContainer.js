import React from "react"
import InfiniteScroll from "react-infinite-scroll-component";

const DataContainer = () => {

    // console.log(props.active_data_type)

    // useEffect(() => {
    //    if (Object.keys(props.active_data_type).length === 0 && props.active_data_type.constructor === Object) {
    //        props.setDataType(1)
    //    }
    // })

    return(
        <div key={Date.now()} className="DataContainer">
                <InfiniteScroll
                className="infinite-scroll"
                dataLength={100}
                height={'100%'}
                loader={<h4>Loading...</h4>}
                >
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    <h1>Test</h1>
                    
             
                    {/* {props.query.length
                    ?
                    <FilteredDataDisplayer data={props.active_data_type} query={props.query} />
                    :
                    <DataDisplayer data={props.active_data_type} query={props.query} />} */}
                </InfiniteScroll>

                {/* <SearchContainer data={props.active_data_type} query={props.query} /> */}
                

            {/* <MetaDataContainer /> */}
        </div>
        
    )
}

export default DataContainer;