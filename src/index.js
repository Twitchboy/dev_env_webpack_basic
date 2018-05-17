import './css/index.less';

~function(){
    console.log('webpack');
    const div = document.createElement('div');
    div.setAttribute('class', 'div_img');

    document.querySelector('body').appendChild(div);
}()
