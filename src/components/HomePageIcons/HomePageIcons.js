import React from 'react';
import './HomePageIcons.styles.scss';
import ImageIcon from '../../iconComponents/ImageIcon/ImageIcon';
import FileIcon from '../../iconComponents/FileIcon/FileIcon';
import FolderIcon from '../../iconComponents/FolderIcon/FolderIcon';
import Colors from '../../constants/Colors';

const HomePageIcons = props => {
  return (
    <div className="homepage-icons-container">
      <ImageIcon fill={Colors.disabled} />
      <FileIcon fill={Colors.disabled} />
      <FolderIcon
        fill={Colors.dark}
        onClick={() => props.history.push(`/building-data`)}
        className={'active'} //currently only one active, first 2 might be "activated" in later project phases
      />
    </div>
  );
};

export default HomePageIcons;
