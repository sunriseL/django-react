import React, {Component} from 'react';
import store from '../../store';
export default class UserProfile extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                你好，{store.getState().username}
            </div>
        )
    }
}
