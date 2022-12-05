import './app-info.scss'

const AppInfo = ({ allMoviesCount, favouriteMovieCount }) => {
	return (
		<div className='app-info'>
			<p className='fs-3 text-uppercase'>Number of all movies: {allMoviesCount}</p>
			<p className='fs-4 text-uppercase'>Favorite movie: {favouriteMovieCount}</p>
		</div>
	)
}

export default AppInfo
