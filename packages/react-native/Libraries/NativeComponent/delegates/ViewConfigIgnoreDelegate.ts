/**
 * @format
 */
import {BaseViewConfigIgnoreDelegate} from './BaseViewConfigIgnoreDelegate';

export default class ViewConfigIgnoreDelegate extends BaseViewConfigIgnoreDelegate {
  conditionallyIgnoredEventHandlers<T>(value: T): T | undefined {
    return undefined;
  }
}
