import styled from 'styled-components';
import Tag from '../types/Tag';

type ArticleTagListProps = {
  tags: Tag[];
};

const TagLabel = styled.li`
  color: gray;

  &:not(:last-child) {
    margin-right: 0.5em;
    border-right: 2px solid gray;
    padding-right: 0.5em;
  }
`;

const StyledTagList = styled.ul`
  display: flex;
  margin: 1em 0em;
  padding: 0;
  & li {
    list-style: none;
  }
`;

const ArticleTagList: React.FC<ArticleTagListProps> = ({ tags }) => {
  let tagLabels: JSX.Element[] = [];
  for (const tag of tags) {
    tagLabels.push(<TagLabel>{tag}</TagLabel>);
  }
  return <StyledTagList>{tagLabels}</StyledTagList>;
};

export default ArticleTagList;
