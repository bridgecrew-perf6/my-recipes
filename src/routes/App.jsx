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

						<Route path='/my_recipes' element={<Home />} />
						<Route path='/my_recipes/' element={<Home />} />
						<Route path='/my_recipes/category' element={<Category />} />
						<Route path='/my_recipes/category/recipe' element={<Recipe />} />
						<Route path='/my_recipes/timer' element={<Timer />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</MainLayout>
			</BrowserRouter>
		</GlobalContext.Provider>
	)
}
