import React from "react";
import {connect} from "react-redux";
import {FlatList, Text} from "react-native";
import ListItem from "./list-item.js";

class LibraryList extends React.Component {

    renderItem({item}) {
        return <ListItem library={item}/>
    }

    render() {
        return (
            <FlatList
                data={this.props.libraries}
                renderItem={this.renderItem}
                keyExtractor={({id}) => id.toString()}
            />
        );
    }
};


const mapPropsToState = (state) => {
    return {libraries: state.libraries}
};

const styles = {
    listStyle: {
        fontSize: 21,
        padding: 5,
        paddingLeft: 5
    }
}

export default connect(mapPropsToState)(LibraryList);