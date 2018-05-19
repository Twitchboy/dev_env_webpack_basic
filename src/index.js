import './css/normalize.css'
import './css/index.less';

import format from 'utils/format';
import log from 'log';

log(format('Resolve alias - 精准匹配～'));

~function(){
    const div = document.createElement('div');
    div.setAttribute('class', 'div_img');

    document.querySelector('body').appendChild(div);
}()
