import { Navigate, Route, Routes } from "react-router-dom";
import { StylesPage, OptionsPage } from "../pages";


export const VectorRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<StylesPage />} />
			<Route path="/:id" element={<StylesPage />} />
			<Route path="options" element={<OptionsPage />} />
		</Routes>
	)
}
