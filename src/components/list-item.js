import React, {Component} from "react";
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager} from "react-native";
import {CardSection} from "./common";
import * as actions from "../actions";
import {connect} from "react-redux";

class ListItem extends Component {

    constructor(props) {
        super(props);

        if (UIManager) {
            return UIManager.setLayoutAnimationEnabledExperimental
                && UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    };

    renderDescription = () => {
        const {library, expanded} = this.props;

        if (expanded) {
            return <CardSection>
                <Text style={styles.descriptionStyle}>{library.description}</Text>
            </CardSection>
        }
    };

    render() {
        const {library} = this.props;
        const {id, title} = library;

        return <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
            <View>
                <CardSection>
                    <Text style={styles.listStyle}>{title}</Text>
                </CardSection>
                {this.renderDescription()}
            </View>
        </TouchableWithoutFeedback>
    }
}

const styles = {
    listStyle: {
        fontSize: 21,
        paddingLeft: 15
    }, descriptionStyle: {
        fontSize: 16,
        paddingLeft: 25,
        paddingRight: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded}
};

export default connect(mapStateToProps, actions)(ListItem);