import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Content } from './Content';
import { addCurrently } from '../../Redux/content-reducer'


const ContentContainer = (props) => {

    useEffect(() => {
        props.addCurrently();
    }, [])

    return <div>
        {props.isFetching ? <Content currently={props.currently}/> : null}
    </div>
}

let mapStateToProps = (state) => {
    return {
        currently: state.contentPage.currently,
        base_cur: state.contentPage.base_cur,
        isFetching: state.contentPage.isFetching
    }
}

export default connect(mapStateToProps, { addCurrently })(ContentContainer)