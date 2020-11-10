import React from 'react';
import PropTypes from 'prop-types'

const Header = ({Title}) => {
	return ( 
		<nav>
			<div className="nav-wrapper teal darken-2">
				<a href="#!" className="brand-logo">{Title}</a>
			</div>
		</nav>
	 );
}
Header.propTypes = {
	Title: PropTypes.string.isRequired
}
export default Header;