import './HomeSectionButton.css';

const buttonIcons = {
  'allTasks': <svg className='home-section__open-section-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z' /></svg>,
  'today': <svg className='home-section__open-section-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' ><path d='M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7' /></svg>,
  'important': <svg className='home-section__open-section-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M11 16H13V18H11V16M11 10H13V14H11V10M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M19 5V7H5V5H19M5 19V9H19V19H5Z' /></svg>
};

function getTitleFromType(type) {
  const result = type.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export default function HomeSectionButton({ type, setContentId }) {
  const title = getTitleFromType(type);

  return (
    <button className='home-section__open-section-btn' type='button' onClick={setContentId}>
      {buttonIcons[type]}
      {title}
    </button>
  );
}
