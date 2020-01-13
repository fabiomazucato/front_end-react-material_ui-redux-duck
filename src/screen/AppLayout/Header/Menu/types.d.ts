export interface IProps {}
export interface IViewProps {
	[x: string]: any
	handleChange: (event) => void
	handleMenu: (event) => void
	handleClose: () => void
	open: boolean
	anchorEl: any
	menuProps: any
}
