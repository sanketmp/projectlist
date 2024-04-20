import "./Header.css";

const Header = () => {
  return (
    <header className="heading">
      <span className="headline">top projects</span>
      <span className="by">
        by
        <a href="https://github.com/sanketmp" target="_blank">
          <img
            className="profilepic"
            src="https://avatars.githubusercontent.com/u/68698332?v=4"
            alt="ProfilePic"
          />
        </a>
      </span>
    </header>
  );
};

export default Header;
