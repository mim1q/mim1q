import styled from 'styled-components';
import ArticleTagList from './ArticleTagList';

type ProjectArticleProps = {
  children: JSX.Element;
};

const StyledArticle = styled.article`
  border-radius: 1em;
  margin: 1em;
  padding: 2em;
  background-color: #222;
`;

const ArticleTitle = styled.h2`
  margin: 0;
`;

const ProjectArticle: React.FC<ProjectArticleProps> = ({ children }) => {
  return (
    <StyledArticle>
      <ArticleTitle>Title</ArticleTitle>
      <ArticleTagList tags={['school', 'personal']}></ArticleTagList>
      {children}
    </StyledArticle>
  );
};

export default ProjectArticle;
