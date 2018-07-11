/* @flow */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import ShallowRenderer from 'react-test-renderer/shallow';

class ArrowFunction extends Component {
    render = () => <Text>Hello</Text>
}

class NonArrowFunction extends Component {
    render() {
        return (
            <View>
                 <Text>Hello</Text>
            </View>
        )
    }
}

describe('with arrow function', () => {
    let renderer;
    const render = () => {
        if (! renderer) {
            renderer = new ShallowRenderer();
            renderer.render(<ArrowFunction />);
        }
        return renderer;
    };

    it('renders', () => {
        const rendered = render().getRenderOutput();
        expect(rendered).toBeTruthy();
    });
});

describe('with non arrow function', () => {
    let renderer;
    const render = () => {
        if (! renderer) {
            renderer = new ShallowRenderer();
            renderer.render(<NonArrowFunction />);
        }
        return renderer;
    };

    it('renders', () => {
        const rendered = render().getRenderOutput();
        expect(rendered).toBeTruthy();
    });
});
