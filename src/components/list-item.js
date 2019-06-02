import React, {Component} from "react";
import {Text} from "react-native";
import {CardSection} from "./common"

class ListItem extends Component {

    render() {
        const {library} = this.props;

        return <CardSection>
            <Text style={styles.listStyle}>{library.title}</Text>
        </CardSection>
    }
}

const styles = {
    listStyle: {
        fontSize: 21,
        paddingLeft: 15
    }
};


export default ListItem;