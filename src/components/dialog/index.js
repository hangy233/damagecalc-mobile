import {h} from 'preact';
import style from './style';

const Dialog = ({position, children, onClickOut}) => {
  let dialogClass = style.dialogCenter;

  switch (position) {
    case 'LEFT':
      dialogClass = style.dialogLeft;

      break;
    case 'RIGHT':
      dialogClass = style.dialogRight;

      break;
  }

  return (
    <div class={style.dialogContainer} onClick={onClickOut}>
      <div class={dialogClass} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
