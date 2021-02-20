import { getTemplate } from 'codesandbox-import-utils/lib/create-sandbox/templates';
import getDefinition from '@codesandbox/common/lib/templates/index';
import compile, { getCurrentManager } from './compile';

window.compile = compile;
window.getCurrentManager = getCurrentManager;
window.getTemplate = getTemplate;
window.getTemplateDefinition = getDefinition;
