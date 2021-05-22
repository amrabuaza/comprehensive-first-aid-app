import React from 'react';
import renderer from 'react-test-renderer';
import Text from '../text';

describe('<Text />', () => {
    test('Text should have required children', () => {
        const tree = renderer.create(<Text>{'test children'}</Text>).toJSON();
        expect(tree.children.length).toBeGreaterThan(0);
    });
});