import React from 'react';
import renderer from 'react-test-renderer';
import Hedaer from '../header';

describe('<Hedaer />', () => {

    test('Hedaer should  match sanpshot test ', () => {
        const tree = renderer.create(<Hedaer />).toJSON()
        expect(tree).toMatchSnapshot();
    });
});