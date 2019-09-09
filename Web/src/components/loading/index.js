import React from 'react';

import LoadingIcon from '../../images/pizza.png';

import { Spinner } from './styles';

const Loading = () => <Spinner src={LoadingIcon} style={{ width: 30, height: 30 }} alt="Carregando" />;

export default Loading;
