import './HomeSection.css';

import HomeSectionButton from './HomeSectionButton/HomeSectionButton';

export default function HomeSection({ setContentId, contentId }) {
  function setAllTasks() {
    setContentId(0);
  }

  function setImportantTasks() {
    setContentId(1);
  }

  function setTodayTasks() {
    setContentId(2);
  }

  return (
    <div className='home-section'>
      <h2 className='home-section__title'>Home</h2>
      <ul className='home-section__list'>
        <li
          className={
            contentId === 0
              ? 'home-section__list-item home-section__list-item--chosen'
              : 'home-section__list-item'
          }
        >
          <HomeSectionButton id={0} type='allTasks' setContentId={setAllTasks} contentId={contentId} />
        </li>
        <li
          className={
            contentId === 2
              ? 'home-section__list-item home-section__list-item--chosen'
              : 'home-section__list-item'
          }
        >
          <HomeSectionButton id={2} type='today' setContentId={setTodayTasks} contentId={contentId} />
        </li>
        <li
          className={
            contentId === 1
              ? 'home-section__list-item home-section__list-item--chosen'
              : 'home-section__list-item'
          }
        >
          <HomeSectionButton id={1} type='important' setContentId={setImportantTasks} contentId={contentId} />
        </li>
      </ul>
    </div>
  );
}
