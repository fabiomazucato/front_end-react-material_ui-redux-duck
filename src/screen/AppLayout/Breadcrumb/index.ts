import { createElement, useEffect, useState } from 'react'

import { breadcrumbConfig } from '../../../config/Breadcrumb'

import View from './view'
import { useStyles } from './styles'

function BreadcrumbContainer(): JSX.Element {
	const classes = useStyles()
	const [pageBreadcrumb, setPageBreadcrumb] = useState<Array<any>>([])

	useEffect(() => {
		setBreadcrumb(window.location.pathname)
	}, [window.location.href])

	const setBreadcrumb = (pathRoute: string): void => {
		const pathRoutes = pathRoute.split('/').splice(1)

		const hadleBreadcrumb = []

		const pathFilter = breadcrumbConfig.find(b => b.path === pathRoutes[0])

		hadleBreadcrumb.push({
			path: pathFilter?.path,
			breadcrumbName: pathFilter?.breadcrumbName
		})

		if (pathFilter?.children) {
			pathRoutes.shift()

			const pathFilterChildren = pathFilter.children.filter(bc =>
				pathRoutes.length > 0
					? bc.path === pathRoutes[0]
					: bc.default === true
			)

			hadleBreadcrumb.push(...pathFilterChildren)
		}

		setPageBreadcrumb(hadleBreadcrumb)
	}

	const viewProps = {
		pageBreadcrumb,
		classes
	}

	return createElement(View, viewProps)
}

export default BreadcrumbContainer
