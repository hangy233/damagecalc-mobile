import { h } from 'preact';
import { connect } from 'preact-redux'
import style from './style';
import Dialog from '../dialog';
import { toggleSetting } from '../../action_creators';
import { Settings } from '../../constants';

const Drawer = ({toggleDrawer, opened}) => {
  if (!opened) {
    return null;
  }

  const links = [
    {url: 'https://pokemonshowdown.com/', description: 'home'},
    {url: 'https://dex.pokemonshowdown.com/', description: 'Pokédex'},
    {url: 'https://replay.pokemonshowdown.com/', description: 'Replays'},
    {url: 'https://pokemonshowdown.com/ladder/', description: 'Ladder'},
    {url: 'https://www.smogon.com/forums/', description: 'Forum'},
    {url: 'https://play.pokemonshowdown.com/', description: 'Play'}
  ];

  return (
    <Dialog position="LEFT" onClickOut={toggleDrawer}>
      <nav class={style.drawer}>
        {
          links.map(link => (
            <div>
              <a class={style.drawerAnchor} href={link.url} target="_blank">{link.description}</a>
            </div>
          ))
        }
      </nav>
    </Dialog>
  );
};

const mapStateToProps = state => ({
  opened: state.settings[Settings.DRAWER]
});
const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleSetting(Settings.DRAWER))
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
