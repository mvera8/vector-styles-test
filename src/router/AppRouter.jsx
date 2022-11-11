import { Route, Routes } from "react-router-dom"
import { VectorRoutes } from "../vector/routes/VectorRoutes"

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path="/*" element={<VectorRoutes />} />
			</Routes>
		</>
	)
}