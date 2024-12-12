import { Input } from '@chakra-ui/react'

import { FC, useState } from 'react'
import styles from './Search.module.scss'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className={styles.search}>
			<div>
				<Input 
					type='search'
					onChange={e => setSearchTerm(e.target.value)}
					value={searchTerm}
					placeholder='Search'
				/>
			</div>
		</div>
	)
}

export default Search
