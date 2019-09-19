import React, {Component, Fragment} from "react";

export default class FormatText extends Component {
    render() {
        return (
            <>
                {this.props.children.split('\n').map((text, index) => {
                    return (
                        <Fragment key={`text-${index}`}>
                            {text}{index !== this.props.children.length - 1 && <br/>}
                        </Fragment>
                    );
                })}
            </>
        );
    }
}
