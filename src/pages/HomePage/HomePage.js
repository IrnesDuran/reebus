import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import './HomePage.styles.scss';
import HomePageIcons from '../../components/HomePageIcons/HomePageIcons';

const HomePage = props => {
  return (
    <div className="content-container">
      <div className="overview-content">
        <h2>Project Overview</h2>
        <div>
          You have no saved projects, click{' '}
          <span
            className="create-project-link"
            onClick={() => props.history.push(`/building-data`)}
          >
            here
          </span>{' '}
          to create a new project.
        </div>
        <HomePageIcons history={props.history} />
      </div>

      <div className="navbuttons">
        <CustomButton onClick={() => props.history.push(`/building-data`)}>
          Create Project <span className="plusicon">+</span>
        </CustomButton>
      </div>
    </div>
  );
};

export default HomePage;
