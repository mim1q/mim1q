import React from 'react';
import Header from './components/Header';
import ProjectArticle from './components/ProjectArticle';
import Text from './components/common/Text';

const App = () => {
  return (
    <div>
      <Header />
      <ProjectArticle>
        <Text>test 123</Text>
      </ProjectArticle>
    </div>
  );
};

export default App;
