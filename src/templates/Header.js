const Header = () => {
	const home = location.href;
	const view = `
    <div class="Header-main">
      <div class="Header-logo">
        <h1>
          <a href="${home}">
            100tifi.co
          </a>
        </h1>
      </div>
      <div class="Header-nav">
        <a href="#/about">
          about
        </a>
      </div>
    </div>  
  `;
	return view;
};

export default Header;
