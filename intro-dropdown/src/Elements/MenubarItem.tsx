import './MenubarItemStyle.scss'
import {FaChevronDown} from 'react-icons/fa'

type MenuBarItemProps = {
	title:string
	hasSubMenu?:boolean
}

export const MenubarItem = ({title, hasSubMenu}: MenuBarItemProps) => {
	const handleOnClick = (e:React.MouseEvent<HTMLSpanElement>) => {
		console.log('Menu item ' + title + ' clicked')
	}

	return (
		<div className='menubaritem-top-level-container'>
			<span className='menubaritem-top-level-menu' onClick={(e:React.MouseEvent<HTMLSpanElement>) => handleOnClick(e)}>
				<p className='menubaritem-top-level-menu-text'>{title}</p>
				{(hasSubMenu === true) ? <FaChevronDown className='menubaritem-top-level-menu-icon'/> : null}
			</span>
		</div>
	)
}