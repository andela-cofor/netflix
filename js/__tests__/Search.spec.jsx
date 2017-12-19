// react library
import React from 'react';

// third-party library
import { shallow } from 'enzyme';

// components
import Search from '../Search'
import ShowCard from '../ShowCard';

// mock
import preload from '../../data.json';

// describe('Search', () => {
//
// })

test('Search renders correctlu',  () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render correct amount of shows', () => {
  const component = shallow(<Search />);
  expect(component.find(ShowCard).length).toEqual(preload.shows.length);
});

test('Search should render correct amount of shows based on the search term', () => {
  const searchWord = 'black';
  const component = shallow(<Search />);
  component.find('input').simulate('change', { target: { value: searchWord } }
  )
  const showCount = preload.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase()
    .indexOf(searchWord.toUpperCase()) >= 0
  ).length;
  expect(component.find(ShowCard).length).toEqual(showCount);
})
