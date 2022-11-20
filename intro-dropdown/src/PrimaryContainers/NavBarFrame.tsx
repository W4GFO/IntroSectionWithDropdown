import './NavBarFrameStyle.scss'
import SnapLogo from '../Images/SnapLogo.svg'
import CloseBarX from '../Images/icon-close-menu.svg'
import {MenubarItem} from '../Elements/MenubarItem'
import { MenubarSubFeatureItem } from '../Elements/MenubarSubFeatureItem'

type NavBarFrameProps = {}

export const NavBarFrame = (props: NavBarFrameProps) => {
	return (
		<nav className='navbarframe-main'>
			<img className='navbarframe-flex-item navbarframe-snap-logo' src={SnapLogo} />

			<span className='navbarframe-flex-item'>
				<MenubarItem title='Features' hasSubMenu={true} />
			</span>
			<span className='navbarframe-flex-item'>
				<MenubarItem title='Company' hasSubMenu={true} />
			</span>
			<span className='navbarframe-flex-item'>
				<MenubarItem title='Careers' />
			</span>
			<span className='navbarframe-flex-item'>
				<MenubarItem title='About' />
			</span>

			<p className='navbarframe-flex-item navbarframe-flex-item-void-element'></p>

			<p className='navbarframe-flex-item navbarframe-button-container'>
				<button className='navbarframe-login-button'>LogIn</button>
			</p>

			<div className='navbarframe-flex-item navbarframe-button-container'>
				<button className='navbarframe-register-button'>Register</button>
			</div>
		</nav>
	)
}