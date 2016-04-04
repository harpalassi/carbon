// ====================//
// Imports and Exports //
// ====================//

// This file is for the following:
// 1. Export ES2015 classes as modules (used with base-elements and components)
//    - consume ES2015 modules from this file using import:
//    - import { Fab, FileUploader } from 'relative/path/to/bower/components';
// 2. Build an ES5-compatible files for prototyping.
//    See ./dist/dist-demo.html for details

// Polyfills
// -------------
import 'svgxuse';

// Base Elements & Components
// -------------
// - JavaScript classes for use with components and base-elements.
// - The following statements import classes from actual locations to
//   be consumed from this file instead of their actual locations.
import FabButton from '../components/fab/fab';
import FileUploader from '../base-elements/inputs/file/file';
import Tab from '../components/tabs-nav/tabs-nav';
import OverflowMenu from '../components/overflow-menu/overflow-menu';
import Modal from '../components/modals/modals';
import HeaderNav from '../components/header/header';
import Toolbars from '../components/toolbars/toolbars';
import Spinner from '../components/spinner/spinner';

const settings = {};

// Export all vars/classes for consumption:
export {
  settings,
  FabButton,
  FileUploader,
  Tab,
  OverflowMenu,
  Modal,
  HeaderNav,
  Toolbars,
  Spinner,
};

const init = () => {
  if (!settings.disableAutoInit) {
    FabButton.init();
    FileUploader.init();
    Tab.init();
    OverflowMenu.init();
    Modal.init();
    HeaderNav.init();
    Toolbars.init();
    Spinner.init();
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOMContentLoaded has been fired already
  // Let consumer have chance to see if it wants automatic instantiation disabled, and then run automatic instantiation otherwise
  setTimeout(init, 0);
}