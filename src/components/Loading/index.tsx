import React from 'react'
import { BounceLoader } from 'react-spinners'

import { override, divLoading } from './styles'
import { IProps } from './types'

export default function Loading(props: IProps): JSX.Element {
	const { pixel } = props

	return (
		<div style={{ marginTop: 20, marginBottom: 20 }}>
			<BounceLoader
				css={override}
				size={pixel ? pixel : 120}
				color={'#123abc'}
				loading={true}
			/>
		</div>
	)
}
