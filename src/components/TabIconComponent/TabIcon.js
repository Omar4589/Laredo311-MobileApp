import React from 'react';

// Generic Icon Component used in Bottom Tabs tab options
const TabIcon = ({name, library, color, size}) => {
  const IconComponent = library;
  return <IconComponent name={name} size={size} color={color} />;
};

export default TabIcon;
