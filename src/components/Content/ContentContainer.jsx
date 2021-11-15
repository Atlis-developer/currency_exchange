import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Content } from './Content';
import { addCurrently } from '../../Redux/content-reducer'


const ContentContainer = (props) => {

    useEffect(() => {
        props.addCurrently();
    }, [])
    return <Content currently={props.currently}/>
}

let mapStateToProps = (state) => {
    return {
        currently: state.contentPage.currently,
    }
}

export default connect(mapStateToProps, { addCurrently })(ContentContainer)