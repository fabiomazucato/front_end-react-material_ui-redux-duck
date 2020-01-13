export const breadcrumbConfig = [
	{
		path: 'people',
		breadcrumbName: 'Pessoas',
		children: [
			{
				path: 'list',
				breadcrumbName: 'Lista',
				default: true
			},
			{
				path: 'create',
				breadcrumbName: 'Cadastro',
				default: false
			}
		]
	},
	{
		path: '404',
		breadcrumbName: 'Página de erro'
	}
]
