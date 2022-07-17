// eslint-disable-next-line import/no-extraneous-dependencies
import { RouteComponentProps } from 'react-router';

export interface WithoRouterPropsInter extends RouteComponentProps<any> {
  [propsName: string]: any;
}
