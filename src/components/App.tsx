/*
 * Firestarter.io
 *
 * Copyright (C) 2020 Blue Ohana, Inc.
 * All rights reserved.
 * The information in this software is subject to change without notice and
 * should not be construed as a commitment by Blue Ohana, Inc.
 *
 */

import React, { useState } from 'react';
import { bounds } from 'leaflet';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Map from './Map';
import UI from './UI';

const Wrapper = styled.div`
	height: 100%;
	width: 100%;
`;

export default function App() {
	const [map, setMap] = useState();

	return (
		<Wrapper>
			<GlobalStyles />
			<Map setMap={setMap} map={map} />
			{map && <UI map={map} />}
		</Wrapper>
	);
}
