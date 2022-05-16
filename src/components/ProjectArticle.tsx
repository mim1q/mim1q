type ProjectArticleProps = {
  children: JSX.Element;
};

const ProjectArticle: React.FC<ProjectArticleProps> = ({ children }) => {
  return <article>{children}</article>;
};

export default ProjectArticle;
