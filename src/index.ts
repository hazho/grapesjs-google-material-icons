import IconPickerPopup from './IconPickerPopup';
import IconPickerPopupType from './IconPickerPopupType';
// import 'material-icons/iconfont/material-icons.css';
import './iconPicker.css';
import IEditor from './types/editor';

const plugin = (editor: IEditor, opts = {}) => {
  const materialIconsUrl = 'https://fonts.googleapis.com/icon?family=Material+Icons'

  editor.DomComponents.addType('materialIcons', {
    view: {
      events: {
        dblclick: 'onActive',
        // click: 'initResize',
        // error: 'onError',
        // load: 'onLoad',
        // dragstart: 'noDrag'
      },
      /**
       * Open dialog for image changing
       * @param  {Object}  e  Event
       * @private
       * */
      onActive(e: any) {
        console.log('e', e);
        editor.Commands.run('open:icon-picker')
        // const modal = document.getElementById('gjs-modal');
        // modal.style.display = 'block';
      },
    },
  });

  editor.BlockManager.add('materialIcon', {
    label: 'Material Icon',
    media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="none" d="M0 0h16v16H0z"/><path fill="#F29900" d="M13.5 2H8L1 13h5.5z"/><path fill="#1A73E8" d="M8 2h5v11H8z"/><circle fill="#EA4335" cx="3.25" cy="4.25" r="2.25"/><path fill="#0D652D" d="M13.33 10L13 13c-1.66 0-3-1.34-3-3s1.34-3 3-3l.33 3z"/><path fill="#174EA6" d="M10.5 4.5A2.5 2.5 0 0113 2l.45 2.5L13 7a2.5 2.5 0 01-2.5-2.5z"/><path fill="#1A73E8" d="M13 2a2.5 2.5 0 010 5"/><path fill="#34A853" d="M13 7c1.66 0 3 1.34 3 3s-1.34 3-3 3"/></svg>`,
    category: "Google Material Icon",
    content: `<span data-gjs-type="materialIcons" class="material-icons material-symbols-outlined">home</span>`,
  });


  // IconPickerPopup();
  IconPickerPopupType(editor);
};

export default plugin;