const Header = () => {
  return (
    <>
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex justify-content-between">
          <a
            href="/"
            className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none"
          >
            TODOリスト
          </a>
          <div className="text-end">
            <button type="button" className="btn btn-light text-dark me-2">
              ログイン
            </button>
            <button type="button" className="btn btn-primary">
              新規登録
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
