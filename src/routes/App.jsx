import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from '../contexts/GlobalContext'
import useGlobal from '../hooks/useGlobal'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Recipe from '../pages/Recipe'
import Timer from '../pages/Timer'
import NotFound from '../pages/NotFound'

export default function App() {
	const States = useGlobal()

	return (
		<GlobalContext.Provider value={States}>
			<BrowserRouter>
				<MainLayout>
					<Routes>

						<Route path='/my-recipes' element={<Home />} />
						<Route path='/my-recipes/' element={<Home />} />
						<Route path='/my-recipes/category' element={<Category />} />
						<Route path='/my-recipes/category/recipe' element={<Recipe />} />
						<Route path='/my-recipes/timer' element={<Timer />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</GlobalContext.Provider>
	)
}
