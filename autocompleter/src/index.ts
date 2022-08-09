import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the autocompleter extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'autocompleter:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension autocompleter is activated!');
  }
};

export default plugin;
