import { Navigate, Route, Routes } from "react-router-dom";
import { StylesPage, OptionsPage } from "../pages";


export const VectorRoutes = () => {
	return (
		<Routes>
			<Route path="styles" element={<StylesPage />} />
			<Route path="options" element={<OptionsPage />} />

			<Route path="/" element={<Navigate to="styles" />} />
		</Routes>
	)
}
