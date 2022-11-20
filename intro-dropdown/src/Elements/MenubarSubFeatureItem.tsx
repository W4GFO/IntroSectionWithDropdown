import './MenubarSubFeatureItem.scss'

//Image Imports
import TodoImage from '../Images/icon-todo.svg'

type MenubarItemProps = {
	className:string
	titleText:string
}

export const MenubarSubFeatureItem = (props: MenubarItemProps) => {
	return (
		<div className={props.className + ' menubaritem-element'}>
			<img src={TodoImage} alt='todo'/>
			<h5>{props.titleText}</h5>
		</div>
	)
}