import './HomeSection.css';

import HomeSectionButton from './HomeSectionButton/HomeSectionButton';

export default function HomeSection() {
  return (
    <div className='home-section'>
      <h2 className='home-section__title'>Home</h2>
      <ul className='home-section__list'>
        <li className='home-section__list-item'>
          <HomeSectionButton type='allTasks' />
        </li>
        <li className='home-section__list-item'>
          <HomeSectionButton type='today' />
        </li>
        <li className='home-section__list-item'>
          <HomeSectionButton type='important' />
        </li>
      </ul>
    </div>
  );
}
