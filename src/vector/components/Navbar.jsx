import { NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-sm navbar-light bg-light">
			<div className="container-fluid">
				<NavLink className="navbar-brand" to="/">Vector Styles Test</NavLink>
				<div className="navbar-collapse">
          <div className="navbar-nav ms-auto">
						<NavLink  className="nav-item nav-link" to="/styles">Custom Styles</NavLink>
						<NavLink  className="nav-item nav-link" to="/options">Theme Options</NavLink>
					</div>
				</div>
			</div>
		</nav>
	)
}
