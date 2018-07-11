/* @flow */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

class Terms extends Component {
    // render = () => <Text>Hello</Text>

    render() {
        return (
            <View>
                 <Text>Hello</Text>
            </View>
        )
    }
}

describe('Terms', () => {
    let props;
    let renderer;
    const render = () => {
        if (! renderer) {
            renderer = new ShallowRenderer();
            renderer.render(<Terms {...props} />);
        }
        return renderer;
    };

    it('renders when terms ARE required', () => {
        const rendered = render().getRenderOutput();
        expect(rendered).toBeTruthy();
    });
});
