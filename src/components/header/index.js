import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style';
import { connect } from 'preact-redux'
import { toggleSetting } from '../../action_creators';
import { Settings } from '../../constants';

const Header = ({toggleDrawer}) => (
	<header class={style.header}>
		<h1>Pok&eacute;mon Damage Calculator</h1>
		<nav>
			<span onClick={toggleDrawer}>-</span>
			<Link activeClassName={style.active} href="/">One Vs One</Link>
			<Link activeClassName={style.active} href="/oneVsAll">One Vs All</Link>
			<Link activeClassName={style.active} href="/allVsOne">All Vs One</Link>
		</nav>
	</header>
);

const mapDispatchToProps = dispatch => ({
	toggleDrawer: () => dispatch(toggleSetting(Settings.DRAWER))
})

export default connect(null, mapDispatchToProps)(Header);
