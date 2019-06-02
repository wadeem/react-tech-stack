import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View} from "react-native";
import {CardSection} from "./common";
import * as actions from "../actions";
import {connect} from "react-redux";

class ListItem extends Component {

    render() {
        const {library} = this.props;
        const {id, title} = library;

        return <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={styles.listStyle}>{title}</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = {
    listStyle: {
        fontSize: 21,
        paddingLeft: 15
    }
};

const mapStateToProps = (state) => {
    return {selectedLibraryId: state.selectedLibraryId}
};

export default connect(mapStateToProps, actions)(ListItem);