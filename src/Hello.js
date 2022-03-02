import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}
// porps가 없을 수 있는 상황을 대비
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;
