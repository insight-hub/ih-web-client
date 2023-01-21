import { connect } from 'react-redux';

import { RootState } from 'src/store';

import { UserAvatar } from './UserAvatar';

const mapStateToProps = (state: RootState) => {
  const { profileReducer } = state;
  const userName = profileReducer.userName.match(/\b(\w)/g)?.join('');

  return {
    userName,
    avatarSrc: '',
  };
};

export default connect(mapStateToProps)(UserAvatar);
