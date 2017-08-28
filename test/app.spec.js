import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';

import App from './../client/components/App/index';
import NotesGrid from './../client/components/NotesGrid/NotesGrid';

describe('', () => {
    it('contain in component', function () {
        const wrapper = mount();
        expect(wrapper.find(NotesGrid)).to.have.length(1);
    });
});
