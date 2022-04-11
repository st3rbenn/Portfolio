import { createGlobalStyle } from "styled-components";

//fonts
import nunitoRegular from './nunitoRegular.woff'
import nunitoRegular2 from './nunitoRegular.woff2'
import nunitoBold from './nunitoBold.woff'
import nunitoBold2 from './nunitoBold.woff2'


export default createGlobalStyle`

@font-face {
  font-family: 'Nunito';
  font-weight: 300;
  font-style: normal;
  src: local(''),
        url('${nunitoRegular}'),
        url('${nunitoRegular2}');
}
@font-face {
  font-family: 'Nunito';
  font-weight: 800;
  font-style: normal;
  src: local(''),
        url('${nunitoBold}'),
        url('${nunitoBold2}');
}
`
