import './ParentContainerStyle.scss'

import {NavBarFrame} from './NavBarFrame'

type PrimaryContainerProps = {}

export const ParentContainer = (props: PrimaryContainerProps) => {
	return (
		<main>
			<NavBarFrame />
		</main>
	)
}